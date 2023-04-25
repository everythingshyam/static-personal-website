// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT
importHeader();
importFooter();
// ----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
menu_click_count = 0;
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
function sendMessage() {
  Email.send({
    Host: "smtp.elasticmail.com",
    Username: "shyamsundar.tiwari20@pccoepune.org",
    Password: "AD5E6806E3D2D6512667C8FFB331E6E6383F",
    To: "s1024creative@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New message from Portfolio Website",
    Body: document.getElementById('message').value,
  }).then((message) => alert(message));
}
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
