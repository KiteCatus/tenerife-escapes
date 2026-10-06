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

    if (epost !== "" && beskrivning !== "") {
        fel.textContent = "";

        alert(`Ditt epostadress: ${epost}\nValde paket: ${paket.options[paket.selectedIndex].text}\nDitt beskrivning: ${beskrivning}`);
            //"Ditt epostadress: " + epost + " Valde paket: " + paket + " Ditt beskrivning: " + beskrivning);
    }
    else {
        fel.textContent = "Fyll i alla fält så återkommer vi med ett förslag som passar dig!";
    }
}

//Funtion till kontaktformuläret


//Deklarera - kontakt.html
const namn = document.querySelector("#namn");
const epost = document.querySelector("#e-post").value;
const amne = document.querySelector("#amne");
const meddelande = document.querySelector("#meddelande");
const skickaKnappen = document.querySelector("#skicka");

//Deklarera - tjanster.html
const paket = document.querySelector("#paket");
const beskrivning = document.querySelector("#beskrivning").value;
const felTjanst = document.querySelector("#fel").value;


//Anropar funktionen för att den ska köras när sidan laddas
visaMer();
visaMeny();
skickaKnappen.addEventListener("click", tjansteFormular);