var csdl = require("../database/mongodb");
var kq_tra_ve = function (dshoa) {
  kq = "<table width=100%>";
  var vt = 0;
  for (i = 0; i < dshoa.length; i++) {
    if (vt % 3 == 0) kq = kq + "<tr>";
    kq = kq + "<td><img src='/images/" + dshoa[i].hinh + "'/><br>";
    kq =
      kq +
      "<a href='/chi-tiet/" +
      dshoa[i].mahoa +
      "'><strong>" +
      dshoa[i].tenhoa +
      "</strong></a><img src='/images/gio_hang.jpg'/><br><i>Giá bán :</i>" +
      dshoa[i].giaban +
      "vnđ</td>";
    vt++;
    if (vt % 3 == 0) kq = kq + "</tr>";
  }
  kq = kq + "</table>";
  return kq;
};
module.exports.getAll = async function () {
  //Lay du lieu tu database
  var dshoa = await csdl.select("hoa", "");
  kq = kq_tra_ve(dshoa);
  return kq;
};
module.exports.getByMaLoai = async function (maloai) {
  var query = { maloai: maloai };
  var dshoa = await csdl.select("hoa", query);
  kq = kq_tra_ve(dshoa);
  return kq;
};
module.exports.getByName = async function (keyword) {
  var query = {
    $or: [
      { tenhoa: new RegExp(keyword, "i") },
      { mota: new RegExp(keyword, "i") },
    ],
  };
  var dshoa = await csdl.select("hoa", query);
  kq = kq_tra_ve(dshoa);
  return kq;
};
