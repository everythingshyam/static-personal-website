// ----------------------------------------------------------------------------------------
//TODO loadHTML not working in sub-pages

// import sendToEmail from "./credentials.js";
// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT
// loadHTML("header-import", "header.html");
// // importHeader();
// loadHTML("footer-import", "footer.html");
// // importFooter();
// loadHTML("social-links", "socialLinks.html");
// hideAlertBar();
// ----------------------------------------------------------------------------------------
// TESTING SECTION
// console.log(sendToEmail)
// if(window.innerWidth<500)
// {
//   console.log("Screen Width less than 500");
// }
// ----------------------------------------------------------------------------------------
//Below block is to change css files on window size change
//Below Block isn't working properly
// var screenState = -1;
// const head = this.document.head;
// const appLink1 = this.document.createElement("link");
// appLink1.type = "text/css";
// appLink1.rel = "stylesheet";
// appLink1.href = "./css/smartphone_style.css";
// const appLink2 = this.document.createElement("link");
// appLink2.type = "text/css";
// appLink2.rel = "stylesheet";
// appLink2.href = "./css/desktop_style.css";

// if(window.innerWidth<=950)
// {
//   head.appendChild(appLink1);
// }
// else
// {
//   head.appendChild(appLink2);
// }

// window.addEventListener("resize", function (event) {
//   var temp = -1; //0 means mobile screen size, 1 means desktop screen size
//   if (window.innerWidth <= 950) {
//     console.log("Screen Width less than 950");
//     temp = 0;
//   } else {
//     console.log("Screen Width more than 950");
//     temp = 1;
//   }
//   if (screenState != temp) {
//     console.log("Screen Size Changed");
//     screenState = temp;
//     if (screenState == 0) {
//       var remLink = this.document.querySelector(
//         'link[href="./css/desktop_styles.css"]'
//       );
//       if (remLink != null) remLink.remove();
//       // ---
//       head.appendChild(appLink1);
//     } else if (screenState == 1) {
//       var remLink = this.document.querySelector(
//         'link[href="./css/smartphone_styles.css"]'
//       );
//       if (remLink != null) remLink.remove();
//       // ---
//       head.appendChild(appLink2);
//     }
//   }
// });
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
  const element = document.querySelectorAll("." + className);
  console.log(element.length);
  let file = fileName;

  if (file) {
    element.forEach((elem) => {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if ((this.status = 200)) {
            elem.innerHTML = this.responseText;
            console.log("Successfully imported " + file + " " + elem.id);
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
