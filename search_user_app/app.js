const userList = document.querySelector(".list_users");
const search = document.querySelector(".search");

const limit = 7;

const users = []


//   eventListeners
  window.addEventListener("DOMContentLoaded",fuilfiled)
  //search.addEventListener("keyup",searchStates)
  
 
  
// filtered state
function filteredUsers(){
   users.forEach(list=>{
      list.map(user=>{
         renderedUsers(user)
      })
    })
}


// fetch 
 async function fuilfiled(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const jsonData = await res.json();
    users.push(jsonData)
    filteredUsers()
}


// rendered
function renderedUsers(user){
   userList.innerHTML += `<li class="ul_li">${user.name}</li>` 
}


// function searchStates(){
   
// }
























