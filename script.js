// Visa mer funktionalitet i artiklarna på sidan "Om Teneriffa"
function visaMer() {
    const visaMerKnapp = document.querySelectorAll(".visa-mer");
    const doldElementer = document.querySelectorAll(".dold");
    
    for (let i = 0; i < visaMerKnapp.length; i++) {
        visaMerKnapp[i].addEventListener("click", () => {
            doldElementer[i].classList.toggle("visa");
            if (doldElementer[i].classList.contains("visa")) {
                visaMerKnapp[i].textContent = "Visa mindre";
            } 
            else {
                visaMerKnapp[i].textContent = "Visa mer";
            }
        });
    }
};

// Funktion för att visa och dölja menyn på mobila enheter
function toggleMenu() {
    const openMenuButton = document.querySelector(".open-menu");
    const navLinks = document.querySelectorAll("nav a");

    openMenuButton.addEventListener("click", () => {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.toggle("show");
        }
    });
}

//Deklarerar funktionen för att den ska köras när sidan laddas
visaMer();
toggleMenu();