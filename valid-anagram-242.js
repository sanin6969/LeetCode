var isAnagram = function(s, t) {
let p=s.split('').sort().join('')
let q=t.split('').sort().join('')
return p==q
};
let s = "car", t = "rac"
isAnagram(s,t) 