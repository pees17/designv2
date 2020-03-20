---
views:
    flash:
        region: flash
        template: anax/v2/image/default
        data:
            src: "image/Maldiverna.jpg?width=1200&height=140&crop-to-fit"
            alt: "Kuredo island, Maldives"

author: pees17
category:
    - resor
    - maldiverna
published: "2018-12-12"
---
Maldiverna 2011
==================================
[FIGURE src="image/Maldiverna.jpg?width=168&height=168&crop-to-fit&sharpen" class="right w25" alt="Kuredo island, Maldives"]

Kritvit sand, underbart vackra blommor och andra växter, samt en fantastisk undervattensvärld!

<!--more-->

De två veckor som jag och min fru spenderade här våren 2011 är nog den mest exotiska resa jag har gjort i hela mitt liv så här långt. Det var så vackert och så lugnt. Fantastiska badstränder och vi kunde gå rakt ut i vattnet från vår Bungalow, snorkla och se en massa vackra fiskar och koraller. Dessutom, bäst av allt, jättesköldpaddor som simmade förbi helt inpå oss!

Det var väldigt kul att vi kunde resa till detta land, som kanske försvinner under havet i framtiden när issmältningen höjer vattennivån.

### Bilden och kameran {#maldiverna-2011-1}

[FIGURE src="image/Maldiverna.jpg?width=700&height=204&crop-to-fit&area=0,0,10,0&sharpen" class="center" caption="Kuredo i 700x204, centrerad och croppad"]

Ön Kuredo är inte större än att man går runt den på en halvtimme. Bilden är tagen kl 10:30 den 31/3 på öns västra spets, där det var uppställt en vit gazebo för att hålla vigslar.

Kameran som användes var en Canon PowerShot SX30 IS med zoomen inställd på 10mm, vilket motsvarar ca 50mm på en fullformats kamera. Bländare f/5.6 och slutartid 1/1000s. Orginalbilden är i 4:3 format och har 4320x3240 pixlar. Filstorleken är 2.88MB.

### Test av art direction {#maldiverna-2011-2}
Här ska jag testa s.k. art direction med hjälp av `<picture>` taggen. Jag använder tre olika bilder beroende på enhetens storlek. När skärmen är bred (>= 450 pixlar), så används hela bilden fast jag har skurit bort den övre delen (20%) för att få en proportionerligare bild.

<a href="image/Maldiverna.jpg">
<picture>
    <source media="(min-width: 450px)" srcset="../image/Maldiverna.jpg?width=775&height=465&crop-to-fit&area=20,0,0,0&sharpen">
    <source media="(min-width: 300px)" srcset="../image/Maldiverna.jpg?width=450&height=600&crop-to-fit&area=20,0,0,20&sharpen">
    <img src="image/Maldiverna.jpg?width=300&height=300&crop-to-fit&area=23,50,27,0&sharpen" alt="Kuredo island">
</picture>
</a>

När skärmen blir mindre (< 450 pixlar men >= 300 pixlar) så visas en vertikalt stående bild med formatet 450x600 pixlar som är taget från mitten av bilden, men lite åt höger så att gazebon ej kommer med.

När skärmen blir < 300 pixlar så visas bara en liten bild med formatet 300x300 pixlar, på själva gazebon.

### Fullformat {#maldiverna-2011-3}

Här är bilden i den största möjliga storleken på denna sida, 775x581. Det är en krympning från originalbildens storlek på 4320x3240. Komprimeringen av bilden har inte ökats, men filstorleken är ändå bara 54KB mot originalbildens 2.88MB.

[FIGURE src="image/Maldiverna.jpg?width=775&height=581&sharpen" caption="Kuredo i formatet 775x581 pixlar"]
