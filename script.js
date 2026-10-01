// Visa mer funktionalitet i artiklarna på sidan "Om Teneriffa"
const visaMer = () => {
    const visaMerKnapp = document.querySelectorAll("#visa-mer");
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

visaMer();