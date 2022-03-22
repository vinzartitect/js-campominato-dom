// selezioniamo il bottone dall html
let btn = document.getElementById('btn');

// selezioniamo la select dall html
let select = document.getElementById('scelte');

// selezioniamo la griglia dall html
let grid = document.getElementById('grid');

// creazione del box interno alla griglia
let box = document.createElement('div');

// array di numeri casuali da 1 a 100
let array = [];

// array per le bombe
let arrayBombe = [];

// array 16 bombe
let sediciBombe = [];

// conteggio click
let conteggioClick = 0;

// al click del bottone vogliamo cambiare la griglia in base alla difficoltà
btn.addEventListener('click', function() {

    // reset del contenuto interno della griglia per nuova partita 
    grid.innerHTML = '';
    

  
    // a seconda del value della select, imposto il numero di celle
    let numeroCelle;

    if (select.value == "diff_uno" ) {
        numeroCelle = 100;
    } else if (select.value == "diff_due" ) {
        numeroCelle = 81;
    } else {
        numeroCelle = 49;
    }

    

    array = [];
    // creazione ciclo for per numeri random
    for (y = 1; y < numeroCelle + 1; y++) {
        array.push(y);
    }

    function shuffle( array ) {
        return array.sort( () => Math.random() - 0.5 );
    }

    array = shuffle(array);
    console.log(array);



    arrayBombe = [];
    sediciBombe = [];
    // generare le bombe in base alla difficoltà
    // le bombe saranno sempre 16
    for ( k = 0; k < numeroCelle; k++) {
        arrayBombe.push(k);
    }

    console.log( `le bombe sono: ${ arrayBombe }` );
    arrayBombe = shuffle( arrayBombe );
    console.log( `le bombe sono: ${ arrayBombe }` );

    for ( bombe = 1; bombe <= 16; bombe++ ) {
        sediciBombe.push(arrayBombe[bombe]);
    }

    console.log( `le bombe sono: ${ sediciBombe }` );
    console.log( `le bombe sono: ${ sediciBombe.sort(function(a, b){return a-b}) } ` );



    // creo ciclo for per svilupare i box interni alla griglia
    for (let i = 0; i < numeroCelle; i++) {

        let grid = document.getElementById('grid');

        let box = document.createElement('div');

        // incolliamo let box e il suo contenuto all'interno del div con id=grid in html
        grid.appendChild(box);

        // aggiungo la class box_X in base al numero di celle
        if (numeroCelle == 100) {
            box.classList.add('box_1')
            box.id = array[i];
        } else if (numeroCelle == 81) {
            box.classList.add('box_2')
            box.id = array[i];
        } else {
            box.classList.add('box_3')
            box.id = array[i];
        } 

        // aggiungo il testo dei numeri in senso continuo, non random
        box.innerHTML = `<span>${array[i]}</span>`;

        conteggioClick = 0;

        // funzione al click
        box.addEventListener('click', function () {
            
            console.log( this.innerHTML);

            if ( sediciBombe.includes( parseInt(this.innerText) ) ){
                this.classList.add('bomba');

                // for ( let b = 0; b < arrayBombe.length; b++) {
                //     document.getElementById(arrayBombe[b]).classList.add('bomba');
                // }                

                alert(`hai perZo ah aaah! hai cliccato ${conteggioClick} volte prima di perdere, peccato!`);
                window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            } else {
                this.classList.add('clicked');

                // aumento del click
                // equival conteggioClick = conteggioClick + 1 ;
                conteggioClick++;
            }



            if ( conteggioClick == ((numeroCelle+1)-arrayBombe[bombe]) ) {
                alert(`wow sei un dragone! hai cliccato ${conteggioClick}!`);
                window.location = "https://www.youtube.com/watch?v=04854XqcfCY";
            } 

        });

    }
    
});