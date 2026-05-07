import moment from "moment";

var fn = {};

fn.IsNull = (e) => {
    if (e === undefined || e === null) return true;
    return false;
};

fn.IsNullValue = (e) => {
    if (e === undefined || e === null || e === "") return true;
    return false;
};

fn.IsJSONEmpty = (e) => {
    if (fn.IsNull(e)) return true;
    for (var key in e) {
        if (Object.prototype.hasOwnProperty.call(e, key)) {
            return false;
        }
    }
    return true;
};

fn.IsArrayEmpty = (e) => {
  if(fn.IsNull(e)) return true;
  return e.length === 0;
}

fn.GetUniqueId = (e,key = 'id') => {
    if(fn.IsArrayEmpty(e)) return 1;
    return e.length > 0 ? Math.max(...e.map(i => i[key])) + 1 : 1;
}

fn.ToDate = (e, format, utc) => {
    let dt = e;
    if (fn.IsNullValue(e)) dt = new Date();
    if (fn.IsNullValue(format)) return moment(new Date(dt));
    if (utc) return moment(dt).utc().format(format);
    return moment(new Date(dt)).format(format);
};

fn.GetScreenPath = (path) => {
  const segments = path.split('/').filter(Boolean);
  if (!isNaN(segments[segments.length - 1])) {
    segments.pop();
  }
  return `/${segments.join('/')}`;
}

export default fn;