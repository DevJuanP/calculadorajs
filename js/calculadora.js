window.addEventListener('load', () => {
    const display = document.querySelector('.calculatorDisplay');
    const keypadButtons = document.getElementsByClassName('keypadButton');

    const keypadButtonsArray = Array.from(keypadButtons);
    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            calculadora(button, display);
        });
    });
});

function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
            break
        case '=':
            operar(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function operar(display){
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button){
    if(display.innerHTML == 0) display.innerHTML='';
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = '0';
}