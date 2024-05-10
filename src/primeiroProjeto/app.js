//variaveis
let element = document.querySelector('h1').textContent = 'Contador'
let botao = document.querySelector('button')
botao.addEventListener('click', somaUm)

function somaUm() {
    console.log('clicou rapaiz')
    let h2Element = document.querySelector('h2')
    let value = parseInt(h2Element.textContent)
    let newValue = value + 1
    h2Element.textContent = newValue

    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    console.log(r, g, b)

    if(newValue > value) {
        h2Element.style.color = `rgb(${r}, ${g}, ${b})`
    }
} 