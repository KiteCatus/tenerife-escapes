// Deklarera - tjanster.html
const paket = document.querySelector("#paket");
const beskrivningInput = document.querySelector("#beskrivning");
const tjansteSkickaKnappen = document.querySelector("#tjanst-skicka");
const tjansteFelmeddelande = document.querySelector("#tjanst-fel");
const epostInput = document.querySelector("#e-post");

//Funktion till tjänsterformuläret
function tjansteFormular(handelse) {
    handelse.preventDefault();

    //Value
    const epost = epostInput.value;
    const beskrivning = beskrivningInput.value;

    //Kontrollera input
    if (epost !== "" && beskrivning !== "") {
        tjansteFelmeddelande.textContent = "";

        alert(`Formuläret skickades. Tack för ditt meddelande! Vi återkommer till dig inom några dagar.\n\nDitt epostadress: ${epost}\nValde paket: ${paket.options[paket.selectedIndex].text}\nDitt beskrivning: ${beskrivning}`);
    }
    else {
        tjansteFelmeddelande.textContent = "Fyll i alla fält så återkommer vi med ett förslag som passar dig!";
    }
}

// Anropar funktionen
tjansteSkickaKnappen.addEventListener("click", tjansteFormular);