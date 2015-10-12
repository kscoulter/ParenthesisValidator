function parenthesisMatch(string) {
  var unmatched = 0;
  for(var char = 0; char <= string.length; char ++) {
    if (string[char] === "(") {
      unmatched += 1;
    }
    else if (string[char] === ")") {
      unmatched -= 1;
    }
    if (unmatched < 0) { //closing parenthesis starts before an open one
      return false
    }
  }
  if (unmatched === 0) { //there are no unmatched parenthesis
    return true
  }
  else { //there are unmatched parenthesis
    return false
  }
}

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  var string = document.querySelector("textarea").value;
  if (string) { //if it's not an empty string
    if (parenthesisMatch(string)) {
      document.getElementById("response").innerHTML = "<p>The parenthesis match!</p>"
    }
    else {
      document.getElementById("response").innerHTML = "<p>The parenthesis don't match!</p>"
    }
  }
  else {
    alert("Please enter valid input")
  }
})
