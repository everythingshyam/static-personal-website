
// ----------------------------------------------------------------------------------------
//TODO hide this file from public repo, or encrypt it (git-secret)
// ----------------------------------------------------------------------------------------
import {sendToEmail,sendToAppCode } from "./credentials.js";
// ----------------------------------------------------------------------------------------
function sendMessage() {
    Email.send({
      Host: "smtp.elasticmail.com",
      Username: sendToEmail,
      Password: sendToAppCode,
      To: "s1024creative@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New message from Portfolio Website",
      Body: document.getElementById('message').value,
    }).then((message) => alert(message));
  }
  // ----------------------------------------------------------------------------------------