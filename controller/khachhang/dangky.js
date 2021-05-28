var csdl = require("../database/mongodb");
module.exports = async function (khachhang) {
  var dskhachhang = await csdl.select("khachhang", "");
  if (
    khachhang.ten_dn == "" ||
    khachhang.mat_khau == "" ||
    khachhang.mat_khau1 == "" ||
    khachhang.ho_ten == "" ||
    khachhang.email == "" ||
    khachhang.dia_chi == "" ||
    khachhang.so_dt == ""
  ) {
    return "<p>Không được để trống thông tin!</p>";
  }
  if (khachhang.mat_khau != khachhang.mat_khau1) {
    return "<p>Mật khẩu xác nhận không giống mật khẩu</p>";
  }
  if (dskhachhang.length > 0) {
    for (i = 0; i < dskhachhang.length; i++) {
      if (dskhachhang[i].ten_dn == khachhang.ten_dn)
        return "<p>Tên đăng nhập đã tồn tại</p>";
    }
  }
  csdl.insert("khachhang", khachhang);
  return "<p>Đăng ký thành công</p>";
};
