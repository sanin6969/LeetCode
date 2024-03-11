var capitalizeTitle = function (title) {
  let lowerCase = title.toLowerCase().split(" ");
  let capitalize = lowerCase.map((word) => {
    if (word.length > 2) {
      var r = word.split("");
      r[0] = r[0].toUpperCase();
      return r.join("");
    } else {
      return word;
    }
  });
  return capitalize.join(" ");
};
let title = "First leTTeR of EACH Word";
console.log(capitalizeTitle(title));
