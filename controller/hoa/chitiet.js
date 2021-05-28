var csdl = require("../database/mongodb");
module.exports = async function (id) {
  //Lay du lieu tu database
  var query = { mahoa: id };
  var dshoa = await csdl.select("hoa", query);
  //thao tac voi du lieu
  kq = "<table width=50% style='border-style: solid'>";

  kq =
    kq +
    "<tr><td align='right'><img src='/images/" +
    dshoa[0].hinh +
    "'/></td><td align='left'><b style='font-size: 32px'>" +
    dshoa[0].tenhoa +
    "</b><br><br><i>Giá bán: </i>" +
    dshoa[0].giaban +
    "<br><br><i>Thành phần chính:</i><br>" +
    dshoa[0].mota +
    "<br><br><a href='/'>Quay về trang chính</a></td></tr>";

  kq = kq + "</table>";
  return kq;
};
