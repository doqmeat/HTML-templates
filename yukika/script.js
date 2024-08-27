	let passport = document.getElementById("cover");
	let passportOpened = document.getElementById("passport-opened");
	let page1 = document.getElementById("page-1");
	let page2 = document.getElementById("page-2");
	let btn1 = document.getElementById("beforeBtn");
	let btn2 = document.getElementById("afterBtn");
	let otherPages = document.getElementsByClassName("page");
	let i = 0;


	function passportOpen() {
		btn1.style.display = "inline-block";
		btn2.style.display = "inline-block";
		//		pages
		passportOpened.style.display = "block";
		page1.style.display = "block";
		page2.style.display = "none";
		//		animations
		passport.className = "passportANI";
		passportOpened.className = "pageANI";
		//		buttons
		btn1.onclick = passportClose;
		btn1.innerText = "close passport";
		btn2.onclick = passportPage2;
		btn2.innerText = "next page";
	}

	function passportPage1() {
		passportOpened.style.display = "block";
		page1.style.display = "block";
		page2.style.display = "none";
		passportOpened.classList.remove("pageANI");
		btn1.onclick = passportClose;
		btn1.innerText = "close passport";
		btn2.onclick = passportPage2;
		btn2.innerText = "next page";
		passport.style.display = "none";
	}

	function passportPage2() {
		page1.style.display = "none";
		page2.style.display = "block";
		btn1.onclick = passportPage1;
		btn1.innerText = "previous page";
		btn2.onclick = passportClose;
		btn2.innerText = "close passport";
		passport.style.display = "none";
	}

	function passportClose() {
		passport.style.display = "block";
		passport.className = "passportCloseANI";
		passportOpened.style.display = "none";
		btn1.style.display = "none";
		btn2.style.display = "none";
	}
