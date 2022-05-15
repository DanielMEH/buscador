const input =document.querySelector("#searchInput")
const usersList = document.getElementById("users")

let users = []

window.addEventListener("DOMContentLoaded",async()=>{

    usersList.innerHTML="<h1>Loading...</h1>"
   const data = await loadUsers()
    users = data.data
   renderData(users)

})

 async function loadUsers(){

   const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=1000');
   return await response.json();

}

input.addEventListener("keyup",(event)=>{

   const newUser = users.filter(user => `${user.firstname.toLowerCase()} 
   ${user.lastname.toLowerCase()}`.includes(event.target.value.toLowerCase()))
   renderData(newUser)
})

const usersItems = users => users.map(user =>
    
`<li class="text-start p-2 bg-gray-200 m-1 rounded hover:bg-gray-100 cursor-pointer">

 <img src="${user.image}" /> ${user.firstname} </li>`).join(" ")


function renderData(users){

  const itemsString =  usersItems(users)
  usersList.innerHTML= itemsString


}