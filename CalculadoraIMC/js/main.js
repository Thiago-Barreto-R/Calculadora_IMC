let calc = document.querySelector('#calc').addEventListener('click', clicar)

function clicar() {
    let nome = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let res = document.querySelector('.caixaRes')

    if (nome !== '' && altura !== '' && peso !== '') {

        let valorIMC = (peso / (altura * altura)).toFixed(2)
        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = `voçê está Abaixo do Peso`
        } else if (valorIMC < 25) {
            classificacao = `Voçê está no Peso ideal, PARABÉNS`
        } else if (valorIMC < 30) {
            classificacao = `Voçê está com Obesidade Grau 1`
        } else if (valorIMC < 35) {
            classificacao = `Voçê está com Obesidade Grau 2`
        } else {
            classificacao = `Voçê está com Obesidade Grau 3`
        }

        res.textContent = `${nome} seu IMC é ${valorIMC} e ${classificacao}.`
    } else {
        res.textContent = 'Preencha os campos!!'
    }
}