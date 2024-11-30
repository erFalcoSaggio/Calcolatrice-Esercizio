let op = '';
operazione = '';

function live(n) {
    let live2 = document.getElementById('live2');
    let live = document.getElementById('live');

    if (n == '+') {
        live1.innerText += n;
        op++;
        operazione += '+';
    } else if (n == '-') {
        live1.innerText += n;
        op++;
        operazione += 'so';
    }
    else if (n == '*') {
        live1.innerText += n;
        op++;
        operazione += 'mo';
    }
    else if (n == '%') {
        live1.innerText += n;
        op++;
        operazione += 'di';
    }
    else if (op >= 1) {
        live.innerText += n;
    }  
    else  if (!isNaN(n)){
        live2.innerText += n;
    }
    console.log(operazione)
}


function calcola() {
    // prendo i valori
    let live = document.querySelector('#live').textContent;
    let live2 = document.querySelector('#live2').textContent;

    // metto in int
    console.log(live + operazione + live2);
    
    
}

function reset() {
    let live = document.getElementById('live');

    live.innerText = '‎'; // rimette il carattere vuoto
}