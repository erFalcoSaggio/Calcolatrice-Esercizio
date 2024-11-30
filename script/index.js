let currentInput = '';  // Numero corrente
let previousInput = ''; // Numero precedente (per il calcolo)
let operator = '';      // Operatore (+, -, *, /)
let history = [];       // Storia dei calcoli

// Aggiunge un numero a currentInput
function appendNumber(number) {
    // Se l'input corrente è un risultato e l'utente sta iniziando un nuovo calcolo
    if (currentInput === '0' || currentInput === '') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    document.getElementById('display').innerText = currentInput;
}

// Imposta l'operatore
function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); // Esegui il calcolo se c'è già un numero precedente
    }
    operator = op;
    previousInput = currentInput;
    currentInput = ''; // Pulisce il display per il nuovo numero
}

// Esegui il calcolo
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    // Calcoli basati sull'operatore
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Errore: Divisione per zero!');
                result = 'Errore';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }
    
    document.getElementById('display').innerText = currentInput;

    // Aggiungi il calcolo alla storia
    addToHistory(previousInput, operator, currentInput, result);
}

// Aggiunge il calcolo alla lista della storia
function addToHistory(prev, op, current, result) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    
    // Mostra l'intera operazione: input1 + input2 = risultato
    historyItem.innerText = `${prev} ${op} ${current} = ${result}`;
    historyList.appendChild(historyItem);
    history.push(`${prev} ${op} ${current} = ${result}`);
}

// Pulisce il display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').innerText = '0';
}
