const gC = Number.parseFloat(prompt('Введите градусы в Цельсиях'));
function fromC(gC) {
    gF = (9/5) * gC +32;
    return gF;
}

alert(`Градусы в Фаренгейтах: ${fromC(gC).toFixed(2)}, градусы в Цельсиях: ${gC}`);


// function nameHello(name) {
//     console.log(`Привет, ${name}`);
// }
// const userName = prompt('Введите имя')
// nameHello(userName)