var imc

function calcular() {
    var alturacm = parseFloat(dados.altura)
    var alturaM = (alturacm / 100)
    var peso = parseFloat(dados.peso)
    imc = peso / (alturaM * alturaM)
    coment()
    document.getElementById('IMC').innerHTML = imc.toFixed(2)
}
function coment(){
    if (imc < 17) {
        document.getElementById('IMCcoment').innerHTML = ' Muito Abaixo do Peso'
    }
    else if (imc > 17 && imc <= 18.49) {
        document.getElementById('IMCcoment').innerHTML = ' Abaixo do Peso'
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        document.getElementById('IMCcoment').innerHTML = ' Peso Normal'
    }
    else if (imc >= 15 && imc <= 29.99) {
        document.getElementById('IMCcoment').innerHTML = ' Acima do Peso'
    }
    else if (imc >= 30 && imc <= 34.99) {
        document.getElementById('IMCcoment').innerHTML = ' Obesidade I'
    }
    else if (imc => 35 && imc <= 39.99) {
        document.getElementById('IMCcoment').innerHTML = ' Obesidade II (severa)'
    }
    else if (imc => 40) {
        document.getElementById('IMCcoment').innerHTML = ' Obesidade III (mórbida)'
    }
}
calcular()