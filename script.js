//NAVBAR
var myNav = document.getElementById('navbar'); 
window.onscroll = function () { 
    "use strict"; 
    if (document.documentElement.scrollTop >= 200 ) { 
        myNav.classList.add("nav-colored"); 
    } 
    else { 
        myNav.classList.remove("nav-colored"); 
    } 
}; 
//TEAM
var slide=3;
var corrente=1;
function avanti(){
    corrente++;
    if(corrente>3){
        corrente=1;
    } 
    for(i=slide;i>0;i--){
        document.querySelector(".team_"+i).style.display="none";
    }
    document.querySelector(".team_"+corrente).style.display="block";
}
function indietro(){
    corrente--;
    if(corrente==0){
        corrente= slide;
    }
    for(i=slide;i>0;i--){
        document.querySelector(".team_"+i).style.display="none";
    }
    document.querySelector(".team_"+corrente).style.display="block";

}