let tsb = document.getElementsByClassName("tsb")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

tsb.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

let right = document.getElementsByClassName("right")[0]
let notmenu = document.getElementsByClassName("notmenu")[0]

right.addEventListener("click", ()=>{
    console.log("clicked");
    if(notmenu.style.bottom == "50px"){
        notmenu.style.bottom = "-655px"
    }
    else{
        notmenu.style.bottom = "50px"
    }
})
