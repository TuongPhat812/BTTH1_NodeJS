// var csdl = require("../database/database");
// module.exports = async function (tendn, matkhau) {
//   var chuoi =
//     "SELECT * from khachhang where TenDN='" +
//     tendn +
//     "' and MatKhau='" +
//     matkhau +
//     "'";
//   var dskh = await csdl.DocBang(chuoi);
//   if (dskh.length > 0) return dskh[0];
//   return "";
// };
var csdl = require("../database/mongodb");
module.exports = async function (tendn, matkhau) {
  var query = {
    $and: [{ ten_dn: tendn }, { mat_khau: matkhau }],
  };
  var dskhachhang = await csdl.select("khachhang", query);
  if (dskhachhang.length > 0) return dskhachhang[0];
  return "";
};
