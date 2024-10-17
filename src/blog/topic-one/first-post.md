---
title: Sprint 14 notes
date: 2024-09-23
image: /assets/images/schapen-1.jpg
---

[schapen](/assets/images/schapen-1.jpg)
# FDND Programma

## Code Conventions

* Inspringen van code met 1 tab
* Witruimte tussen code (zoals articles, sections en divs)
* Gebruik van kleurcodes; nooit red, blue etc. 
* Spatie na de : (dubbele punt)
* Gebruiken van comments bij animaties of transities (of complexe code)

Sprint 14 

## Lose your head, over...

Leren om het omarmen van Jamstack. Er zijn 2 groepen technologie onder het paraplubegrip Jamstack: Sitegenerators & Headless CMS. 
Is een manier om websites en webapplicaties te bouwen die sneller, veiliger en schaalbaarder zijn. Het kan snel geladen worden. Het maakt het mogelijk een modulaire architectuur te implementeren wat onderdeel hiervan is dat verschillende delen van een website of webapplicatie kunnen worden gebouwd en onderhouden door verschillende teams. 

**Mentorteams**: 
Je bent mentor van 5/6 studenten, met 4 andere studenten uit jouw eigen squad. Dit is een mentorgroep en mentorteam. Krijn is onze mentor. Met jouw team zorg je dat er elke ma/wo/vr precies 1 mentor aanwezig is. Zorg dat de squadleader jaar 1 weet welke mentor er op elke dag aanwezig is.

**Coachgesprekken**: 
Het gaat allemaal heel goed tot zover en het lijkt alsof het allemaal prima begrijp. 

**Focus semester 3**: 
Gestructureerd werken in kleine teams. Naar één oplossing voor de opdrachtgever. 
Preferred stack: Sveltekit en Directus.

----------------------

## Sveltekit Principles

### Structure
Frameworsk hebben vaak een vaste (saaie) structuur. Src staat alles wat Sveltekit moet uitvoeren. 
In Static staan alle bestanden waar Sveltekit niks mee doet. 

* Src heeft altijd routes en app.html nodig om te werken
* Lib -> Server dient voor alleen maar serverside code. Dit mag nooit in een page.js bestand geladen worden. Mag alleen in een Page.server.js geladen worden. Alleen voor informatie die niet getoond mag worden voor gebruikers. 
* Static mogen niet in je Library, tenzij het een svg is. Video's, afbeeldingen, jpeg bestanden mogen alleen in je Static folder. 
* Gitignore zijn bestanden die niet naar Github geladen mogen worden zoals node modules etc. 
* .env staan sensitieve informatie in, zoals wachtwoorden. 
* .env.example is informatie die wel weer naar Github gestuurd mogen worden. 
* package.json is een lijst die voor dependencies nodig zijn voor het project. 
* svelte.config.js is configuratie voor Svelte en hoe Svelte draait, zoals welke adapter het gebruikt. 
* vite.config.js is een tool die een project runt. Het is dus een 'builder'. (hier doe je niks mee)  

**Tip**: Zet je vscode in editor preference op medium zodat je je routes kan zien waar jouw +page.svelte in staat. - Als je dus meerdere pagina's hebt. 

### Routing
Framework projecten hebben een manier om routing af te handelen. 

* Dynamic en Static routing. (check dit bij seniors (docenten) of het correct is)

### Error handling
Framework projecten hebben een manier om fouten af te handelen

* +error.svelte bestand in je routes als je sveltekit nog overeind staat. 
* <h1> Er gaat iets mis </h1> komt de tekst tevoorschijn als er iets fout gaat in jouw .svelte bestand. 
* Je kan +layout.svelte nesten. 

```html
<header> 
	<h1> Dit is een svelte project </h1> 
</header> 

<main> 
	</slot> 
</main>
 
<footer>
	<p> Copyleft, all wrongs reversed </p>
</footer> 
```

* Je kan dus +layout.svelte gebruiken voor goede layouts, maar ook om errors beter te herkennen.

**To do** (issue):  Maak een error.svelte aan voor een error handling in Svelte.  

### Loading data
Voor het laden van de data heb je async functie nodig voor de laadtijd van de data. 

export async function load() {
 return {
  foo: 'bar'
 }
}

* Om data te laden moet je 'export' gebruiken. 
* In je .env bestand staat je PUBLIC_API_URL (in dit geval directus)
* import { PUBLIC_API_URL ) from '$env/static/public.' om deze data in te laden in de page.svelte file. 

### Binding
<input bind:value={name} /> zorgt ervoor dat de naam gebind wordt, zodat die overal aangepast wordt. 

* Het zorgt ervoor dat in een tekst field dat het mee aangepast wordt, met bijvoorbeeld gegevens. 
* Met een 2e variabele kan je ervoor zorgen dat het blijft staan, omdat het niet meeveranderd omdat het niet 'gebind' wordt. 
* ipv let doe je $: shout = name + 'rocks'! pas je het direct aan (dit is een shortcut). 
* Dit werkt ook voor componenten.

[ hier een voorbeeld - staat in teams ]


### Library
Een bibliotheekfunctie die je in stukjes kan zetten waardoor het meer helder wordt. 

* Componenten in je library moeten altijd een hoofdletter bevatten - Header.svelte bijvoorbeeld. 
* index.js verzamelt alle componenten. import {} from '$lib'

-----------------------------------------------

# Design Critique - Dorien

## Dieter Rams 
10 principes voor een goed design:
 4. Good design makes a product understandable 
 8. Good design is thorough down to the last detail
 10. Good design is as little design as possible

**Indicator**: 3.3.2

-----------------------------------------------

## WE LOVE WEB Nicolas Garnier

Started in 2012 as a developer and started freelancing in 2018. He does agencies, product & start-ups. 
Creative developer is a fancy term for dev with an eye for creativity. It uses all available tools to solve a creative & technical challenge. You build websites, applications and installations.They use mainly JS, CSS, WebGL, Processing, Unity, GenAI, LLM etc. 

[His website](https://nico.computer/)

### Nicolas' talk. 

These are the important factors for creative coding: 
* Create anticipation and surprise
* Suppor the narrative and set the mood
* Engage the user
* Solve a design or technical challenge.

Always listen to the client and see what they want for their website. Not everyone wants animation, and rather have something that can be used properly instead of having a lot of animations and art implemented into their website. Also try to look at their style and what company it is to design a website to their style and need. 

### Conclusion

* Think of animations and interactinons as an extention to an original intent.
* Be open minded
* Ask yourself what it brings and ask for feedback
* Be ready to spend a lot of time on it. Animations can take up a lot of hours. 





