const btnInicio = document.getElementById("btn-oasis");

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", function(){

    sidebar.classList.toggle("active");

    if(sidebar.classList.contains("active")){
        menuIcon.textContent = "✕";
    }
    else{
        menuIcon.textContent = "☰";
    }

});

document.addEventListener("click", function(event){

    const clickDentroSidebar = sidebar.contains(event.target);
    const clickBoton = menuBtn.contains(event.target);

    if(!clickDentroSidebar && !clickBoton){

        sidebar.classList.remove("active");

        menuIcon.textContent = "☰";
    }

});


btnInicio.addEventListener("click", function() {

    const fondo = document.querySelector(".background");
    const content = document.querySelector(".content");
    const overlay = document.querySelector(".overlay");
    const mainContent = document.querySelector(".main-content");
    const topbar = document.querySelector(".topbar");

    topbar.style.opacity = "1";
    topbar.style.pointerEvents = "all";
    fondo.style.filter = "blur(0px) brightness(1)";

    content.style.opacity = "0";
    content.style.transform = "translateY(-30px)";

    setTimeout(() => {

        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";

    }, 300);

    mainContent.style.opacity = "1";

});