let myDiv = document.getElementsByTagName("div")[0]
let myMain = document.getElementsByTagName("main")[0]

async function getData(){
  try{
  let myData = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await myData.json()
  let ids = [] 


  users.forEach(user => {
    ids.push(user.id)
    let mySpan = document.createElement("span")
    mySpan.innerText = user.name
    mySpan.style = "background-color: red ; color: black ; padding:5px 10px; margin: 5px 5px; display:inline-block "
    myDiv.append(mySpan)
  });

  myDiv.addEventListener("click", (e)=>{
    myMain.innerText =""
    if(e.target.tagName === "DIV"){
      e.stopPropagation()
    }

    users.forEach((user,i) => {
      if(user.name  == e.target.innerText){
        let myList = document.createElement("ul")


        getPosts(myList)
          myMain.append(myList)
      }
    });

  })}catch(err){
    console.log(err)
  }
}
async function getPosts(myList){
  let myData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ids[i]}`);
  let posts = await myData.json()
  posts.forEach(post =>{
    let myItem = document.createElement("li")
    myItem.innerText = post.title
    myList.append(myItem)
  })
}
getData()

