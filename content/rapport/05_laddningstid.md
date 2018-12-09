Laddningstid
=========================
Denna uppgift är att mäta ett antal webbplatsers laddningstider och se om de innehåller några saker som kan förbättras med tanke på laddningstid och användbarhet.

Urval
-----------------------
Följande 3 webbplatser har analyserats:

1. [Dustin](https://www.dustinhome.se/)
2. [Komplett](https://www.komplett.se/)
3. [Webhallen](https://www.webhallen.com/)

Webbplatserna valdes för att alla tre är e-handelsplattser med i princip samma produkter, och jag ville se hur bra de hade lyckats med att snabba upp sina respektive webbplatser och vilken potential som fanns för ytterligare förbättringar.

Metod
-----------------------
För varje webbplats valdes tre sidor analyserades. De sidor som valdes var:

* Hemsidan
* En representativ produktsida med många bilder. Jag valde mobiltelefoner/iPhone som innehöll likartat innehåll för alla webbplatserna.
* En sida med mest text. Jag valde "försäljningsvillkor" som hade liknande utseende för alla webbplatserna.

För att mäta laddningstid användes först [Google Pagespeed](https://developers.google.com/speed/pagespeed/insights/), där både Mobile och Desktop mättes. Sedan mätte jag med Chrome Devtools under Networks fliken. Där mättes antalet nedladdade resurser, total storlek på sidan samt laddningstiden. Mätningarna gjordes med deaktiverad cache.

Samtliga mätningar gjordes 3 gånger och sedan togs medelvärdet. Allt data lagrades i en Excelfil.

Resultat
-----------------------
Här är resultatet av utvärderingen för respektive webbplats. Allt rådata finns att se antingen som [en skärmdump](files/Loadmeasurements.png) eller i [Excel format](files/Loadmeasurements.xlsx).

###1. Dustin

#####Skärmdump
![Skärmdump Dustins webbplats](image/theme/Dustin.png?w=800)

#####Analyserade sidor
Länkar till de sidor som analyserats:

1. [Hemsidan](https://www.dustinhome.se)
2. [Produktsida](https://www.dustinhome.se/group/hardvara/telefoner-gps/smartphones/iphone/)
3. [Försäljningsvillkor](https://www.dustinhome.se/service/forsaljningsvillkor)

#####Google Pagespeed
Resultat för sida 1, 2 och 3.

* Desktop: 90%, 96%, 98%.
* Mobile:  26%, 41%, 44%.

#####Devtools
Resultat för sida 1, 2 och 3.

* Antal nedladdade resurser: 114, 64, 54
* Sidans storlek [MB]: 3.6, 1.0, 0.9
* Laddtid [sek]: 2.86, 2.32, 2.46

#####Analys och förbättringsförslag
Dustins sidor har väldigt många resurser som måste hämtas. Det är 20-40 javascript filer och ännu fler bilder på varje sida. Speciellt hemsidan har många och stora bilder. Det borde gå att minska storleken på bilderna för att snabba upp laddningen. Det finns en css-fil också som är mindre än 1 kB, men tar 0.5 sekunder att ladda. Kanske går att göra om till inline kod.

###2. Komplett

#####Skärmdump
![Skärmdump Kompletts webbplats](image/theme/Komplett.png?w=800)

#####Analyserade sidor
Länkar till de sidor som analyserats:

1. [Hemsidan](https://www.komplett.se)
2. [Produktsida](https://www.komplett.se/category/21064/mobil/mobiltelefon?nlevel=10444%C2%A721064&manufacturer=Apple&hits=48)
3. [Försäljningsvillkor](https://www.komplett.se/kundservice/om-komplett/foersaeljningsvillkor/)

#####Google Pagespeed
Resultat för sida 1, 2 och 3.

* Desktop: 99%, 94%, 100%.
* Mobile:  57%, 54%, 63%.

#####Devtools
Resultat för sida 1, 2 och 3.

* Antal nedladdade resurser: 120, 131, 70
* Sidans storlek [MB]: 1.1, 0.8, 0.8
* Laddtid [sek]: 3.06, 3.21, 2.75

#####Analys och förbättringsförslag
Kompletts sidor har väldigt många resurser som måste hämtas. Det är 20-50 javascript filer och upp åt 80 på bilder på varje sida. Bilderna är i och för sig små, men det blir många hämtningar. Detta borde ses över och optimeras.

Varken style sheets eller de flesta js filerna är heller minifierade, det borde göras.

###3. Webhallen

#####Skärmdump
![Skärmdump Webhallens webbplats](image/theme/Webhallen.png?w=800)

#####Analyserade sidor
Länkar till de sidor som analyserats:

1. [Hemsidan](https://www.webhallen.com)
2. [Produktsida](https://www.webhallen.com/se/category/2761-iPhone?page=1)
3. [Försäljningsvillkor](https://www.webhallen.com/se/info/8-Kopvillkor)

#####Google Pagespeed
Resultat för sida 1, 2 och 3.

* Desktop: 94%, 95%, 97%.
* Mobile:  17%, 14%, 24%.

#####Devtools
Resultat för sida 1, 2 och 3.

* Antal nedladdade resurser: 149, 87, 83
* Sidans storlek [MB]: 1.8, 1.5, 1.3
* Laddtid [sek]: 7.90, 3.00, 3.36

#####Analys och förbättringsförslag
Webhallens sidor har väldigt många resurser som måste hämtas, speciellt hemsidan. Det är 60-100 på bilder på varje sida. Bilderna är i och för sig små, men det blir många hämtningar. Detta borde ses över och optimeras.

Analys
-----------------------
Alla tre webbplatserna som analyserats uppvisar samma karakteristik. Det är många filer som ska hämtas, och många av dem är små. Alla webbplatserna borde se över och försöka optimera bilderna. Minifiering av js och css borde göras mycket mer. Se även över om vissa mindre scriptfiler kan läggas som inline kod.

Baserat på testresultatet så är det ganska jämt mellan Dustin och Komplett, men Komplett utses som en knapp segrare p.g.a sina klart bättre mätvärden på Pagespeed Mobile. Webhallen är klart sist och visar ett extremt dåligt värde på Pagespeed Mobile.

Jag kan dock inte dra slutsatsen att Webhallen har gjort en sämre optimering på hastighet. Skillnaden kan ju bero på att deras server har en sämre bandbredd helt enkelt.

Upplevelsen av de tre webbplatserna stämmer överens med mätvärdena. Dustin och Komplett upplevs som lika snabba och något rappare än Webhallen. Samtliga webbplatser upplevs som betydligt snabbare än vad de uppmätta laddningstiderna visar. Jag upplever att det aldrig tar mer än en sekund från klick tills sidan kommer upp och är användbar. Sedan fylls det på med bl.a. fler bilder men det gör inget tycker jag. Huvudsaken är att det händer något när man klickar.

Min gräns för hur snabbt en sida måste komma upp initialt är 0.5-1 sekund någonting, och sedan bör hela sidan ha renderats inom 5 sekunder i alla fall. Samtliga analyserade webbplatser uppfyller detta, i alla fall på en desktop. Jag har ej testat på mobilen, men mistänker att det inte alls är så snabbt där.

Referenser
-----------------------
-

Övrigt
-----------------------
Denna rapport är framtagen av Per-Olof Eriksson, som en del av kursmoment 5 i kursen [design (v2)](https://dbwebb.se/kurser/design-v2).
