navBtn =document.getElementById("navBtn")
cancel=document.getElementsByClassName("cancel")[0]
navPhone =document.getElementsByClassName("navPhone")[0];

navBtn.addEventListener("click",function(){
    // console.log("hello");

     navPhone.classList.toggle("active")
})

cancel.addEventListener("click",function(){
    // console.log("helo")
    navPhone.classList.remove("active")
})


