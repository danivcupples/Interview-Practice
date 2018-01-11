//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2){
  var result = " ";
  if (str1.length !== str2.length){
    result = "not a permutation!";
  } else {
    for (var i = 0; i < str1.length; i++){
      if (str2.includes(str1[i]) == false){
        result = "not a permutation!";
        break;
      } else {
        result = "totally a permutation!";
      }
    }
  }
  console.log(result);
}

checkPermutation("abc", "cab");
checkPermutation("abcd", "cab");
checkPermutation("abcd", "efgh");
