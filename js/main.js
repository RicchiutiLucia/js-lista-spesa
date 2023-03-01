const listArray = [
    'Aglio',
    'Olio',
    'Cipolla',
    'Prezzemolo',
    'Pomodori',
    'Sale',
    'Patate',
    'Formaggio',
    'Pepe',
    'Riso',
    'Cozze',
    'Zucchine',
    'Uova',
];

const listaSpesa = document.querySelector('#lista');

let i = 0;
while (i < listArray.length){
    listaSpesa.innerHTML += `<li>${listArray[i]}</li>`
    console.log(listArray);
    i++;
}


