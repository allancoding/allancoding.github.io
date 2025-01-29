function toggleNavbar() {
    var links = document.getElementById("navbarLinks");
    var icon = document.getElementById("navbarIcon");
    var linkElements = links.getElementsByTagName('a');
    var isShowing = links.classList.contains("responsive");

    for (let i = 0; i < linkElements.length; i++) {
        (function(i) {
            setTimeout(function() {
                if (isShowing) {
                    linkElements[i].classList.remove("show");
                } else {
                    linkElements[i].classList.add("show");
                }
            }, i === 0 ? 0 : 100 * i);
        })(i);
    }

    if (isShowing) {
        links.style.height = links.scrollHeight + "px";
        requestAnimationFrame(() => {
            links.style.height = "0";
        });

        links.addEventListener(
            "transitionend",
            function onCollapse() {
                links.classList.remove("responsive");
                icon.classList.remove("responsive");
                links.style.height = "";
                links.removeEventListener("transitionend", onCollapse);
            }
        );
    } else {
        icon.classList.add("responsive");
        links.classList.add("responsive");
        links.style.height = "0";
        requestAnimationFrame(() => {
            links.style.height = links.scrollHeight + "px";
        });

        links.addEventListener(
            "transitionend",
            function onExpand() {
                links.style.height = "auto";
                links.removeEventListener("transitionend", onExpand);
            }
        );
    }
}