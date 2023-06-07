function palindrome() {
  var theWord = prompt("write ur word");
  var caseSensative = confirm("case sensative?");

  var reversedWord = "";
  if (!caseSensative) {
    theWord = theWord.toLowerCase();
  }

  for (var i = theWord.length - 1; i >= 0; i--) {
    reversedWord += theWord[i];
  }

  if (theWord === reversedWord) {
    console.log("string is palindrome");
  } else {
    console.log("string is not palindrome");
  }
}

palindrome();

/////////////////2////////////////////

function countE(theWord) {
  var count = 0;

  for (var i = 0; i <= theWord.length; i++) {
    if (theWord[i] == "E" || theWord[i] == "e") {
      count++;
    }
  }
  return count;
}

console.log(countE("elephant"));

////////////////////3//////////////////////

function takeInfo() {
  do {
    var userName = prompt("your name is");
  } while (isFinite(userName));

  do {
    var phoneNum = prompt("your phone num is");
  } while (!(phoneNum.length == "8"));

  do {
    var mobileNum = prompt("your mobile is");
    var myReg = /^01[012]\d{8}$/;
    var status = myReg.test(mobileNum);
  } while (!status);

  do {
    var email = prompt("your email is");
    var myReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var status = myReg.test(email);
  } while (!status);

  do {
    var color = prompt("which color");
    if (
      color.toLowerCase() == "red" ||
      color.toLowerCase() == "blue" ||
      color.toLowerCase() == "green"
    ) {
      var status = true;
    } else {
      var status = false;
    }
  } while (!status);

  document.write(
    '<div style="color:' + color + ';">' + "your name is " + userName + "</div>"
  );
  document.write(
    '<div style="color:' +
      color +
      ';">' +
      "your phone is " +
      phoneNum +
      "</div>"
  );
  document.write(
    '<div style="color:' +
      color +
      ';">' +
      "your mobile is " +
      mobileNum +
      "</div>"
  );
  document.write(
    '<div style="color:' + color + ';">' + "your email is " + email + "</div>"
  );
}

takeInfo();
