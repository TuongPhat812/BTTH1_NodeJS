module.exports = function (text) {
  const dsHoa = text.split("/*").map(function (line) {
    var arr = line.split("|");
    return {
      mahoa: arr[0],
      maloai: arr[1],
      tenhoa: arr[2],
      dongia: arr[3],
      hinh: arr[4],
      mota: arr[5],
    };
  });

  dsHoa.shift();
  return dsHoa;
};
