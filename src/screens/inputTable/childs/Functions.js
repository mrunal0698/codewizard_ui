import Helper from 'shared/helper';

  var fn = {};

  const GetProperties = (value, clsname, type) => {
    let attributes = [...value];
    if(type?.toLowerCase() === 'enum'){
      return attributes.map((attribute) => {
        const { name, value } = attribute;
  
        return { name, value };
      })
    } 
    if(type !== 'Complex') {
      attributes = attributes.map(att => att.name?.toLowerCase() ===`${clsname}id`.toLowerCase() ? {...att, isKey: true} : att);
  
      const IdField = attributes.find(att => att.isKey);
      if(Helper.IsJSONEmpty(IdField)){ 
        attributes = [ ...attributes, {
           name:`${clsname}Id`,
           isKey: true,
           type : "Long",
        }]
      }
    }

    return attributes.map(attribute => {
      const {
        isKey = false,
        type = "String",
        defaultValue = null,
        minValue = null,
        maxValue = null,
        isUnique = false,
        isRequired = false,
        precision = null
      } = attribute;
      const DType = fn.ToPascalCase(type);
      const name = fn.ToPascalCase(attribute.name || '');
      let _type = '';

      switch(DType){
        case 'Int':
          _type = `Edm.Int32`;
          break;
        case 'Long':
          _type = `Edm.Int64`;
          break;
        case 'Time':
          _type = `Edm.TimeOfDay`;
          break;
        case 'Float':
          _type = `Edm.Single`;
          break;
        default:
          _type = `Edm.${DType}`;
          break;
      }     

      return { name, isKey, type: _type, defaultValue, minValue, maxValue, isUnique, isRequired, precision };
    })
  }

  const getNavs = (navs) => {
    return navs.map(nav => {
     const {
       partner = '',
       isCollection = false,
       isNavigable = false,
       type = ''
     } = nav;
     const name =  fn.ToPascalCase(nav.name || '');
       return { name, type, partner, isCollection, isNavigable }
    })
  }
  
  const FilterMethods = (data) => {
    if(Helper.IsArrayEmpty(data)) return [];
    return data.map(({ id, parameters, ...rest }) => ({
      ...rest,
      parameters: parameters?.map(({ id, ...paramRest }) => paramRest) || []
    }));
  }
  
  fn.ToPascalCase = (str) =>  {
    if(Helper.IsNullValue(str)) return;
    const words = str.split(' ');
    let result = '';
    for (let word of words) {
        let cleanedWord = '';
        for (let char of word) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                cleanedWord += char;
            }
        }
        result += cleanedWord;
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  fn.ToInputJson = (DesignName = '', tables) => {
    const data = {
      model: {
        name:DesignName ,
        classes: tables.map(table => ({
          name: table.name,
          stereotype: table.stereotype || 'Entity',
          type: ['entity', 'file'].includes(table.stereotype?.toLowerCase()) ? 'Class' : table.stereotype,
          properties: GetProperties(table.properties,table.name,table.stereotype),

          ...(!['enum','complex','file'].includes(table.stereotype.toLowerCase()) && {
            navProperty: getNavs(table.navProperty),
            methods: FilterMethods(table.methods)
          })
        }))
      }
    };
      return data;
  }
  
  const UpdateProperties = (existingClass,newClass) => {
    const props = existingClass.properties.map(prop => {
      const newProp = newClass.properties.find(newProp => newProp.name === prop.name);
      return !Helper.IsJSONEmpty(newProp) ? { ...prop, ...newProp } : prop;
    });

    newClass.properties.forEach(newProp => {
      if (!props.some(prop => prop.name === newProp.name)) {
        const id = Helper.GetUniqueId(props);
        props.push({ ...newProp, id });
      }
    });
    return props;
  }

  const UpdateNavProperty = (existingClass,newClass) => {
    const navs = existingClass.navProperty.map(nav => {
      const _nav = newClass.navProperty.find(x => x.name === nav.name);
      return !Helper.IsJSONEmpty(_nav) ? { ...nav, ..._nav } : nav;
    });

    newClass.navProperty.forEach(newProp => {
      if (!navs.some(prop => prop.name === newProp.name)) {
        const id = Helper.GetUniqueId(navs);
        navs.push({ ...newProp, id });
      }
    });
    return navs;
  }

  const UpdateMethod = (existingClass,newClass) => {
    const methodList = existingClass?.methods?.map(mtd => {
      // const _method = newClass.methods.find(x => x.name === mtd.name);
      // const obj = {
      //   ...mtd, ..._method,
      //   parameters: _method.parameters.map((prm,idx) => ({ ...prm,id : idx+1 })) 
      // };
      // return !Helper.IsJSONEmpty(_method) ? obj : mtd;
      return mtd;
    });

    newClass.methods.forEach(mtd => {
      if (!methodList.some(prop => prop.name === mtd.name)) {
        const id = Helper.GetUniqueId(methodList);
        const parameters = mtd.parameters.map((prm,idx) => ({ ...prm,id : idx+1 }))
        methodList.push({ ...mtd, id, parameters });
      }
    });
    return methodList;
  }
  
  fn.MergeTables = (existingModel, newModel) => {
    let classes = [...existingModel];
  
    const newClasses = [
      ...(!Helper.IsJSONEmpty(newModel.entity) ? [newModel.entity] : []),
      ...(!Helper.IsJSONEmpty(newModel.entities) ? newModel.entities: []),
      ...(!Helper.IsJSONEmpty(newModel.model) ? newModel.model.classes : []),
      ...(!Helper.IsJSONEmpty(newModel.model?.enums) ? newModel.model.enums : [])
    ];

    if(!Helper.IsJSONEmpty(newModel.delta) && ["modified","deleted"].some(x => Object.keys(newModel.delta || []).includes(x))){
      classes = DeltaControls(newModel.delta, classes, newClasses)
    } else {
      newClasses.forEach(newClass => {
        const existingClass = classes.find(cls => cls.name === newClass.name);
        
        if(!Helper.IsJSONEmpty(newModel.delta) && !Helper.IsJSONEmpty(existingClass)){
          existingClass.properties = UpdateProperties(existingClass,newClass);  
          if(!['enum','complex','file'].includes(newClass.type.toLowerCase())){
            existingClass.navProperty = UpdateNavProperty(existingClass,newClass);
            existingClass.methods = UpdateMethod(existingClass,newClass);
          }
        }   
     }) 
    }

    // if (!Helper.IsArrayEmpty(newModel.delta.entites)) {
    //   newModel.delta.entites.addedd.map(name => {
    //     let newClass = newClasses.find(x => x.name === name);
    //     return [...classes,newClass ]
    //   })
    // }
    // }
    newClasses.forEach(newClass => {
      const existingClass = classes.find(cls => cls.name === newClass.name);
         
      if(Helper.IsJSONEmpty(existingClass)) {   
        classes.push({
          id: Helper.GetUniqueId(classes),
          name: newClass.name,
          stereotype: newClass.type && newClass.type.toLowerCase() !== 'class' ? newClass.type : "Entity",
          properties: newClass.properties.map((prop, idx) => ({
            id: idx + 1,
            ...prop
          })),
          ...(!['enum','complex','file'].includes(newClass.type.toLowerCase()) && {
              navProperty: newClass.navProperty.map((prop, idx) => ({
                id: idx + 1,
                ...prop
              })),

              methods: newClass.methods.map((mtd, idx) => ({
                id: idx + 1,
                ...{...mtd, parameters: mtd.parameters.map((prm,idx) => ({ ...prm,id : idx+1 }))}
              }))
             }
            )    
        });
      }
    });
    return classes;
  }

  //Delta controls for the tables
  const extractDeltaInfo = (changes) => {
    const addedMatch = /Added (.+) to (\w+)/.exec(changes);
    const deletedMatch = /Deleted (.+) from (\w+)/.exec(changes);
    const modifiedMatch = /Modified (.+) To (.+) for (\w+)/.exec(changes);
  
    if (addedMatch) {
      return { type: 'Added', field: addedMatch[2] };
    } else if (deletedMatch) {
      return { type: 'Deleted', field: deletedMatch[2] };
    } else if (modifiedMatch) {
      return { type: 'Modified', name: modifiedMatch[1], changeValue: modifiedMatch[2], field: modifiedMatch[3] };
    }
  
    return null;
  };
 
  const processModifiedClasses = (delta, deltaClasses, newClasses) => {
    delta?.modified?.forEach(data => {
      const deltaInfo = extractDeltaInfo(data.changes);
      if (!Helper.IsJSONEmpty(deltaInfo)) {
        deltaClasses.forEach(cls => {
          if (cls.name === data.entity) {
            if (deltaInfo.type === 'Deleted') {
              const deleteAll = data.changes.toLowerCase().includes("all");
              handleDeletedFields(cls, deltaInfo, data, deleteAll);
            } 

            else if (deltaInfo.type === 'Added') handleAddedFields(cls, deltaInfo, data, newClasses);

            else if (deltaInfo.type === 'Modified') handleModifiedFields(cls, deltaInfo, data, newClasses);
          }
        });
      }
    });
    return deltaClasses;
  };
   
  const handleDeletedFields = (cls, deltaInfo, data, deleteAll) => {
    if(deleteAll) { 
      if(['navigation','navProperty'].includes(deltaInfo.field))  cls.navProperty = []
      else cls[deltaInfo.field] = [];
      return;
    }

    if (deltaInfo.field === 'properties') cls.properties = cls.properties.filter(prop => prop.name !== data.propertyName);

    if (['navigation','navProperty'].includes(deltaInfo.field)) cls.navProperty = cls.navProperty.filter(nav => nav.name !== data.propertyName);

    if (deltaInfo.field === 'methods') cls.methods = cls.methods.filter(method => method.name !== data.propertyName);
  };
  
  const handleAddedFields = (cls, deltaInfo, data, newClasses) => {
    const newClassMatch = newClasses.find(x => x.name === cls.name);
    if (newClassMatch) {
      if (deltaInfo.field === 'properties') {
        const newProp = newClassMatch.properties.find(prop => prop.name === data.propertyName);
        cls.properties = [...cls.properties, { id: Helper.GetUniqueId(cls.properties), ...newProp }];
      }

      if (['navigation','navProperty'].includes(deltaInfo.field)) {
        const newNav = newClassMatch.navProperty.find(nav => nav.name === data.propertyName);
        cls.navProperty = [...cls.navProperty, { id: Helper.GetUniqueId(cls.navProperty), ...newNav }];
      }

      if (deltaInfo.field === 'methods') handleMethodAddition(cls, deltaInfo, data, newClassMatch);
    }
  };
  
  const handleMethodAddition = (cls, deltaInfo, data, newClassMatch) => {
    const excludedFields = ['name', 'description', 'returnType'];
    const mtdIndex = cls.methods.findIndex(x => x.name === data.propertyName);

    if (mtdIndex !== -1 && !excludedFields.includes(deltaInfo.name)) {
      const method = cls.methods[mtdIndex];
      const newMethod = newClassMatch.methods.find(method => method.name === data.propertyName);
      const parameters = newMethod?.parameters.map((x, idx) => ({ ...x, id: idx + 1 }));

      cls.methods = cls.methods.map((x, idx) => idx === mtdIndex ? { ...method, parameters } : x);
    } else {
      const id = Helper.GetUniqueId(cls.methods);
      const newMethod = newClassMatch.methods.find(method => method.name === data.propertyName);
      const parameters = newMethod.parameters.map((prm, idx) => ({ ...prm, id: idx + 1 }));

      cls.methods = [...cls.methods, { ...newMethod, id, parameters }];
    }
  };
  
  const handleModifiedFields = (cls, deltaInfo, data, newClasses) => {
    if (deltaInfo.field === 'properties') {
      const propIndex = cls.properties.findIndex(x => x.name === data.propertyName);

      if (propIndex !== -1) {
        cls.properties[propIndex][deltaInfo.name] = deltaInfo.changeValue;
      }
    }
    if (['navigation','navProperty'].includes(deltaInfo.field)) {
      const navIndex = cls.navProperty.findIndex(x => x.name === data.propertyName);
      if (navIndex !== -1) {
        cls.navProperty[navIndex][deltaInfo.name] = deltaInfo.changeValue;
      }
    }
    if (deltaInfo.field === 'methods') handleMethodModification(cls, deltaInfo, data, newClasses);
  };
  
  const handleMethodModification = (cls, deltaInfo, data, newClasses) => {
    const mtdIndex = cls.methods.findIndex(x => x.name === data.propertyName);
    const excludedFields = ['name', 'description', 'returnType'];

    if (mtdIndex !== -1 && !excludedFields.includes(deltaInfo.name)) {
      const foundmtd = newClasses.find(x => x.name === cls.name).methods.find(x => x.name === data.propertyName);
      const parameters = foundmtd?.parameters?.map((prm, idx) => ({ ...prm, id: idx + 1 }));

      cls.methods = cls.methods.map((x, idx) => idx === mtdIndex ? { ...x, parameters } : x);
    } else if (mtdIndex !== -1) {
      cls.methods[mtdIndex][deltaInfo.name] = deltaInfo.changeValue;
    }
  };
  
  const DeltaControls = (delta, classes, newClasses) => {
    let deltaClasses = classes;
    if (!Helper.IsArrayEmpty(delta.deleted)) {
      deltaClasses = classes.filter(cls => !delta.deleted.includes(cls.name));
      deltaClasses = deltaClasses.map(x => {
        const navProperty = x.navProperty.filter(nav => !delta.deleted.includes(nav.type));
        return { ...x, navProperty };
      });
    }
    return processModifiedClasses(delta, deltaClasses, newClasses);
  };
  
  // Model validation
  const allowedTypes = ['entity', 'class', 'enum', 'complex', 'file'];

  fn.validateModel = (model) => {
    const validationErrors = { errors: {} };
    const classNames = new Set();

    const addError = (errors, name, message) => {
      if (!errors[name]) errors[name] = [];
      errors[name].push(message);
    };

    const validateUniqueName = (set, name, context, entityErrors) => {
      if (set.has(name)) entityErrors.push(`Duplicate name "${name}" found in ${context}`);
      else if (name) set.add(name);
    };

    const validateProperties = (properties, entityErrors, propertyNames) => {
      properties.forEach((prop, idx) => {
        const keys = Object.keys(prop);
        if (keys.length !== 9) entityErrors.push(`Field ${prop.name || `(${idx + 1})`} should have all the values`);
        if (!prop.name) entityErrors.push(`Field ${prop.name || `(${idx + 1})`} is missing the 'Field Name'`);
        validateUniqueName(propertyNames, prop.name, 'properties', entityErrors);
      });
    };

    const validateNavProperties = (navProperties, entityErrors, propertyNames) => {
      navProperties.forEach((navProp, idx) => {
        const navKeys = Object.keys(navProp);
        if (navKeys.length !== 5) entityErrors.push(`Relationship ${navProp.name || `(${idx + 1})`} should have all the values`);
        if (!navProp.name) entityErrors.push(`Relationship ${navProp.name || `(${idx + 1})`} is missing the 'Relation Name'`);
        if (!navProp.type) entityErrors.push(`Relationship ${navProp.name || `(${idx + 1})`} is missing the 'Target table'`);
        validateUniqueName(propertyNames, navProp.name, 'navigation properties', entityErrors);
      });
    };

    const validateMethods = (methods, entityErrors, propertyNames) => {
      methods.forEach((method, idx) => {
        if (!method.name) entityErrors.push(`Method ${method.name || `(${idx + 1})`} is missing the 'Method Name'`);
        if (!method.returnType) entityErrors.push(`Method ${method.name || `(${idx + 1})`} is missing the 'Return Type'`);
        validateUniqueName(propertyNames, method.name, 'methods', entityErrors);
      });
    };

    model.classes.forEach((cls) => {
      const entityErrors = [];
      const propertyNames = new Set();

      const name =`${cls.name} ${cls.stereotype === 'Class' ? 'Api' : cls.stereotype}`;

      if (classNames.has(cls.name)) addError(validationErrors.errors, name, `Duplicate class name: ${cls.name}`);
      else classNames.add(cls.name);

      if (!allowedTypes.includes(cls.stereotype.toLowerCase())) addError(validationErrors.errors, name, `Invalid class type: ${cls.stereotype}`);

      if (cls.stereotype.toLowerCase() === 'enum') {
        cls.properties.forEach((prop, idx) => {
          if (!prop.name) entityErrors.push(`Enum field ${prop.name || `(${idx + 1})`} must have 'name'`);
          if (prop.value !== 0 && !prop.value) entityErrors.push(`Enum field ${prop.name || `(${idx + 1})`} must have 'value'`);
        });
        if (entityErrors.length) addError(validationErrors.errors, name, entityErrors,cls.stereotype);
        return;
      }

      validateProperties(cls.properties, entityErrors, propertyNames);

      if (['entity', 'class'].includes(cls.stereotype.toLowerCase())) {
        if (Array.isArray(cls.navProperty)) validateNavProperties(cls.navProperty, entityErrors, propertyNames);
        else if (cls.navProperty !== false) entityErrors.push(`Invalid navProperty value`);

        if (Array.isArray(cls.methods)) validateMethods(cls.methods, entityErrors, propertyNames);
      }

      if (entityErrors.length) addError(validationErrors.errors, name, entityErrors);
    });

    return validationErrors;
  };

  export default fn;