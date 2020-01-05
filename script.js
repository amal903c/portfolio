window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}



// Burger menu

// Klik på burgermenu -> visToggleMenu

document.querySelector("#burgericon").addEventListener("click", visToggleMenu);


function visToggleMenu() {
    console.log("visToggleMenu");

    // Fjern hide

    document.querySelector(".toggle_menu").classList.remove("hide");

}





// Web

//Klik på web

document.querySelector(".web_menu").addEventListener("click", visWeb);

function visWeb() {
    console.log("visWeb");
}
