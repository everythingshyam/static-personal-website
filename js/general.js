// ----------------------------------------------------------------------------------------

// import sendToEmail from "./credentials.js";
// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT
importHeader();
importFooter();
// ----------------------------------------------------------------------------------------
// TESTING SECTION
// console.log(sendToEmail)
// ----------------------------------------------------------------------------------------
var menu_click_count = 0;
function menu_click() {
  console.log("menu btn clicked");
  var v = document.getElementById("menu-bar");
  if (menu_click_count % 2 == 0) {
    v.style.display = "inline";
    console.log("menu switched on");
    menu_click_count = 1;
  } else {
    v.style.display = "none";
    console.log("menu switched off");
    menu_click_count = 0;
  }
  //   menu_click_count += 1;
  
}
// ----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
function importHeader()
{
  console.log("Importing header part...");
  // document.getElementsByClassName("header-import").load("../header.html");
  $(
    function (){
      $(".header-import").load("../header.html");
    }
  )
  console.log("Imported header part...");
}
function importFooter()
{
  console.log("Importing footer part...");
  // document.getElementsByClassName("header-import").load("../header.html");
  $(
    function (){
      $(".footer-import").load("../footer.html");
    }
  )
  console.log("Imported footer part...");
}
// ----------------------------------------------------------------------------------------
