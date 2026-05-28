// ----------------------------------------------------------------------------------------

//TODO when menu is switched on is mobile view mode, nav bar of desktop mode is affected, resolve this issue

// ----------------------------------------------------------------------------------------
//DECLARATIONS
// var menu_click_count = 0;

//below variable to be made true while isTesting and working on website locally
var isTesting = true; // true if testing, false if not testing

var menuShow = true; // true if menu is shown, false if menu is hidden
var tabNo = 0; // 0 for home, 1 for about, 2 for contact, 3 for resources

const blogNames = ['blog-30', 'blog-31']; // Names of blog pages here in order
//----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// RUN AT STARTUP SEGMENT

//code to retrieve previous page on reload
if (localStorage.hasOwnProperty('tabNo')) {
	const cachedValue = localStorage.getItem('tabNo');
	tabNo = cachedValue.toString();
	console.log('Tab No in cache is: ', tabNo);
}
activateTab(tabNo);

//setting the theme of website on startup
if (localStorage.hasOwnProperty('theme')) {
	const cachedTheme = localStorage.getItem('theme');
	if (cachedTheme == 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}

document.addEventListener('scroll', () => {
	const el = document.getElementById('reading-progress');
	if (!el) return;
	const pct =
		window.scrollY / (document.body.scrollHeight - window.innerHeight);
	el.style.setProperty('--scroll-progress', Math.min(pct, 1));
});

document.addEventListener("DOMContentLoaded", () => {
  const goToTopBtn = document.getElementById("go-to-top");

  // Show button when user scrolls down 300px from the top
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
		// console.log('DEBUG: Go to top button is active');
      goToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      goToTopBtn.classList.add("opacity-100", "pointer-events-auto");
    } else {
      goToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
      goToTopBtn.classList.add("opacity-0", "pointer-events-none");
    }
  });

  // Smooth scroll behavior on click
  goToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// ----------------------------------------------------------------------------------------
// TESTING SECTION

// ----------------------------------------------------------------------------------------
function logInternalJS_Status() {
	console.log('Internal js working properly');
}

function switchTheme() {
	const html = document.documentElement;
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	} else {
		html.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}
}

// ----------------------------------------------------------------------------------------
function activateTab(tabNoIn) {
	console.log('Activating tab no: ', tabNoIn);
	tabNo = tabNoIn;
	tabNoIn = tabNoIn.toString();
	//removing active status of tabs, if any
	var activeTabs = document.getElementsByClassName('active-tab');
	Array.from(activeTabs).forEach((activeTabsPtr) => {
		activeTabsPtr.classList.remove('active-tab');
		activeTabsPtr.classList.remove('diagonal-bg');
	});
	// At the top of activateTab(), after the existing activeTab cleanup block:

	// Map from tabNo to the About dropdown anchor text, so we can mark it active
	const aboutSubMap = {
		10: 'Academics',
		11: 'Career',
		12: 'Projects',
		13: 'Technical Skills',
		14: 'Hobbies',
	};

	// Remove existing active marker from all dropdown items
	document.querySelectorAll('#dropdown-content > a').forEach((el) => {
		el.classList.remove('about-sub-active');
	});

	// Apply active marker if the current tab is an About sub-page
	if (aboutSubMap[tabNoIn]) {
		document.querySelectorAll('#dropdown-content > a').forEach((el) => {
			if (el.textContent.trim() === aboutSubMap[tabNoIn]) {
				el.classList.add('about-sub-active');
			}
		});
	}
	// TODO remove below if else if structure using arrays
	if (tabNoIn == '0') {
		console.log('User clicked on Home Button');
		if (isTesting) loadHTML_Local('body', 'home.html');
		else loadHTML('body', 'home.html');
		//now changing color of active tab
		document.getElementById('home-tab').classList.add('active-tab');
		document.getElementById('home-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '10') {
		console.log('User clicked on About-0 Button');
		if (isTesting) loadHTML_Local('body', 'aboutAcademics.html');
		else loadHTML('body', 'aboutAcademics.html');
		//now changing color of active tab
		document.getElementById('about-tab').classList.add('active-tab');
		document.getElementById('about-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '11') {
		console.log('User clicked on About-1 Button');
		if (isTesting) loadHTML_Local('body', 'aboutCareer.html');
		else loadHTML('body', 'aboutCareer.html');
		//now changing color of active tab
		document.getElementById('about-tab').classList.add('active-tab');
		document.getElementById('about-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '12') {
		console.log('User clicked on About-2 Button');
		if (isTesting) loadHTML_Local('body', 'aboutProjects.html');
		else loadHTML('body', 'aboutProjects.html');
		//now changing color of active tab
		document.getElementById('about-tab').classList.add('active-tab');
		document.getElementById('about-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '13') {
		console.log('User clicked on About-3 Button');
		if (isTesting) loadHTML_Local('body', 'aboutSkills.html');
		else loadHTML('body', 'aboutSkills.html');
		//now changing color of active tab
		document.getElementById('about-tab').classList.add('active-tab');
		document.getElementById('about-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '14') {
		console.log('User clicked on About-4 Button');
		if (isTesting) loadHTML_Local('body', 'aboutHobbies.html');
		else loadHTML('body', 'aboutHobbies.html');
		//now changing color of active tab
		document.getElementById('about-tab').classList.add('active-tab');
		document.getElementById('about-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '2') {
		console.log('User clicked on Contact Button');
		if (isTesting) loadHTML_Local('body', 'contact.html');
		else loadHTML('body', 'contact.html');
		//now changing color of active tab
		document.getElementById('contact-tab').classList.add('active-tab');
		document.getElementById('contact-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn == '3') {
		console.log('User clicked on Blog Button');
		if (isTesting) loadHTML_Local('body', 'blog.html');
		else loadHTML('body', 'blog.html');
		//now changing color of active tab
		document.getElementById('blog-tab').classList.add('active-tab');
		document.getElementById('blog-tab').classList.add('diagonal-bg');
	}
	//
	else if (tabNoIn[0] == '3') {
		const temp1 = Number(tabNoIn.substring(1));
		console.log(typeof temp1);
		console.log(temp1);

		console.log('User clicked on Read More of blog no', temp1);
		if (isTesting)
			loadHTML_Local('body', 'blogs/' + blogNames[temp1] + '.html');
		else loadHTML('body', 'blogs/' + blogNames[temp1] + '.html');
		//now changing color of active tab
		document.getElementById('blog-tab').classList.add('active-tab');
		document.getElementById('blog-tab').classList.add('diagonal-bg');
	}
	//
	else {
		console.log(
			"Button clicked is inactive or doesn't link to something valid.",
		);
		tabNo = '0';
	}
	//if menu is shown and user clicks on an option, now the menu should be hidden back
	if ((menuShow == true) & (window.innerWidth <= 950)) {
		menu_click();
		menuShow = false;
	}
}
// ----------------------------------------------------------------------------------------
function goToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ----------------------------------------------------------------------------------------
function hideAlertBar() {
	document.getElementById('alert-bar').style.display = 'none';
}
// ----------------------------------------------------------------------------------------
function menu_click() {
	console.log('menu btn clicked');
	var v = document.getElementById('menu-bar');
	if (menuShow == false) {
		v.style.display = 'flex';
		console.log('menu switched on');
		menuShow = true;
	} else {
		v.style.display = 'none';
		console.log('menu switched off');
		menuShow = false;
	}
}
// ----------------------------------------------------------------------------------------

function loadCSS(fileName) {
	var cssID = fileName;
	if (!document.getElementById(cssID)) {
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.id = cssID;
		// link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = '../css/' + fileName + '.css';
		link.media = 'all';
		head.appendChild(link);
	}
}

// ----------------------------------------------------------------------------------------
function loadHTML(className, fileName) {
	console.log('Div id: ' + className + ', filename: ' + fileName);

	let xhttp;
	const element = document.querySelectorAll('.' + className);
	console.log(element.length);
	let file = fileName;

	if (file) {
		element.forEach((elem) => {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status === 200) {
						var importText = this.responseText;
						elem.innerHTML = importText;
						console.log(
							'Successfully imported ' + file + ' ' + elem.id,
						);

						//now running javascript of the imported file
						const parser = new DOMParser();
						var importDoc = this.responseText;
						var importHTML = parser.parseFromString(
							importDoc,
							'text/html',
						);
						var importScripts =
							importHTML.querySelectorAll('script');
						importScripts.forEach((importScript) => {
							var script = document.createElement('script');
							script.textContent = importScript.textContent;
							elem.appendChild(script);
						});
					} else if ((this.status = 404)) {
						console.log('Requested file not found');
						elem.innerHTML = '<h1>Requested file not found</h1>';
					}
				}
			};
			xhttp.open(
				'GET',
				'https://everythingshyam.github.io/Portfolio/html/' + file,
				true,
			);
			xhttp.send();
			return;
		});
	}
}
// ----------------------------------------------------------------------------------------
function loadHTML_Local(className, fileName) {
	console.log('Div id: ' + className + ', filename: ' + fileName);

	let xhttp;
	const element = document.querySelectorAll('.' + className);
	console.log(element.length);
	let file = fileName;

	if (file) {
		element.forEach((elem) => {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status === 200) {
						var importText = this.responseText;
						elem.innerHTML = importText;
						console.log(
							'Successfully imported ' + file + ' ' + elem.id,
						);

						//now running javascript of the imported file
						const parser = new DOMParser();
						var importDoc = this.responseText;
						var importHTML = parser.parseFromString(
							importDoc,
							'text/html',
						);
						var importScripts =
							importHTML.querySelectorAll('script');
						importScripts.forEach((importScript) => {
							var script = document.createElement('script');
							script.textContent = importScript.textContent;
							elem.appendChild(script);
						});
					} else if ((this.status = 404)) {
						console.log('Requested file not found');
						elem.innerHTML = '<h1>Requested file not found</h1>';
					}
				}
			};
			xhttp.open('GET', './html/' + file, true);
			xhttp.send();
			return;
		});
	}
}

function loadFile(className, fileName) {
	if (isTesting == true) {
		console.log('Loading local file');
		loadHTML_Local(className, fileName);
	} else {
		console.log('Loading remote file');
		loadHTML(className, fileName);
	}
}
// ----------------------------------------------------------------------------------------
//Below block is to change css files on window size change

window.addEventListener('resize', function (event) {
	if (window.innerWidth < 768) {
		// match Tailwind's md: exactly
		if (menuShow == true) {
			menu_click();
			menuShow = false;
		}
	} else {
		// Never call menu_click() here; that would set another inline style
		// and restart the same fight.
		const v = document.getElementById('menu-bar');
		v.style.display = ''; // ← remove inline style
		menuShow = true;
	}
});
// ----------------------------------------------------------------------------------------
//Reload event trigger
window.addEventListener('beforeunload', function (event) {
	//to save tab No as cache value for next time
	if (event.type === 'beforeunload') {
		this.localStorage.setItem('tabNo', tabNo);
	}
});
// ----------------------------------------------------------------------------------------
