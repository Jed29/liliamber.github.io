//Close User List
// const close = document.querySelectorAll('.delete');
// // console.log(close)
// for (let i = 0 ; i < close.length; i++)
// {
// close[i].addEventListener('click', function(e){
// 	// close[i].parentElement.style.display = 'none';
// 	e.target.parentElement.parentElement.style.display = "none";
// 	// console.log(e)
// });
// }
// const edit = document.querySelectorAll('.icon-pencil')

// for (let i = 0; i < edit.length; i++){
// 	edit[i].addEventListener('click', function(e){
// 		// console.log (e)
// 	})
// }
// function edit(){
// 	const e = window.event
// 	const editButtonWrapper = e.target.parentElement.parentElement.nextElementSibling
// 	editButtonWrapper.style.display = "flex"
// 	e.target.parentElement.parentElement.style.display = "none"
// 	console.log(window.event)
// 	console.log (editButtonWrapper)
// }

// let list = [
//     ["Steam","Miracle","1odfi56789"],
//     ["Facebook","amir@google.com","QpAd4321"],
//     ["Twitter","amir98","12asdaf2222"]
//   ]
let list = []
function tambahData(event) {
  event.preventDefault()
  let url = document.getElementById('url').value
  let username = document.getElementById('username').value 
  let password = document.getElementById('password').value

  list.push([url, username, password])
}

const idList = document.querySelector(".tabel-user");

function render() {
  
  // AMBIL ISI PASS DARI ARRAY
  for (let i = 0; i < list.length; i++) {
    
    //CREATE DIV BUAT BOX
    const userBox = document.createElement("div");
    userBox.classList.add("card");
    userBox.classList.add("border-primary");
    userBox.classList.add("mb-3");
    userBox.setAttribute("id",`no${i}`)
    
  
    // CREATE DIV BUAT SITUS
    const situs = document.createElement("div");
    situs.classList.add("card-header");
    situs.innerText = `${list[i][0]}`;
    userBox.appendChild(situs);

    // CREATE DIV, ISINYA PASSWORD SAMA USER
    const userPW = document.createElement("div");
    userPW.classList.add("card-body");

    const user = document.createElement("p");
    user.classList.add("card-text")
    user.innerHTML = `Username : ${list[i][1]}`

    const PW = document.createElement("input");
    PW.classList.add("card-text")
    PW.setAttribute("type","password")
    PW.setAttribute("value",`${list[i][2]}`)
    PW.innerHTML = `Password : ${list[i][2]}`
    PW.setAttribute("id",`show${i}`)

    //BUAT TOMBOL SHOW
    const showButton = document.createElement("button");
    showButton.innerHTML = "Show";
    showButton.classList.add("show-btn");
    showButton.setAttribute("onclick",`show(${i})`)

    //BUAT TOMBOL DELETE
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.setAttribute("onclick", `hapus(${i})`)
    
    //APPEND DELETE USER DAN PW
    userPW.appendChild(user)
    userPW.appendChild(PW)
    userPW.appendChild(showButton)
    userPW.appendChild(deleteButton);
    userBox.appendChild(userPW)
    
    // APPEND ID PW 
    idList.appendChild(userBox);
    
    //   situs.innerText = `${list[i][0]} -- ${list[i][1]}`;
    //   situs.classList.add("todo-item");
    //   // create completed button
    //   // append to todoList
  }
}
render()

function show(i) {
  var x = document.getElementById(`show${i}`);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function hapus(i){
  let x = document.getElementById(`no${i}`)
  x.remove()
    let x = document.getElementById(`no${i}`)
    x.remove()
}


/*
  IDEATION FITUR EDIT

  -akses data yg sudah di dapat dari user
  -(kalo data nya dlm bentuk array of array, akses pake index,
    kalo dlm bentuk array of objct, akses brdasarkan key)
  -re assign data yg sudah diakses sesuai dengan perubahan input dri user
*/
  
function edit(id){
  let x = document.getElementById(`edit${list[i][1]}`)
  let neew = prompt("Edit?" , x[id])
    x[id] = x

  render()
}