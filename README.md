# Quiz Library
Quiz Library is een library voor het opzetten van een eenvoudige quiz. Deze library heeft de mogelijkheid om punten aan een vraag te koppelen zodat het resultaat van de quiz een totaalscore is met een bijbehorende rang.

## Getting Started

De quiz maakt gebruik van jQuery. De installatie verloopt eenvoudig door het volgen van de hieronder weergegeven stappen. Er staan standaard waardes ingesteld, maar alles is naar eigen wens aanpasbaar. Pas in de JSON de vragen, antwoorden en profielen van de resultaten aan zodat de quiz in het eigen gewenste thema komt te staan.

### Installeren van de quiz

Voeg jQuery toe (De quiz is getest met jQuery versie 3.2.0, maar werkt vermoedelijk ook met andere versies).

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
```

Voeg de JS file toe 

```
<script src="quiz/quiz.js"></script>
```
Voeg de CSS van de quiz toe

```
<link rel="stylesheet" type="text/css" href="quiz/quiz.css">
```
Maak de DIV's aan voor de output

```
<div id="quiz"></div>
<button id="submit">Bekijk het resultaat!</button>
<div id="results"></div>
```

Starten van de quiz in je HTML 

```
<script>
//quiz.buildQuiz('file path name', 'quiz div id', 'results div id', 'submit button id');
quiz.buildQuiz('config.json','quiz', 'results', 'submit');
</script>
```
### Configureren van de quiz

Het configureren van de quiz werkt via een JSON bestand. Het configureren van de vragen en antwoorden werkt als volgt:

```
   {
     "question": "Hoe regel jij je lunch?", //zet hier je vraag neer
       "answers": {
        "Neem eten mee van thuis": "10", //zet hier je antwoord + score
        "Laat het bezorgen": "20", //zet hier je antwoord + score
        "Ik haal het onderweg": "30" //zet hier je antwoord + score
     }
   }
```

Het configureren van de verschillende profielen aan de hand van de behaalde totaal score werkt als volgt:

```
   {
     "profiel1": "Thrall. Een nieuwe viking die nog veel moet leren", //profiel 1 met bijbehorende tekst
     "profiel2": "Viking, een viking die goed op weg is om los te breken.", //profiel 2 met bijbehorende tekst
     "profiel3": "Losgebroken Viking! Jij bent echt helemaal los gebroken." //profiel 3 met bijbehorende tekst
   }
```


## Auteurs

* **Tiddo Vermeulen** - *Groepsleider* - [Tiddo Vermeulen](https://tiddovermeulen.com)
* **Bas de Kok** - *Teamlid* - [Bas de Kok](https://madebybas.nl)
* **Rechard Motieram** - *Teamlid* - [Rechard Motieram](https://officialjinzen.com)
