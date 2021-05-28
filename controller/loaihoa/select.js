// JavaScript Document
var csdl = require("../database/mongodb");
// JavaScript Document
module.exports = async function () {
  //khởi tạo danh sách loại hoa
  var dsloaihoa = await csdl.select("loaihoa", "");
  //Duyệt và xử lý xuat thông tin
  var kq = "";
  for (i = 0; i < dsloaihoa.length; i++) {
    kq =
      kq +
      "<a href='/loai-hoa/" +
      dsloaihoa[i].maloai +
      "'>" +
      dsloaihoa[i].tenloai +
      "</a><br>";
  }
  return kq;
};
