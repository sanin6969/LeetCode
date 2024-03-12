var mostWordsFound = function (sentences) {
    let s=[]
  for (let i = 0; i < sentences.length; i++) {
        console.log(sentences[i].length);
  }
  return s
};

let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
console.log(mostWordsFound(sentences));
