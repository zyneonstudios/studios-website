let menu = false;
function toggleMenu() {
    if(menu) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    menu = true;
    document.getElementById("links").classList.add("active");
    document.getElementById("toggle-on").style.display = "inherit";
    document.getElementById("toggle").style.display = "none";
}

function closeMenu() {
    menu = false;
    document.getElementById("links").classList.remove("active");
    document.getElementById("toggle-on").style.display = "none";
    document.getElementById("toggle").style.display = "inherit";
}

function onResize() {
    if(window.innerWidth>768) {
        closeMenu();
    }
    resizeTitlebar();
}

function resizeTitlebar() {
    const title= document.getElementById("top");

    if(window.innerWidth>768) {
        const p = window.innerWidth / 768 * 2;
        let i = 2.25 * p;

        if(i>25) {
            i=25;
        }

        title.style.marginRight = i+"%";
        title.style.marginLeft = i+"%";
    } else {
        title.style.marginRight = "5%";
        title.style.marginLeft = "5%";
    }
}

window.onresize = onResize;