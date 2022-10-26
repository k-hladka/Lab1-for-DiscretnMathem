let A = document.getElementById('A');
let B = document.getElementById('B');
let C = document.getElementById('C');

let form = document.querySelector('form');
let select = document.querySelector('select');
let div = document.querySelector('div');

callFunctions();

form.addEventListener('click', function (){
    callFunctions();
});

//Об'єднання
function getAllValues(masA, masB){
    let mas = [];
    for(let i=0, index=0; i<masA.length; i++)
        if(mas.indexOf(masA[i])===-1)
            mas[index++] = masA[i];

    for(let j=0, index=mas.length; j<masB.length; j++)
        if(mas.indexOf(masB[j])===-1)
            mas[index++]=masB[j];

    return mas;
}

function callFunctions(){
    let masA = A.value.split(',');
    let masB = B.value.split(',');
    switch (select.selectedIndex) {
        case 0:
            C.value = getAllValues(masA, masB);
            div.style.backgroundPosition = '0 0';
            break;
    }
}
