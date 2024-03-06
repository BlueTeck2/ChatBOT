function checklogindetail(uname, pwd) {
var unamepwd = {};

unamepwd["admin1"] = "admin";
unamepwd["spatel"] = "to123";
unamepwd["dpatel"] = "Geeksfordeeks";
unamepwd["tpatel"] = "Geeksformeeks";

if (unamepwd[uname] && unamepwd[uname] === pwd) {
  return true;
} else {
  return false;
}
function checklogindetail(uname, pwd) {
  var unamepwd = {};

  unamepwd["admin1"] = "admin";
  unamepwd["spatel"] = "to123";
  unamepwd["dpatel"] = "Geeksfordeeks";
  unamepwd["tpatel"] = "Geeksformeeks";

  if (unamepwd[uname] && unamepwd[uname] === pwd) {
    return true;
  } else {
    return false;
  }
}
