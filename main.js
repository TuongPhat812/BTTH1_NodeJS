// JavaScript Document
//Bước 1 :khởi tạo Express
var express = require("express");
var app = express();
//khai bao view engine
app.set("view engine", "ejs");
//khoi tao doi tuong xu ly tap tin
var tt = require("fs");
//Khởi tạo đường dẫn cho thư mục public
var publicDir = require("path").join(__dirname, "/public");
app.use(express.static(publicDir));
app.use(express.urlencoded());
var session = require("express-session");
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "1234567abc",
    cookie: {
      maxAge: 60000
    },
  })
);
//tạo đối tượng loại hoa
var lh = require("./controller/loaihoa");
var h = require("./controller/hoa");
var kh = require("./controller/khachhang");


//Trang chu
app.get("/", async function (req, res) {
  ttlh = await lh.select();
  hienthi = await h.display.getAll();
  tenkh = await kh.hienthikh(req.session.kh);
  res.render("index", {
    loaihoa: ttlh,
    dscachoa: hienthi,
    tendn: tenkh
  });
});

//Loc loai hoa
app.get("/loai-hoa/:maloai", async function (req, res) {
  ttlh = await lh.select();
  hienthi = await h.display.getByMaLoai(req.params.maloai);
  tenkh = await kh.hienthikh(req.session.kh);
  res.render("index", {
    loaihoa: ttlh,
    dscachoa: hienthi,
    tendn: tenkh
  });
});

//Chi tiet hoa
app.get("/chi-tiet/:id", async function (req, res) {
  hienthi = await h.chitiet(req.params.id);
  res.render("trang_chi_tiet_hoa", {
    chitiet: hienthi
  });
});

//Trang tim kiem
app.get("/tim-kiem", async function (req, res) {
  hienthi = await h.display.getAll();
  res.render("trang_tim_kiem", {
    dshoa: hienthi
  });
});
app.post("/tim-kiem", async function (req, res) {
  hienthi = await h.display.getByName(req.body.ten);
  res.render("trang_tim_kiem", {
    dshoa: hienthi
  });
});

//Dang nhap
app.post("/dang-nhap", async function (req, res) {
  var khachhang = await kh.dangnhap(req.body.ten_dn, req.body.mat_khau);
  req.session.kh = khachhang;
  //console.log(khachhang);
  ttlh = await lh.select();
  hienthi = await h.display.getAll("", "");
  tenkh = await kh.hienthikh(req.session.kh);
  //console.log(tenkh);
  res.render("index", {
    loaihoa: ttlh,
    dscachoa: hienthi,
    tendn: tenkh
  });
});

//Trang them loai hoa
// app.get("/them-loai-hoa", async function (req, res) {
//   res.render("trang_them_loai_hoa");
// });

//Trang dang ky
app.get("/dang-ky", async function (req, res) {
  res.render("trang_dang_ky", {
    thongbao: ""
  });
});

app.post("/dang-ky", async function (req, res) {
  var thongbaodangky = await kh.dangky(req.body);
  res.render("trang_dang_ky", {
    thongbao: thongbaodangky
  });
});

//Bước 3: lắng nghe yêu cầu từ client
app.listen(3000);
console.log("Listen at port 3000");