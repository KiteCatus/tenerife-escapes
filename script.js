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
function visaMeny() {
    const menyKnapp = document.querySelector("nav button");
    const meny = document.querySelectorAll("nav a");

    for (let i = 0; i < meny.length; i++) {
        menyKnapp.addEventListener("click", () => {
            meny[i].classList.toggle("oppen-meny");
        })
    }
}

//Deklarerar funktionen för att den ska köras när sidan laddas
visaMer();
visaMeny();