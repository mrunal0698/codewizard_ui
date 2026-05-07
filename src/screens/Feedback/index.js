import React,{useEffect, useState , useRef } from "react";

import { Text, Button, Img, Input, SelectBox } from "components";
import { useAuth0 } from "@auth0/auth0-react";
import posthog from "posthog-js";
import { SendFeedback, SetFeedbackDoc } from "shared/services";
import AlertBoxModal from "modals/AlertBoxModal";
import { useNavigate } from "react-router-dom";
import CWModal from "modals/Modal";
import { Collapse } from "react-collapse";
import Helper from "shared/helper";
import { useSearchParams } from "react-router-dom";

const EmojiForm = ({ rows, setEmojiForm, setShowSuccessNote }) => {
  const [rating, setRating] = useState(null);

  const emojiContainerRef = useRef(null);
  const { user } = useAuth0();

  const emojis = [{ name : "Terrible", emoji : "😡" }, { name : "Bad", emoji : "😕" }, { name : "Okay", emoji : "😐" }, { name : "Good", emoji : "😊" }, { name : "Excellent", emoji : "😍" }];

  const handleSubmit = async (ratingGiven) => {
     const payload =  {
        "FeedbackComment": rows.FeedbackComment,
        "DateOfFeedback": Helper.ToDate(new Date(), "YYYY-MM-DD"),
        "IsActive": true,
        "Rating": ratingGiven ? rating?.toString() : null,
        "GivenBy": {
        "UserName": rows.Email,
        "Name": rows.Name,
        "Email": rows.Email,
        "CompanyName": rows.CompanyName,
        "Designation": rows.Designation,
        "CreatedDate": Helper.ToDate(new Date(), "YYYY-MM-DD"),
        "LinkedInURL": rows.LinkedInURL,
        UserProfilePic: rows.DocId
      }
    }

    global.Busy(true);
      // Track Feedback event
      posthog.capture('Feedback', {
        email: user?.email,
      });

    const res = await SendFeedback(payload);
    global.Busy(false);
    setEmojiForm(false);
    if(res.status){
      setRating(null);
      setShowSuccessNote(true);
    }else {
      global.AlertPopup("error","Failed to submit feedback");   
    }
  };

  const onChange = (index) => {
      setRating(index + 1);
  };

  return (
    <div className="relative max-w-md mx-auto p-5 pb-0">
      <Img
        src='images/img_close.svg'
        className="h-[26px] w-[26px] rounded-full absolute top-1 right-1 cursor-pointer hover:bg-hint"
        alt="info"
        onClick={() => handleSubmit(false)}
      >
      </Img>
      <Text className="text-core font-semibold my-4"
        as="h5" variant="h5"
      >
        Rate Your Experience
      </Text>
      
      <div className="whitespace-nowrap py-6" ref={emojiContainerRef} style={{ display: "flex", gap: "1rem" }}>
        {emojis.map((emoji, index) => (
          <div className="data-label-bottom" data-label={emoji.name}>
            <div
              key={index}
              className={`text-3xl cursor-pointer px-2 hover:scale-150 transition-all ease-in-out ${rating === index + 1 ? "scale-150" : ""}`}
              onClick={() => onChange(index)} 
            >
              {emoji.emoji}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-5 mx-auto">
        <Button
          className="bg-secondary text-primary py-2 rounded-md opacity-80 hover:opacity-100 px-3 w-auto"
          onClick={() => handleSubmit(false)}
        >
          Not Now
        </Button>
          <Button
            className={`${Helper.IsNullValue(rating) ? "bg-secondary text-hint" : "bg-primary text-white hover:bg-blue-600"} py-2 px-4 rounded-md w-auto`}
            onClick={() => !Helper.IsNullValue(rating) && handleSubmit(true)}
          >
            Submit
          </Button>
      </div>
    </div>
  );
};

const FileInput = ({ name, label, onChangeHandler, rows }) => {
  const [preview, setPreview] = useState(rows?.ProfilePic || "");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onChangeHandler(name,file); // Call the existing handler
    }
  };

  return (
    <div className="flex flex-col gap-[8px] items-start justify-between self-stretch sm:w-[100%] relative w-[auto]">
        {preview && (
        <img src={preview} alt="Profile Preview" className="w-20 h-20 object-cover rounded-full border border-gray-700 mb-2" />
      )}

      <label className="cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 text-sm font-medium">
        Choose {label}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          name={name}
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

const FormField = ({ type, onChange, error, rows, options, label, name, placeholder, value, onDropDownChange, className, valueKey, labelKey }) => {

  const OnDropDownChange = (name, data) => {
   if (onDropDownChange) onDropDownChange(name, data.value);
  }

  const OnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(onChange) onChange(name, value);    
  }

  return(
    <>
      <div className={`flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-auto mb-4 ${className}`}>
        <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
          <Text
            className="font-semibold text-gray_300 text-left w-[auto]"
            variant="body2"
          >
            {label}
          </Text>
        </div>
        {type === 'dropdown' && (
          <SelectBox
            className="bg-gray_902 font-normal not-italic rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
            placeholderClassName="text-gray_300"
            name={name}
            placeholder={placeholder}
            isSearchable={false}
            isMulti={false}
            options={options}
            onChange ={OnDropDownChange}
            value = {value}
            valueKey={'GitHubCredId'}
            labelKey={'Name'}
            indicator={
              <Img
                src="images/img_arrowdown_gray_50_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="arrow_down"
              />
            }
          />
        )}
        {type === 'text' && (
          <>
            <Input
              wrapClassName= {`${error[name] ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-full`}
              className="font-normal not-italic p-[0] placeholder:text-hint border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] focus:border-gray_501 w-full"
              name={name}
              placeholder={`Your ${label}`}
              onChangeHandler={OnChange}
              //  validateForm={validateForm}
              value={rows[name]}
            />
          </>
        )}

        {type === 'textarea' && (
            <textarea
            id="Feedback"
            rows="6"
            className="block w-[100%] text-sm text-gray_300 bg-gray_902 rounded-lg p-[10px] border-[1px] solid focus:border-gray_501 !font-inter !font-light placeholder:text-hint !text-[12px]"
            placeholder="We love hearing from you! Tell us what you enjoyed."
            onChange={OnChange}
            // onBlur={validateForm}
            name={name}
            value={rows[name]}
          />
        )}

        {type === 'file' && (
          <FileInput name={name} label={label} rows={rows} onChangeHandler={onChange}/>
        )}

        {error[name] && 
          <Text
            className="font-normal not-italic text-left text-red_400 w-[auto]"
            variant="body3"
          >
            {error[name]}
          </Text>
        }
      </div>
    </>
  )
}

const fields = [
  { name : "Name", type: "text", label : "Name", required : true },
  { name : "Email", type: "text", label : "Email", required : true},
  { name : "FeedbackComment", type: "textarea", label : "Your Feedback", required : true }
]

const FeedBack = () => {
  const [rows, setRows] = useState({});
  const [error, setError] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [emojiForm, setEmojiForm] = useState(false);
  const [showSuccessNote, setShowSuccessNote] = useState(false);

  const Navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if(!isLoading && (!rows.Name && !rows.Email)){
        setRows({
            Name : user?.name,
            Email : user?.email
        })
    }
  },[user, isLoading])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const errors = fields.reduce((acc,field) => {
      const err = validateForm(field.name, rows[field.name]);
      return { ...acc, ...err }
    }, {})
    const _errors = Object.entries(errors).filter(([key, value]) => value);

    if(!Helper.IsArrayEmpty(_errors)){
        global.AlertPopup("error","Please fill all the details");   
    }else{
       if(rows.ProfilePic){
        const formData = new FormData();
        formData.append("file", rows.ProfilePic);
        const headers = {
          "DocType": rows.ProfilePic?.type,
          "DocName": rows.ProfilePic?.name
        }

        global.Busy(true);
        const res = await SetFeedbackDoc(formData, headers);
        if(res.status){
          setRows(prev => (
            { ...prev, DocId : res.values.DocId }
          ))
        }
        global.Busy(false);
       }
       setEmojiForm(true);
    }
  }

 const onChangeHandler = (name, value) => {
    setRows(prev => ({
          ...prev,[name] : value
      }))
      if(error[name]) validateForm(name, value);
    }

  const validateForm = (name, value) => {
    let _error = { [name] : "" };
    switch(name){
      case "Name" :
          if(!value){
          _error[name] = "Please enter your name"
          }
          else{
          const fullNameregex = /^[a-zA-Z ]*$/;
          const fullNameregexTest = fullNameregex.test(value);
          if(!fullNameregexTest){
              _error[name] = "Name should contain only alpabets"
          }
          }
          break;
      case "Email" :
        if(!value){
          _error[name] = "Please enter your email"
          }else {
          const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          const emailRegexTest = emailRegex.test(value);
          if(!emailRegexTest){
              _error[name] = "Please enter valid email"
          }
        }
        break ;
      case "FeedbackComment" :
          if(!value){
            _error[name] = "Please fill the feedback"
          }
          else if(value.split('').length > 250){
            _error[name] = "Please fill the feedback upto 250 characters"
          }
          break;
      default :
          break;            
      }  
    setError(prev => (
      { ...prev, ..._error }
    )) 
    return _error;
  }

  useEffect(() => {
    const Name = searchParams.get('name');
    const Email = searchParams.get('email');
    setRows(prev => ({
      ...prev, ...{Name,Email}
    }))
  },[searchParams])

  const handleNavigation = () => {
    setShowSuccessNote(false)
    Navigate("/")
  }

  useEffect(() => {
    document.title = "Code Wizard - Feedback";
  }, []);

  return (
    <>
      <div className="bg-gray_900 flex md:flex-col items-start justify-evenly w-[100%] max-w-[1130px] p-10 sm:p-4 mx-auto">
          <Img
            src='images/CW-logo.png'
            className="w-[100px] h-[47px] fixed left-5 top-5"
            alt="Feedback"
          />
        <div className="flex justify-center items-center w-[40%] h-full sm:w-[80%] md:mx-auto sm:hidden md:static fixed top-5 left-4">
          <Img
            src="images/44996000_9019827.svg"
            alt="Feedback"
            className="md:w-full w-[545px] object-cover"
          />
        </div>
        <div className="pl-12 sm:pl-0 pt-4 flex flex-col gap-[24px] items-start justify-start w-[60%] sm:w-[100%] max-w-[512px] md:mx-auto ml-auto">
         <Text
          className="font-medium not-italic text-core text-left sm:mt-14"
          as="h2"
          variant="h2"
          >
           Feedback
          </Text>
          <Text
          className="font-normal not-italic text-gray_501 text-left w-[auto]"
          as="h6"
          variant="h6"
          >
            Your feedback helps us grow! If you love your experience with Code-Wizard, let us know what you enjoy the most — it keeps us motivated to build even better features for you!
          </Text>
          <form type="submit" className="w-full" onSubmit={onSubmitHandler} >
            {fields.map(field => (
              <FormField onChange={onChangeHandler} error={error} rows={rows} {...field} />
            ))}

            <div className="flex items-center gap-[12px] shrink-0 justify-start w-[auto] py-2">
              <Text
                className="font-medium text-gray_50 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Additional Information 
                <span className="text-hint text-sm"> (optional) </span>          
              </Text>
              <Img src="images/img_arrowdown_gray_50_24x24.svg" 
                className={`${showMore ? "rotate-180" : "rotate-0"} bg-secondary w-6 h-6 ease-in-out transition-[all] duration-500 cursor-pointer rounded-full`}
               onClick={() => setShowMore(!showMore)}
              />
            </div>
            
            <Collapse isOpened={showMore} theme={{ collapse: 'ReactCollapse--collapse' }}>
              <FormField type="text" name="CompanyName" label="Company Name" onChange={onChangeHandler} error={error} rows={rows}/>
              <FormField type="text" name="Designation" label="Designation" onChange={onChangeHandler} error={error} rows={rows}/>
              <FormField type="text" name="LinkedInURL" label="LinkedIn URL" onChange={onChangeHandler} error={error} rows={rows}/>
              <FormField type="file" name="ProfilePic" label="Profile Picture" onChange={onChangeHandler} error={error} rows={rows}/>
            </Collapse>

            <Button type="submit" className="bg-gradient cursor-pointer font-medium px-[12px] py-[16px] mt-4 rounded-[4px] text-[16px] text-center text-gray_50 sm:w-[100%] w-full">
              Submit Feedback
            </Button>
          </form>

        </div>
      
        <CWModal open={emojiForm}>
          <EmojiForm rows={rows} setEmojiForm={bool => setEmojiForm(bool)} setShowSuccessNote={bool => setShowSuccessNote(bool)}/>
        </CWModal>
        <AlertBoxModal 
           title={`We Appreciate Your Input!`}
           isOpen={showSuccessNote}
           confirmText="Proceed"
           message={`Your feedback has been received. We value your thoughts and will use them to improve our services. Thank you!`}
           onConfirm={() => handleNavigation()}
        />
      </div>
    </>
  );
};

export default FeedBack;