//Create isUnique: Implement and algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str){
  str = str.toLowerCase();
  var result = " ";
  for (var i = 0; i < str.length; i++){
    if (str.includes(str[i], i+1)){
      result = "we've got a repeater";
      break;
    } else {
      result = "how unique!";
    }
  }
  console.log(result);
}

isUnique("abcdefghijklmnopqrstuvwxyz");
isUnique("Lal");
