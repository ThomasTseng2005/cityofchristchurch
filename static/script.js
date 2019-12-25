var buttonPressed = 0;

//Loader + When Page Loads
window.addEventListener("DOMContentLoaded", function(){
    const loader = document.querySelector(".loader");
    var delayInMilliseconds = 2000;
    setTimeout(function() {
        loader.className += " hidden";
        document.querySelector(".home-content").style.display = "block";
        document.querySelector(".home-navbar").style.display = "block";
        document.querySelector(".home-footer").style.display = "block";
    }, delayInMilliseconds);
    buttonPressed = 0;
});

//Adding Adobe Fonts
(function(d) {
    var config = {
      kitId: 'tvs5viz',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

//Navbar Burger Click
function burgerClick() {
    if (buttonPressed === 0){
        console.log(buttonPressed);
        //document.getElementById("main_footer").style.display = "block";
        var delayInMS = Math.max(window.innerWidth)/4.8;
        setTimeout(function() {
            document.getElementById("links").style.display = "none";
        }, delayInMS);
        document.getElementById("hidden-links").style.transform = "translateX(0%)";
        document.getElementById("line1").style.transform = "rotate(-45deg) translate(-0.3125rem, 0.46875rem)";
        document.getElementById("line1").style.width = "1.875rem";
        document.getElementById("line2").style.opacity = "0";
        document.getElementById("line3").style.transform = "rotate(45deg) translate(-0.3125rem, -0.5rem)";
        document.getElementById("line3").style.width = "1.875rem";
        document.getElementById("hid-link-one").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.2s";
        document.getElementById("hid-link-two").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.3s";
        document.getElementById("hid-link-three").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.4s";
        document.getElementById("hid-link-four").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.5s";
        document.getElementById("hid-link-five").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.6s";
        document.getElementById("hid-link-six").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.7s";
        document.getElementById("hid-link-seven").style.animation = "hiddenLinkFadeIn 0.5s ease forwards 0.8s";

        $('nav').removeClass("scrolled");
        disableScroll();
        try {
            document.getElementById("mainNavbar").style.background = "transparent";
        }
        catch(err) {
            console.log(err)
        }
        buttonPressed = 1;
    }
    else if (buttonPressed === 1) {
        console.log(buttonPressed);
        document.getElementById("hidden-links").style.transform = "translateX(100%)";
        document.getElementById("hid-link-one").style.animation = '';
        document.getElementById("hid-link-two").style.animation = '';
        document.getElementById("hid-link-three").style.animation = '';
        document.getElementById("hid-link-four").style.animation = '';
        document.getElementById("hid-link-five").style.animation = '';
        document.getElementById("hid-link-six").style.animation = '';
        document.getElementById("hid-link-seven").style.animation = '';
        document.getElementById("line1").style.transform = "";
        document.getElementById("line1").style.width = "1.875rem";
        document.getElementById("line2").style.opacity = "1";
        document.getElementById("line3").style.transform = "";
        document.getElementById("line3").style.width = "1.875rem";
        enableScroll();
        //document.getElementById("main_footer").style.display = "block";
        $('nav').toggleClass('scrolled', $(window).scrollTop() > 50);
        $('.brand-anchor').toggleClass('brand-scrolled', $(window).scrollTop() > 50);
        var delayInMilliseconds = Math.max(window.innerWidth)/4.1;
        setTimeout(function() {
            document.getElementById("links").style.display = "inline";
        }, delayInMilliseconds);
        buttonPressed = 0;
    }
}

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
	$('.brand-anchor').toggleClass('brand-scrolled', $(window).scrollTop() > 50);
	$('.logo').toggleClass('logo-scrolled', $(window).scrollTop() > 50);
	$('.nav-links').toggleClass('links-scrolled', $(window).scrollTop() > 50);
	$('.nav-links li').toggleClass('li-scrolled', $(window).scrollTop() > 50);
	$('.burger-link').toggleClass('burger-scrolled', $(window).scrollTop() > 50);
	$('.burger div').toggleClass('burger-link-scrolled', $(window).scrollTop() > 50);
});

function openLinkInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function disableScroll() {
    document.getElementById("html").style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
}
function enableScroll() {
    document.getElementById("html").style.overflowY = "visible";
    document.body.style.overflowY = "visible";
}




