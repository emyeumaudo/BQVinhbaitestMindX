//A Bai 1 Tim so doi dien voi so inputNumber
function findOppositeNumber(n, inputNumber) {
  return (inputNumber + n / 2) % n;
}
console.log(findOppositeNumber(10, 2));

// Bai 2 Viet 1 ham nhan vao 2 chuoi s1 và s2
function merge2String(a, b) {
  var ret = "";
  if (a.length < b.length) {
    var j = 0;
    for (var i = 0; i < a.length; i++) {
      ret = ret.concat(a[i]);
      ret = ret.concat(b[i]);
    }
    ret = ret.concat(b.slice(i));
  } else {
    for (var i = 0; i < b.length; i++) {
      ret = ret.concat(a[i]);
      ret = ret.concat(b[i]);
    }
    ret = ret.concat(a.slice(i));
  }
  return ret;
}
console.log(merge2String("abc", "123"));
