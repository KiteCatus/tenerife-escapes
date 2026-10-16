// Deklarera - kontakt.html
const namnInput = document.querySelector("#namn");
const epostInput = document.querySelector("#e-post");
const amneInput = document.querySelector("#amne");
const meddelandeInput = document.querySelector("#meddelande");
const kontaktSkickaKnappen = document.querySelector("#kontakt-skicka");
const kontaktFelmeddelande = document.querySelector("#kontakt-fel");

//Funtion till kontaktformuläret
function kontaktFormular(handelse) {
    handelse.preventDefault();

    // Value
    const namn = namnInput.value;
    const epost = epostInput.value;
    const amne = amneInput.value;
    const meddelande = meddelandeInput.value;

    // Kontrollera input
    if (namn !== "" && epost !== "" && amne !== "" && meddelande !== "") {
        kontaktFelmeddelande.textContent = "";

        alert(`Formuläret skickades. Tack för ditt meddelande, ${namn}! Vi återkommer till dig inom några dagar.\n\nDitt namn: ${namn}\nDitt epostadress: ${epost}\nDitt ämne: ${amne}\nDitt meddelande: ${meddelande}`);
    }
    else {
        kontaktFelmeddelande.textContent = "Fyll i alla fält så hör jag av mig så snart jag kan!";
    }
}

// Anropar funktionen
kontaktSkickaKnappen.addEventListener("click", kontaktFormular);