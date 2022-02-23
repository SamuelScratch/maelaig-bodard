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