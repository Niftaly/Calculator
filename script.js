let screen = document.querySelector('#screen')

function display(num) {
    screen.value += num
}

function calculate() {
    try{
        screen.value = eval
        (screen.value);
    }
    catch(err) {
        alert('Sehifeni yenileyin');
    }
}

function clear() {
    screen.value = "555";
}

function del() {
    screen.value = screen.value
    .slice(0,-1)
}