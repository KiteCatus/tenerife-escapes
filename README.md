# Tenerife Escapes

## Om sidan
Vad handlar sidan om, och vem är den till för? Två–tre meningar.

Tenerife Escapes hjälper användaren med att skapa en resa lätt och enkelt, utan något stress. De kan bara slappna av och låta företaget lösa resten. Det är för människor som är tröttna på planering av resor och vill bara slappna av och kontakta företaget via webbsidan och berätta deras behov.

## Skiss
Länk eller hänvisning till skissfilen i repot.
Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?

Jag har gjort två olika skiss, en som jag har ritat och en som jag har bett ChatGPT att skapa. Jag har gett en riktig specifik prompt då jag har fått en jättebra skiss. Därför har jag använt mest av det som jag har fått av AI. Jag har ändrat footer eftersom jag ville ha det enkelt och visa webbsidans botten vilket visar att de kan inte skrolla ner mer. Jag har inte heller använt några design eftersom jag ville att websidan blir mer enkelt men ser lyxigt ut.

## Funktionalitet
Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det?

- I om-teneriffa.html kan besökaren läsa mer saker om olika städer medan de klickar på Visa mer knappen. Jag har använt CSS för att dölja texten och JavaScript för att koppla ihop knappen till CSS med visaMer() funktion så om de ska klicka på knappen ska det byta class till .visa som gör att visa texten. Funktionen också byter texten till knappen.

- I alla html filer har en knapp i nav som gör att besökaren kan öppna menyn i smala skärmarna medan de klicker på knappen. Jag har använt CSS så knappen ska inte synas och i en media query byter nav utseende till att knappen ska visas, <a> länkar inuti nav syns inte och navs utseende blir kolumn då när man klicker på knappen, det ska synas så här. Jag har också använt JavaScript så dessa kopplas ihop med en funktion som heter hamburgerMeny().

- I tjanster.html kan besökaren fylla in ett formulär där man kan välja vilken paket de vill ha och skriva ett meddelande till företaget hur de tänkte. Det funkar inte än att skicka den till en mejl men det visar att det skickades och vad besökaren har skrivit. I HTML använde jag en <form> då det skapar ett formulär och också en <select> <option> så användaren kan välja mellan 3 olika paketer. Jag har använt CSS hur det ska se ut och var det ska ligga. I JavaScript har jag använt en funktion som heter tjansteFormular() som gör att ta in variablar som jag har deklarerat utanför funktion. Funktionen kollar om besökaren har skrivit något eller inte och om de skickar då de får ett meddelande (alert()) som meddelar besökaren att de har skickat ett meddelande vad de har skrivit.

- I kontakt.html är samma som med tjanster.html form men utan <select> <option>. Funktionen heter kontaktFormular().

## AI-användning
Minst två exempel. För varje:
- Vad bad jag om?
- Vad fick jag?
- Vad gjorde jag med det?

1. Jag bad AI om att berätta hur man skriver en kod till hamburgermeny men det var komplicerad och även om jag förstår koden, jag kan inte återskapa det. Så jag försökte själv och skrev koden utan AI. Det blev enklare och det fungerade.

2. Jag har gjort två funktioner som funkade inte och jag visste inte varför. Jag har provat många saker men efter det så har jag frågat AI. Felet var att två funktioner (formulär) har haft eventlistener utanför funktionen och de har därför letat efter knappen onödigt och på fel sidan. Eftersom några HTML filer har inte den knappen så AI föreslog att använsa if-satsen som kollar om sidan har den knappen eller inte. Om det har då körs funktionen. Det hjälpte mig att funktionen funkar utan att ändra något i funktionen. Men sedan tänkte jag att skapa två JavaScript filer till dessa funktion och jag har kopplat ihop med HTML fil där jag använder dessa.

3. Jag visste inte hur jag kan använda value till <select> <option> så jag har bett AI hur jag kan lösa det och frågat också vad det betyder. Jag har fått paket.options[paket.selectedIndex].text. paket.options[1] är det första val. Men vi behöver detta val som besökaren har valt och vi behöver paket.selectedIndex inne i [] som ger detta som är vald. .text ger ett text så det ska synas i alert().

## Tekniska val (VG)
Vilka beslut tog jag, och varför?

- Jag ha valt svenska namn för variabler, id och klasser eftersom jag ser bättre vilka saker jag har gett ett namn då jag kan lära mig begreppen bättre.

- När jag behövde använda querySelectorAll, har VS Code rekommenderat foreach loop men jag har inte kännt detta då jag har valt for-loop eftersom jag har lärt detta i programmering 1 i C# och det är samma sak.

- I hamburgermeny har jag inte använt position: absolute; eftersom jag kunde inte lösa med det, eftersom jag förstod inte riktig hur det fungerar. Jag valde att göra det som en Visa mer knapp istället.

- Nästan alla div använder jag för att designa lättare och positionera bättre med flex. 

- I JavaScript fil har jag fått ett felmeddelande till hela sidan som var att de söker knapparna då jag frågade AI hur kan jag lösa problemet och har då fått svar att if-satsen löser detta problemet. Det kollar om det finns knappar i alla HTML filer. Om det finns då körs koden. Det fungerade men jag har hittat ett bättre lösning med att skapa andra JavaScript filer och sätta funktionerna som anpassar sig till sidan. Då blir det mer organiserad och hittar bättre funktionen till sidan. Då det kollar inte om det finns knappen onödigt.

## Bedömning av AI-innehåll (VG)
Hur avgjorde jag om det AI gav mig var bra nog?
Vad behöll jag, vad ändrade jag, och varför?

Jag har frågat AI hur koden för en hamburgermeny ser ut och jag har förstått men sedan jag har skrivit själv eftersom jag har hittat ett lättare sätt att göra det. AI har använt foreach och position: absolute; men jag förstår bättre for loopen eftersom det har jag läst i programmering 1 med C# då jag tyckte att det är bättre. Jag har inte förstått position än så jag har först ändrat grid så nav var under header och därefter har jag ändrat nav till flex-direction till row och sedan dessa positioner. Därefter har jag bara dolt nav a så nav button ska stanna kvar. Och sedan har jag skapat function till button.

För funktionerna har jag fått en if-sats utanför funktionen som hjälpte mig att kolla om knappen finns i HTML-filen men sedan har jag ändrat till en bättre lösning. Jag har skapat två olika JavaScript och sätta dessa funktioner i filerna och sedan kopplat ihop med HTML-filerna. Det blir mer organiserad och förstår bättre vilka variablar tillhör vilka funktioner.

Jag behöll också paket.options[paket.selectedIndex].text eftersom det har funkat och förstår varför denna kod fungerar.