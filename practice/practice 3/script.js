let container=document.querySelector(".container");
let signupbtn=document.querySelector(".sgnupbtn");
let act=document.querySelector(".bg-animate");

signupbtn.onclick=()=>{
    container.classList.add("active");
    setInterval(()=>{
        act.classList.add("act")

    },1200);
    

}