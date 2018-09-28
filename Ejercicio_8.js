var a = [[1, 4, 6], [7, 2, 6], [6, 2, 8]];
var b = [[7, 3, 7], [1, 3, 9], [3, 9, 5]];
function matrizAddition(a, b) {
    var res = [];
    a.forEach((t, n1) => {
      let sums = [];
      t.forEach((num, n2) => {
        sums.push(num + b[n1][n2]);
      });
      res.push(sums);
    });
    return res;
  }
console.log(matrizAddition(a, b));

