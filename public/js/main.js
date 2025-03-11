function toggleNavbar(close) {
    var links = document.getElementById("navbarLinks");
    var icon = document.getElementById("navbarIcon");
    var linkElements = links.getElementsByTagName('a');
    var isShowing = links.classList.contains("responsive");
    var content = document.getElementById("content");
    var esc = document.getElementById("navEsc");

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
        content.addEventListener("transitionend", function onCollapse() {
            links.classList.remove("responsive");
            icon.classList.remove("responsive");
            content.removeEventListener("transitionend", onCollapse);
        });
        content.style.paddingTop = "";
    } else {
        icon.classList.add("responsive");
        links.classList.add("responsive");
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