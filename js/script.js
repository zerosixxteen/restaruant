menu.oneclick = function myFucntion() {
  var x = document.getElementsById('myTopnav');
  if(x.className === "topnav") {
     x.className += " responsive";
   } else{
     x.className = "topnav";
   }
  }
}
