let str = "weqar is a inteligent boy";
let str1 = str.split(" ");
let item = "is";
let count = 0;
// console.log(str1)

for (let i in str1) {
  if (str1[i] == "bey") {
    console.log("element found in this index", i);
    count++;
  }
}
if (count == 0) {
  console.log("element not found");
}
