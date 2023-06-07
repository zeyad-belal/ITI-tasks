function Author(authN, authE) {
  this.authorN = authN;
  this.authorE = authE;
}

function Book(n, p, author) {
  this.name = n;
  this.price = p;
  this.author = author;
}

var numBooksBtn = document.getElementsByClassName("confirmBooks")[0];
var numOfBooksInput = document.getElementsByClassName("numofBooks")[0];
var numOfBookForm = document.getElementsByClassName("numofbForm")[0];
var bookInfoForm = document.getElementsByClassName("bookInfoForm")[0];
var addBookBtn = document.getElementById("addBook")

var numberOfBooks;
numBooksBtn.addEventListener("click", function (e) {
  e.preventDefault();
  numberOfBooks = parseInt(numOfBooksInput.value);
  if (numberOfBooks) {
    numOfBookForm.style.display = "none";
    bookInfoForm.style.display = "flex";
  }
});

var arrOfBooks = [];
addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var bookName = document.getElementById("bookName").value;
  var bookPrice = document.getElementById("bookPrice").value;
  var authorName = document.getElementById("authorName").value;
  var authorEmail = document.getElementById("authorEmail").value;

  
  var formIsvalid = bookName &&bookPrice&&authorName&&authorEmail ? true :false;
  
  if(formIsvalid){
    var theAuthor = new Author(authorName, authorEmail);
    var theBook = new Book(bookName, bookPrice, theAuthor)
    arrOfBooks.push(theBook);

    document.getElementById("bookName").value = "";
    document.getElementById("bookPrice").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("authorEmail").value = "";

    numberOfBooks--;
    //DISPLAYING THE TABLE
    if (!numberOfBooks) {
      var myTable = document.getElementById("booksTable");
      var tBody = document.getElementsByTagName("tbody")[0];
      bookInfoForm.style.display = "none";
      myTable.style.display = "table";

      tBody.innerHTML = "";
      arrOfBooks.forEach((book, index) => {
        var editBtn = document.createElement("button");
        var deleteBtn = document.createElement("button");

        editBtn.style.cursor = "pointer";
        deleteBtn.style.cursor = "pointer";

        editBtn.innerText = "edit";
        deleteBtn.innerText = "delete";

        var tableData1 = document.createElement("td");
        var tableData2 = document.createElement("td");

        tableData1.append(editBtn);
        tableData2.append(deleteBtn);

        //updating table data
        tBody.innerHTML +=
          "<tr><td>" + book.name + "</td>" +
          "<td>" + book.price + "</td>" +
          "<td>" + book.author.authorN +"</td>" +
          "<td>" + book.author.authorE + "</td></tr>";
        tBody.children[index].append(tableData1, tableData2);
      });

      var unchangedValues = [];
      tBody.addEventListener("click", (e) => {
        if (e.target.tagName === "TD") {
          // e.stopPropagation();
          return;
        }
        var row = e.target.parentNode.parentNode; //tr
        var fields = row.children; //tds

        //DELETE BUTTON
        if (e.target.innerText === "delete") {
          row.remove();

          //EDIT BUTTON
        } else if (e.target.innerText === "edit") {
          unchangedValues = [];
          for (var i = 0; i < 4; i++) {
            unchangedValues.push(fields[i].innerText);
            fields[i].innerHTML = "<input type='text' value='" + fields[i].innerText+ "'>"
          }
          fields[4].innerHTML = "<button style='cursor:pointer;'>save</button>";
          fields[5].innerHTML = "<button style='cursor:pointer;'>cancel</button>";

          //SAVE BUTTON
        } else if (e.target.innerText === "save") {
          for (var i = 0; i < 4; i++) {
            // input values as values for td
            fields[i].innerText = fields[i].children[0].value; 
          }
          fields[4].innerHTML = "<button style='cursor:pointer;'>edit</button>";
          fields[5].innerHTML = "<button style='cursor:pointer;'>delete</button>";

          //CANCEL BUTTON
        } else if (e.target.innerText === "cancel") {
            for (var i = 0; i < 4; i++) {
              fields[i].innerText = unchangedValues[i];
            }
          fields[4].innerHTML = "<button style='cursor:pointer;'>edit</button>";
          fields[5].innerHTML = "<button style='cursor:pointer;'>delete</button>";
        }
      });
    }
    // if book info is missing
  }else{
    if(!bookName){  
      document.getElementById("BnameError").innerHTML="<br> book name is requierd"
    }else{
      document.getElementById("BnameError").innerHTML=""

    }
    if(!bookPrice){
      document.getElementById("priceError").innerHTML="<br> book price is requierd"
    }else{
      document.getElementById("priceError").innerHTML=""

    }
    if(!authorName){
      document.getElementById("AnameError").innerHTML="<br> author Name is requierd"
    }else{
      document.getElementById("AnameError").innerHTML=""

    }
    if(!authorEmail){
      document.getElementById("emailError").innerHTML="<br> author Email is requierd" 
    }else{
      document.getElementById("emailError").innerHTML="" 

    }
  }
});