function toggleNavbar(close) {
    var links = document.getElementById("navbarLinks");
    var icon = document.getElementById("navbarIcon");
    var linkElements = links.getElementsByTagName('span');
    var isShowing = links.classList.contains("responsive");
    var content = document.getElementById("content");
    var esc = document.getElementById("navEsc");
    var home = document.getElementById("home");

    for (let i = 0; i < linkElements.length; i++) {
        setTimeout(function() {
            if (isShowing) {
                linkElements[linkElements.length - 1 - i].classList.remove("show");
            } else {
                linkElements[i].classList.add("show");
            }
        }, i === 0 ? 0 : 100 * i);
    }
    
    if (isShowing || close) {
        home.style.height = "calc(100svh - 110px)";
        home.style.minHeight = "calc(100svh - 110px)";
        content.addEventListener("transitionend", function onCollapse() {
            links.classList.remove("responsive");
            icon.classList.remove("responsive");
            content.removeEventListener("transitionend", onCollapse);
        });
        content.style.paddingTop = "";
    } else {
        icon.classList.add("responsive");
        links.classList.add("responsive");
        home.style.height = "calc(100svh - 110px - " + links.scrollHeight + "px)";
        home.style.minHeight = "calc(100svh - 50px - " + links.scrollHeight + "px)";
        links.style.height = esc.scrollHeight + "px";

        content.addEventListener("transitionend", function onExpand() {
            content.removeEventListener("transitionend", onExpand);
        });
        content.style.paddingTop = links.scrollHeight + "px";
    }
}

function handleResize() {
    if (window.innerWidth > 600) {
        toggleNavbar(true);
    }
}

window.addEventListener("resize", handleResize);