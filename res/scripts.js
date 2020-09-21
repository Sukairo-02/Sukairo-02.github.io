let root = document.documentElement;

function setcolor_1() {
    var bgdiv = document.getElementById('bgimg');
    root.style.setProperty(' --body_bgcolor', 'crimson'); 
    root.style.setProperty('--link', 'crimson');
    root.style.setProperty('--alink', '#fd1340');
    root.style.setProperty('--flink', '#fd1340');
    root.style.setProperty('--hlink', '#fd1340');
    root.style.setProperty('--vlink', 'crimson');
    root.style.setProperty('--dlink_bg', 'crimson');
    root.style.setProperty('--dlink_abg', '#fd1340');
    root.style.setProperty('--dlink_fbg', '#fd1340');
    root.style.setProperty('--dlink_hbg', '#fd1340');
    root.style.setProperty('--dlink_vbg', 'crimson');
    root.style.setProperty('--contentcolor', 'crimson');
    root.style.setProperty('--bgfiltercolor', 'rgba(126, 126, 126, 0.38)');
    bgdiv.style.backgroundImage = "url(../graphics/bg.jpg)";
}

function setcolor_2() {
    var bgdiv = document.getElementById('bgimg');
    root.style.setProperty(' --body_bgcolor', '#3498DB');
    root.style.setProperty('--link', '#3498DB');
    root.style.setProperty('--alink', '#2980B9');
    root.style.setProperty('--flink', '#2980B9');
    root.style.setProperty('--hlink', '#2980B9');
    root.style.setProperty('--vlink', '#3498DB');
    root.style.setProperty('--dlink_bg', '#3498DB');
    root.style.setProperty('--dlink_abg', '#2980B9');
    root.style.setProperty('--dlink_fbg', '#2980B9');
    root.style.setProperty('--dlink_hbg', '#2980B9');
    root.style.setProperty('--dlink_vbg', '#3498DB');
    root.style.setProperty('--contentcolor', '#3498DB');
    root.style.setProperty('--bgfiltercolor', 'rgba(126, 126, 126, 0.25)');
    bgdiv.style.backgroundImage = 'url(../graphics/bg2.jpg)';
}

function dropDown() {
    document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var upButton = document.getElementById("upButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        upButton.style.display = "block";
        var opac = ((Math.max(document.body.scrollTop, document.documentElement.scrollTop) - 200) / 400);
        if (opac < 1) {
            upButton.style.opacity = opac;
        } else {
            upButton.style.opacity = 1;
        }
    } else {
        upButton.style.display = "none";
    }

    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    var footer = document.getElementById("footer");

    if ((Math.max(document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight - 120) > (height - 260)) {
        upButton.style.top = height - 260 + "px";
        upButton.style.bottom = null;
        upButton.style.position = "absolute";
    } else {

        upButton.style.top = null;
        upButton.style.bottom = "120px";
        upButton.style.position = "fixed"
    }

    console.log((parseInt(footer.height) + 120) + "px")
}