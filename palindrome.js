function palindrome(str) {
  var Forw = "";
  var Rewr = "";
  var len = str.length;
  for (var i = 0; i < len; i++) {
   var forward = str[i];
   Forw += forward;
  }
  for (var i = len-1; i >= 0; i--) {
    var reward = str[i];
    Rewr += reward
  }
  if (Rewr == Forw) {
    return true
  } else {
    return false
  }
}

var word = prompt("Inserisci una parola: ");
var isPal = palindrome(word);

if (isPal) {
  document.getElementById("input").innerHTML = word + " è palindroma";
} else {
  document.getElementById("input").innerHTML = word + " NON è palindroma";
}
