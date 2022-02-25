var navbar = `
<nav id="navbar">
    <div id="responsiveBar">
        <div id="icon">
        </div>
        <div id="divButMenu">
            <button class="material-icons" id="butMenu">
                menu
            </button>
        </div>
    </div>
    <div id="menu">
        <ul>
            <li>
                <a href="./index.html">Accueil</a>
            </li>
            <li>
                <a href="./prestations.html">Prestations</a>
            </li>
            <li>
                <a href="./tarifs.html">Tarifs</a>
            </li>
            <li>
                <a href="./contact.html">Contact</a>
            </li>
        </ul>
    </div>
</nav>
`
document.write(navbar)
document.getElementById('butMenu').addEventListener('click',function () {
    menu = document.getElementById('menu')
    butMenu = document.getElementById('butMenu')
    if (menu.style.display.trim() == '') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = '';
    }
    butMenu.innerText = butMenu.innerText.trim() == "menu" ? "close" : "menu";
})

/*
$(document).ready(function () {
    $("#butMenu").click(function () {
        if (document.getElementById('menu').style.display.trim() == '') {
            document.getElementById('menu').style.display = 'flex';
        }
        else {
            document.getElementById('menu').style.display = '';
        }
        $("#butMenu").text($("#butMenu").text().trim() == "menu" ? "close" : "menu");
    });
});

*/