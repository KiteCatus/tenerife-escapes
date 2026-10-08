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

//Funktion till tjänsterformuläret
function tjansteFormular(handelse) {
    handelse.preventDefault();

    const epost = epostInput.value;
    const beskrivning = beskrivningInput.value;

    if (epost !== "" && beskrivning !== "") {
        tjansteFelmeddelande.textContent = "";

        alert(`Formuläret skickades. Tack för ditt meddelande! Vi återkommer till dig inom några dagar.\n\nDitt epostadress: ${epost}\nValde paket: ${paket.options[paket.selectedIndex].text}\nDitt beskrivning: ${beskrivning}`);
    }
    else {
        tjansteFelmeddelande.textContent = "Fyll i alla fält så återkommer vi med ett förslag som passar dig!";
    }
}

//Funtion till kontaktformuläret
function kontaktFormular(handelse) {
    handelse.preventDefault();

    const namn = namnInput.value;
    const epost = epostInput.value;
    const amne = amneInput.value;
    const meddelande = meddelandeInput.value;

    if (namn !== "" && epost !== "" && amne !== "" && meddelande !== "") {
        kontaktFelmeddelande.textContent = "";

        alert(`Formuläret skickades. Tack för ditt meddelande, ${namn}! Vi återkommer till dig inom några dagar.\n\nDitt namn: ${namn}\nDitt epostadress: ${epost}\nDitt ämne: ${amne}\nDitt meddelande: ${meddelande}`);
    }
    else {
        kontaktFelmeddelande.textContent = "Fyll i alla fält så hör jag av mig så snart jag kan!";
    }
}

//Deklarera - kontakt.html
const namnInput = document.querySelector("#namn");
const epostInput = document.querySelector("#e-post");
const amneInput = document.querySelector("#amne");
const meddelandeInput = document.querySelector("#meddelande");
const kontaktSkickaKnappen = document.querySelector("#kontakt-skicka");
const kontaktFelmeddelande = document.querySelector("#kontakt-fel");

//Deklarera - tjanster.html
const paket = document.querySelector("#paket");
const beskrivningInput = document.querySelector("#beskrivning");
const tjansteSkickaKnappen = document.querySelector("#tjanst-skicka");
const tjansteFelmeddelande = document.querySelector("#tjanst-fel");

//Anropar funktionen för att den ska köras när sidan laddas
visaMer();
visaMeny();
if (tjansteSkickaKnappen) {
    tjansteSkickaKnappen.addEventListener("click", tjansteFormular);
}

if (kontaktSkickaKnappen) {
    kontaktSkickaKnappen.addEventListener("click", kontaktFormular);
}