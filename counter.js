const cels = ['Neut', 'Eosi', 'Baso', 'Linf', 'Mono']
function counter(wbc) {
    const add = document.getElementById('increment' + wbc) //Declara algumas constantes pegando o id dos botões
    const sub = document.getElementById('decrement' + wbc)


    //Declara algumas variaveis de acordo com alguns campos
    let campoContador = document.getElementById(wbc.toLowerCase())
    let campoTotal = document.getElementById('total')
    let campoPorCento = document.getElementById(wbc.toLowerCase() + 'Porcento')


    add.addEventListener('click', function () { //incrementa os contadores do campo e do total para cada click
        campoContador.innerHTML++
        campoTotal.innerHTML++

        campoPorCento.innerHTML = ((campoContador.innerHTML / campoTotal.innerHTML) * 100).toFixed(2) //atualiza, a cada click, o valor da % correspondente do campo

        atualizaValores() //Chama a função para atualizar os valores em % dos outros campos, a cada click.
        alertCem()

    })

    sub.addEventListener('click', function () {
        //decrementa os contadores do campo e do total para cada click, exceto se o valor já for 0
        if (campoContador.innerHTML >= 1) {
            campoContador.innerHTML--
            campoTotal.innerHTML--
        } else {
            campoContador.innerHTML = 0
        }

        atualizaValores() //Chama a função para atualizar os valores em % dos outros campos, a cada click.
        alertCem()
    })

    function atualizaValores() {
        for (i in cels) { //Atualiza os valores de todos os campos de porcentagem, toda vez que qualquer um dos botões é acionado
            let campoPorCento = document.getElementById(cels[i].toLowerCase() + 'Porcento')
            let campoContador = document.getElementById(cels[i].toLowerCase())

            campoPorCento.innerHTML = ((campoContador.innerHTML / campoTotal.innerHTML) * 100).toFixed(2)

            if (isNaN(campoPorCento.innerHTML) == true) { //Verifica se o resultado será NaN (no caso de uma divisão por 0, por exemplo), se sim zera o valor
                campoPorCento.innerHTML = 0
            }
        }
    }
}

counter('Neut') //Chama as funções para contar os cliques
counter('Eosi')
counter('Baso')
counter('Linf')
counter('Mono')

const teclasCampo = [
    ['Neut', 'q', 'a'],
    ['Linf', 'w', 's'],
    ['Eosi', 'e', 'd'],
    ['Baso', 'r', 'f'],
    ['Mono', 't', 'g'],
]

document.addEventListener("keyup", function (event) {//Adiciona um EventListener para cada Iteração do loop abaixo
    for (i in teclasCampo) {//Percorre o array teclasCampo
        if (event.key == teclasCampo[i][1]) {
            //Cancela a ação default, se necessário
            event.preventDefault();
            //Ativa o botão como se fosse um click
            document.getElementById("increment" + teclasCampo[i][0]).click();
        }
        if (event.key == teclasCampo[i][2]) {
             //Cancela a ação default, se necessário
            event.preventDefault();
            //Ativa o botão como se fosse um click
            document.getElementById("decrement" + teclasCampo[i][0]).click();
        }
    }
})

const exporta = document.getElementById('export')
const reset = document.getElementById('reset')

reset.addEventListener('click', function () {
    for (i in cels){
        let campoPorCento = document.getElementById(cels[i].toLowerCase() + 'Porcento')
        let campoContador = document.getElementById(cels[i].toLowerCase())
        let campoTotal = document.getElementById('total')

        campoPorCento.innerHTML = 0
        campoContador.innerHTML = 0
        campoTotal.innerHTML = 0
    }
})

exporta.addEventListener('click', function () {
    sessionStorage.setItem("monoPorcento", document.getElementById('monoPorcento').innerHTML)
    sessionStorage.setItem("linfPorcento", document.getElementById('linfPorcento').innerHTML)
    sessionStorage.setItem("eosiPorcento", document.getElementById('eosiPorcento').innerHTML)
    sessionStorage.setItem("neutPorcento", document.getElementById('neutPorcento').innerHTML)
    sessionStorage.setItem("basoPorcento", document.getElementById('basoPorcento').innerHTML)
    sessionStorage.setItem("locked", true) //trava campos na contagem

    location.href = "./dadosPaciente.html"
})

function alertCem(){
    console.log('teste')
    let campoTotal = document.getElementById('total').innerHTML

    if (campoTotal % 100 == 0){
        alert('Você já contou '+campoTotal+' células.')
    }
}