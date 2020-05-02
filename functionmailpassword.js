function strRandom() {
    var a = 256,
      b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      c = b[Math.floor(Math.random() * b.length)],
      d = 1,
      e = '1234567890'+b
      for (; d < a; d++) {
        c += e[Math.floor(Math.random() * e.length)];
      }
      return c;
    }
    strRandom();
console.log(strRandom());