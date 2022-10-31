

function add(a, b, callback) {
    console.log(`${a} va ${b} larning yig\'ingisi ${a + b}.`);
    callback();
}

function display() {
    console.log(`Bu qator natijadan so'ng ishlidi!`);
}

add(3, 4, display);