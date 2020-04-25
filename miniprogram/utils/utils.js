const tsFormatTime = inputTime => {
  let date;
  if(inputTime) {
    var time = parseInt(inputTime) * 1000;
    date = new Date(time);
  } else {
    date = new Date();
  }
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var str = y + '年' + m + '月' + d + '日 ';
  return str;
}

exports.tsFormatTime = tsFormatTime

