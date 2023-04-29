// ----------------------------------------------------------------------------------------

// import sendToEmail from "./credentials.js";
// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT
loadHTML("header-import", "header.html");
// importHeader();
loadHTML("footer-import", "footer.html");
// importFooter();
loadHTML("social-links", "socialLinks.html");
hideAlertBar();
// ----------------------------------------------------------------------------------------
// TESTING SECTION
// console.log(sendToEmail)
// ----------------------------------------------------------------------------------------
function hideAlertBar() {
  document.getElementById("alert-bar").style.display = "none";
  document.getElementById("dropdown-content").style.top = "50px";
}
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
//BELOW CODE BLOCK IS NOT IN USE. IT IS REPLACED BY BLOCK JUST BELOW THE COMMENTED PART - loadHTML() function
// function importHeader() {
//   console.log("Importing header part...");
//   // document.getElementsByClassName("header-import").load("../header.html");
//   $(function () {
//     $(".header-import").load("../header.html");
//   });
//   console.log("Imported header part...");
// }
// function importFooter() {
//   console.log("Importing footer part...");
//   // document.getElementsByClassName("header-import").load("../header.html");
//   $(function () {
//     $(".footer-import").load("../footer.html");
//   });
//   console.log("Imported footer part...");
// }
// ----------------------------------------------------------------------------------------
function loadHTML(className, fileName) {
  console.log("Div id: " + className + ", filename: " + fileName);

  let xhttp;
  const element = document.querySelectorAll("."+className);
  let file = fileName;

  if (file) {
    element.forEach((elem) => {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if ((this.status = 200)) {
            elem.innerHTML = this.responseText;
            console.log("Successfully imported " + file +" "+elem.id);
          } else if ((this.status = 404)) {
            console.log("Requested file not found");
            elem.innerHTML = "<h1>Requested file not found</h1>";
          }
        }
      };
      xhttp.open("GET", "https://shyam-1024.github.io/Portfolio/" + file, true);
      xhttp.send();
      return;
    });
  }
}
// ----------------------------------------------------------------------------------------
