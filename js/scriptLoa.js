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

const reservationModal = document.getElementById("reservationModal");

const openReservation = document.getElementById("openReservation");

const closeModal = document.getElementById("closeModal");

const payButton = document.getElementById("payButton");

const loginWarning = document.getElementById("loginWarning");

const experienceType = document.getElementById("experienceType");

const peopleCount = document.getElementById("peopleCount");

const privateOption = document.getElementById("privateOption");

const hotelOption = document.getElementById("hotelOption");

const foodOption = document.getElementById("foodOption");

const totalPrice = document.getElementById("totalPrice");

/* ABRIR MODAL */

openReservation.addEventListener("click", function(){

    reservationModal.classList.add("active");

});

/* CERRAR */

closeModal.addEventListener("click", function(){

    reservationModal.classList.remove("active");

});

/* CALCULAR TOTAL */

function calculateTotal(){

    let base =
        Number(experienceType.value);

    let people =
        Number(peopleCount.value);

    let privatePrice =
        Number(privateOption.value);

    let hotel =
        Number(hotelOption.value);

    let food =
        Number(foodOption.value);

    let total =
        ((base + privatePrice + hotel + food) * people);

    totalPrice.textContent =
        "$" + total.toLocaleString("es-CL");

}

/* EVENTOS */

experienceType.addEventListener("change", calculateTotal);

peopleCount.addEventListener("input", calculateTotal);

privateOption.addEventListener("change", calculateTotal);

hotelOption.addEventListener("change", calculateTotal);

foodOption.addEventListener("change", calculateTotal);

/* SIMULAR RESERVA */

payButton.addEventListener("click", function(){

    loginWarning.classList.add("show");

});

/* INICIAL */

calculateTotal();