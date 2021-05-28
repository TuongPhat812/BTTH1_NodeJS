module.exports = async function (kh) {
  var tenkh = "";
  if (kh != "" && kh != undefined) tenkh = "Chào " + kh.ho_ten;
  return tenkh;
};
