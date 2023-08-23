// how it work

home.onclick=()=>{
    home.style.backgroundColor="#198754";
    home.style.color="white";
    more.style.backgroundColor="white";
    more.style.color="black";
    lead.style.backgroundColor="white";
    lead.style.color="black";
    unsubscribe.style.backgroundColor="white";
    unsubscribe.style.color="black";
    auto.style.backgroundColor="white";
    auto.style.color="black";
    send.style.backgroundColor="white";
    send.style.color="black";
}

more.onclick=()=>{
    home.style.backgroundColor="white";
    home.style.color="black";
    more.style.backgroundColor="#198754";
    more.style.color="white";
    lead.style.backgroundColor="white";
    lead.style.color="black";
    unsubscribe.style.backgroundColor="white";
    unsubscribe.style.color="black";
    auto.style.backgroundColor="white";
    auto.style.color="black";
    send.style.backgroundColor="white";
    send.style.color="black";

}

lead.onclick=()=>{

    home.style.backgroundColor="white";
    home.style.color="black";
    more.style.backgroundColor="white";
    more.style.color="black";
    lead.style.color="white";
    lead.style.backgroundColor="#198754";
    unsubscribe.style.backgroundColor="white";
    unsubscribe.style.color="black";
    auto.style.backgroundColor="white";
    auto.style.color="black";
    send.style.backgroundColor="white";
    send.style.color="black";
}

unsubscribe.onclick=()=>{

    home.style.backgroundColor="white";
    home.style.color="black";
    more.style.backgroundColor="white";
    more.style.color="black";
    lead.style.backgroundColor="white";
    lead.style.color="black";
    unsubscribe.style.color="white";
    unsubscribe.style.backgroundColor="#198754";
    auto.style.backgroundColor="white";
    auto.style.color="black";
    send.style.backgroundColor="white";
    send.style.color="black";
}

auto.onclick=()=>{
    home.style.backgroundColor="white"
    home.style.color="black";
    more.style.backgroundColor="white";
    more.style.color="black";
    lead.style.backgroundColor="white";
    lead.style.color="black";
    unsubscribe.style.backgroundColor="white";
    unsubscribe.style.color="black";
    auto.style.color="white";
    auto.style.backgroundColor="#198754";
    send.style.backgroundColor="white";
    send.style.color="black";

}

send.onclick=()=>{
    home.style.backgroundColor="white"
    home.style.color="black";
    more.style.backgroundColor="white";
    more.style.color="black";
    lead.style.backgroundColor="white";
    lead.style.color="black";
    unsubscribe.style.backgroundColor="white";
    unsubscribe.style.color="black";
    auto.style.backgroundColor="white";
    auto.style.color="black";
    send.style.color="white";
    send.style.backgroundColor="#198754";

}

window.onload=()=>{
    home.style.backgroundColor="#198754"
    home.style.color="white";
}

// navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
      document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("nav").style.boxShadow="0 0 5px #999999"; 
      document.getElementById("nav").style.transition="0.3s"; 
      
    } else {
        document.getElementById("nav").style.backgroundColor = "white";
        document.getElementById("nav").style.boxShadow="0 0 0px "; 
    }
    
    if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
    {
        document.getElementById("arrowbtn").style.display="inline";
        
    }
    else{
      document.getElementById("arrowbtn").style.display="none";

   }
}


// send button
tsend.onclick=()=>{
    if(xname.value=="" && email.value=="" && tarea.value=="" && sub.value=="")
    {
        alert("Please Enter a Information");
    }
    else{
        alert("Thank you")
        
    }
}

x=0;
navbtn.onclick=()=>{
    if(x==0){
        document.getElementById("nav").style.backgroundColor = "white";
        navicon.className="fa-sharp fa-solid fa-xmark";
        x=1;
    }
    else{
        navicon.className="navbar-toggler-icon";  
        x=0; 
      }
    
}




