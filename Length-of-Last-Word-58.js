var lengthOfLastWord = function (s) {
  let result = s.trim().split(" ").reverse();
  return result[0].length;
};
let s = "   fly me   to   the moon  ";
lengthOfLastWord(s);
