navbar=document.querySelector(".navbar")
menubar=document.querySelector("#menu-bar")
menubar.onclick=()=>{
    navbar.classList.toggle("nav-active")
    menubar.classList.toggle("fa-times")
}