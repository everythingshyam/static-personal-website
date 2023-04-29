// ----------------------------------------------------------------------------------------
//TODO loadHTML not working in sub-pages

// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT

// ----------------------------------------------------------------------------------------
// TESTING SECTION

// ----------------------------------------------------------------------------------------
//Below block is to change css files on window size change
//Below Block isn't working properly
var screenState = -1;
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

window.addEventListener("resize", function (event) {
  var temp = -1; //0 means mobile screen size, 1 means desktop screen size
  if (window.innerWidth <= 950) {
    console.log("Screen Width less than 950");
    temp = 0;
  } else {
    console.log("Screen Width more than 950");
    temp = 1;
  }
  if (screenState != temp) {
    console.log("Screen Size Changed");
    screenState = temp;
    if (screenState == 0) {
      console.log("In Mobile View Mode");

      // var remLink = this.document.querySelector(
      //   'link[href="./css/desktop_styles.css"]'
      // );
      // if (remLink != null) remLink.remove();
      // ---
      // head.appendChild(appLink1);

    } else if (screenState == 1) {
      console.log("In Desktop View Mode");

      // var remLink = this.document.querySelector(
      //   'link[href="./css/smartphone_styles.css"]'
      // );
      // if (remLink != null) remLink.remove();
      // ---
      // head.appendChild(appLink2);
    }
  }
});
// ----------------------------------------------------------------------------------------
//DECLARATIONS
var menu_click_count = 0;
// ----------------------------------------------------------------------------------------
//In below code, match method is returning null initially, causing problem in Google Chrome
function logInternalJS_Status() {
  // try {
  //   throw Error("");
  // } catch (err) {
  //   var fileName = err.stack
  //     .match(/(at\s[\w\W]*?\(|@)\S+:/gm)[1]
  //     .replace(/(at\s[\w\W]*?\(|@|:)/gm, "");
  //   let words = fileName.split("/");
  //   fileName = words[words.length - 1];
  //   console.log(fileName + "-internal js working properly");
  // }
    console.log("FileNameNotFound - internal js working properly");
}
// ----------------------------------------------------------------------------------------
function activateTab(tabNo) {
  //removing active status of tabs, if any
  var activeTabs = document.getElementsByClassName("active-tab");
  Array.from(activeTabs).forEach((activeTabsPtr) => {
    activeTabsPtr.classList.remove("active-tab");
  });
  if (tabNo == "0") {
    console.log("User clicked on Home Button");
    // loadHTML_Local("body", "home.html");
    loadHTML("body", "home.html");
    //now changing color of active tab
    document.getElementById("home-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "10") {
    console.log("User clicked on About-0 Button");
    // loadHTML_Local("body", "aboutEducation.html");
    loadHTML("body", "aboutEducation.html");
    //now changing color of active tab
    document.getElementById("about-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "11") {
    console.log("User clicked on About-1 Button");
    // loadHTML_Local("body", "aboutPositions.html");
    loadHTML("body", "aboutPositions.html");
    //now changing color of active tab
    document.getElementById("about-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "12") {
    console.log("User clicked on About-2 Button");
    // loadHTML_Local("body", "aboutProjects.html");
    loadHTML("body", "aboutProjects.html");
    //now changing color of active tab
    document.getElementById("about-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "13") {
    console.log("User clicked on About-3 Button");
    // loadHTML_Local("body", "aboutSkills.html");
    loadHTML("body", "aboutSkills.html");
    //now changing color of active tab
    document.getElementById("about-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "14") {
    console.log("User clicked on About-4 Button");
    // loadHTML_Local("body", "aboutHobbies.html");
    loadHTML("body", "aboutHobbies.html");
    //now changing color of active tab
    document.getElementById("about-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "2") {
    console.log("User clicked on Contact Button");
    // loadHTML_Local("body", "contact.html");
    loadHTML("body", "contact.html");
    //now changing color of active tab
    document.getElementById("contact-tab").classList.add("active-tab");
  }
  //
  else if (tabNo == "3") {
    console.log("User clicked on Else Button");
    // loadHTML_Local("body", "home.html");
    loadHTML("body", "home.html");
    //now changing color of active tab
    document.getElementById("home-tab").classList.add("active-tab");
  }
  //
  else {
    console.log("Button clicked is inactive or doesn't link to something valid.");
  }
  if(menu_click_count==1)
    menu_click();
}
// ----------------------------------------------------------------------------------------
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// ----------------------------------------------------------------------------------------
function hideAlertBar() {
  document.getElementById("alert-bar").style.display = "none";
  document.getElementById("dropdown-content").style.top = "50px";
}
// ----------------------------------------------------------------------------------------
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
            var importText = this.responseText;
            elem.innerHTML = importText;
            console.log("Successfully imported " + file + " " + elem.id);

            //now running javascript of the imported file
            const parser = new DOMParser();
            var importDoc = this.responseText;
            var importHTML = parser.parseFromString(importDoc, "text/html");
            var importScripts = importHTML.querySelectorAll("script");
            importScripts.forEach((importScript) => {
              var script = document.createElement("script");
              script.textContent = importScript.textContent;
              elem.appendChild(script);
            });
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
function loadHTML_Local(className, fileName) {
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
            var importText = this.responseText;
            elem.innerHTML = importText;
            console.log("Successfully imported " + file + " " + elem.id);

            //now running javascript of the imported file
            const parser = new DOMParser();
            var importDoc = this.responseText;
            var importHTML = parser.parseFromString(importDoc, "text/html");
            var importScripts = importHTML.querySelectorAll("script");
            importScripts.forEach((importScript) => {
              var script = document.createElement("script");
              script.textContent = importScript.textContent;
              elem.appendChild(script);
            });
          } else if ((this.status = 404)) {
            console.log("Requested file not found");
            elem.innerHTML = "<h1>Requested file not found</h1>";
          }
        }
      };
      xhttp.open("GET", "./" + file, true);
      xhttp.send();
      return;
    });
  }
}
// ----------------------------------------------------------------------------------------
