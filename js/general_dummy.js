// ----------------------------------------------------------------------------------------

//TODO when menu is switched on is mobile view mode, nav bar of desktop mode is affected, resolve this issue

//DONE loadHTML not working in sub-pages

// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT

// ----------------------------------------------------------------------------------------
// TESTING SECTION

// ----------------------------------------------------------------------------------------
//DECLARATIONS
// var menu_click_count = 0;
var menuShow = true
// ----------------------------------------------------------------------------------------
function logInternalJS_Status() {
  console.log('Internal js working properly')
}
// ----------------------------------------------------------------------------------------
function activateTab(tabNo) {
  //removing active status of tabs, if any
  var activeTabs = document.getElementsByClassName('active-tab')
  Array.from(activeTabs).forEach((activeTabsPtr) => {
    activeTabsPtr.classList.remove('active-tab')
  })
  // TODO remove below if else if structure using arrays
  if (tabNo == '0') {
    console.log('User clicked on Home Button')
    loadHTML_Local('body', 'home.html')
    // loadHTML("body", "home.html");
    //now changing color of active tab
    document.getElementById('home-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '10') {
    console.log('User clicked on About-0 Button')
    loadHTML_Local('body', 'aboutEducation.html')
    // loadHTML("body", "aboutEducation.html");
    //now changing color of active tab
    document.getElementById('about-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '11') {
    console.log('User clicked on About-1 Button')
    loadHTML_Local('body', 'aboutPositions.html')
    // loadHTML("body", "aboutPositions.html");
    //now changing color of active tab
    document.getElementById('about-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '12') {
    console.log('User clicked on About-2 Button')
    loadHTML_Local('body', 'aboutProjects.html')
    // loadHTML("body", "aboutProjects.html");
    //now changing color of active tab
    document.getElementById('about-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '13') {
    console.log('User clicked on About-3 Button')
    loadHTML_Local('body', 'aboutSkills.html')
    // loadHTML("body", "aboutSkills.html");
    //now changing color of active tab
    document.getElementById('about-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '14') {
    console.log('User clicked on About-4 Button')
    loadHTML_Local('body', 'aboutHobbies.html')
    // loadHTML("body", "aboutHobbies.html");
    //now changing color of active tab
    document.getElementById('about-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '2') {
    console.log('User clicked on Contact Button')
    loadHTML_Local('body', 'contact.html')
    // loadHTML("body", "contact.html");
    //now changing color of active tab
    document.getElementById('contact-tab').classList.add('active-tab')
  }
  //
  else if (tabNo == '3') {
    console.log('User clicked on Else Button')
    loadHTML_Local('body', 'home.html')
    // loadHTML("body", "home.html");
    //now changing color of active tab
    document.getElementById('home-tab').classList.add('active-tab')
  }
  //
  else {
    console.log(
      "Button clicked is inactive or doesn't link to something valid."
    )
  }
  //if menu is shown and user clicks on an option, now the menu should be hidden back
  if ((menuShow == true) & (window.innerWidth <= 950)) {
    menu_click()
    menuShow = false
  }
}
// ----------------------------------------------------------------------------------------
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
// ----------------------------------------------------------------------------------------
function hideAlertBar() {
  document.getElementById('alert-bar').style.display = 'none'
  document.getElementById('dropdown-content').style.top = '50px'
}
// ----------------------------------------------------------------------------------------
function menu_click() {
  console.log('menu btn clicked')
  var v = document.getElementById('menu-bar')
  if (menuShow == false) {
    v.style.display = 'inline'
    console.log('menu switched on')
    menuShow = true
  } else {
    v.style.display = 'none'
    console.log('menu switched off')
    menuShow = false
  }
}
// ----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
function loadHTML(className, fileName) {
  console.log('Div id: ' + className + ', filename: ' + fileName)

  let xhttp
  const element = document.querySelectorAll('.' + className)
  console.log(element.length)
  let file = fileName

  if (file) {
    element.forEach((elem) => {
      xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if ((this.status = 200)) {
            var importText = this.responseText
            elem.innerHTML = importText
            console.log('Successfully imported ' + file + ' ' + elem.id)

            //now running javascript of the imported file
            const parser = new DOMParser()
            var importDoc = this.responseText
            var importHTML = parser.parseFromString(importDoc, 'text/html')
            var importScripts = importHTML.querySelectorAll('script')
            importScripts.forEach((importScript) => {
              var script = document.createElement('script')
              script.textContent = importScript.textContent
              elem.appendChild(script)
            })
          } else if ((this.status = 404)) {
            console.log('Requested file not found')
            elem.innerHTML = '<h1>Requested file not found</h1>'
          }
        }
      }
      xhttp.open(
        'GET',
        'https://everythingshyam.github.io/Portfolio/' + file,
        true
      )
      xhttp.send()
      return
    })
  }
}
// ----------------------------------------------------------------------------------------
function loadHTML_Local(className, fileName) {
  console.log('Div id: ' + className + ', filename: ' + fileName)

  let xhttp
  const element = document.querySelectorAll('.' + className)
  console.log(element.length)
  let file = fileName

  if (file) {
    element.forEach((elem) => {
      xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if ((this.status = 200)) {
            var importText = this.responseText
            elem.innerHTML = importText
            console.log('Successfully imported ' + file + ' ' + elem.id)

            //now running javascript of the imported file
            const parser = new DOMParser()
            var importDoc = this.responseText
            var importHTML = parser.parseFromString(importDoc, 'text/html')
            var importScripts = importHTML.querySelectorAll('script')
            importScripts.forEach((importScript) => {
              var script = document.createElement('script')
              script.textContent = importScript.textContent
              elem.appendChild(script)
            })
          } else if ((this.status = 404)) {
            console.log('Requested file not found')
            elem.innerHTML = '<h1>Requested file not found</h1>'
          }
        }
      }
      xhttp.open('GET', './' + file, true)
      xhttp.send()
      return
    })
  }
}
// ----------------------------------------------------------------------------------------
//Below block is to change css files on window size change

window.addEventListener('resize', function (event) {
  if (window.innerWidth <= 950) {
    if (menuShow == true) {
      console.log('Screen size changed! (to Smarthphone)')
      menu_click()
      menuShow = false
    }
  } else {
    if (menuShow == false) {
      console.log('Screen size changed! (to Desktop)')
      menu_click()
      menuShow = true
    }
  }
})
// ----------------------------------------------------------------------------------------
