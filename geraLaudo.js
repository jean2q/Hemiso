
    var dados = window.sessionStorage
    const sugest = document.getElementById("sugestao_clinica")

    //DADOS PACIENTE

    function preencher (dados){ //preenche dados de campos com o mesmo ID no formulário e no laudo

        chaves = Object.keys(dados)
        valores = Object.values(dados)

        for (i in chaves){
            if (document.getElementById(chaves[i]) != null){
            document.getElementById(chaves[i]).innerHTML = valores[i]

            if (valores[i] == 'false'){
                document.getElementById(chaves[i]).innerHTML = 'Não'
            }
            else if (valores[i] == 'true'){
                document.getElementById(chaves[i]).innerHTML = 'Sim'
            }
        }
        }
    }

    preencher(dados)

    // Formata data

    dataCol = new Date(dados.dataCol)
    dataLib = new Date(dados.dataLib)

    dataColFormat = dataCol.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    dataLibFormat = dataLib.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    document.getElementById('dataCol').innerHTML = dataColFormat
    document.getElementById('dataLib').innerHTML = dataLibFormat

    document.getElementById('altura').innerHTML = dados.altura/100

    // Atribui o sexo conforme status de dados.sexo, se é falso é masculino, se verdadeiro feminino

    if (dados.sexo == 'false'){
        document.getElementById('sexo').innerHTML = "Masc."
    }
    else
    {
        document.getElementById('sexo').innerHTML = "Fem."
    }


    // RELACIONA VALORES DE REFERÊNCIA COM IDADE E SEXO DO PACIENTE
    if (dados.tipoIdade == 'anos'){
    if (dados.idade <= 12 && dados.idade >= 6) //se for menor ou igual que 12 anos e maior ou igual 6
    {
        var valorRef = {
            ID: 'de 6 a 12 anos',
            refHemacias: {min: 3.9, max: 5.1},
            refHb: {min: 11, max: 14},
            refHt: {min: 35, max: 45}, 
            refVCM: {min: 77, max: 95},
            refHCM: {min: 25, max: 33},
            refCHCM: {min: 31, max: 37}, 
            refLeuc: {min: 5, max: 13},
            refNeut: {min: 2, max:8},
            refLinf: {min: 1, max: 5},
            refMono: {min: 0.2, max: 1},
            refEosi: {min: 0.1, max: 1},
            refBaso: {min: 0.02, max: 0.1}, 
            refPlaq: {min: 180, max: 400},
        }
    }
    else if (dados.idade < 6 && dados.idade >= 2) //sse for menor do que 6 e maior ou igual a 1 ano
    {
        var valorRef = {
            ID: 'de 2 a 5.99 anos',
            refHemacias: {min: 3.9, max: 5.1}, 
            refHb: {min: 11.1, max: 14.1},
            refHt: {min: 34, max: 40}, 
            refVCM: {min: 75, max: 87},
            refHCM: {min: 24, max: 30},
            refCHCM: {min: 31, max: 37}, 
            refLeuc: {min: 5, max: 15},
            refNeut: {min: 1.5, max:8},
            refLinf: {min: 6, max: 9},
            refMono: {min: 0.2, max: 1},
            refEosi: {min: 0.1, max: 1},
            refBaso: {min: 0.02, max: 0.1}, 
            refPlaq: {min: 200, max: 450},
        }
    }
    else if (dados.idade < 2)
    {
        var valorRef = {
            ID: 'menor que 2 anos',
            refHemacias: {min: 3.9, max: 5.1}, 
            refHb: {min: 11.1, max: 14.1},
            refHt: {min: 30, max: 38}, 
            refVCM: {min: 72, max: 84},
            refHCM: {min: 24, max: 30},
            refCHCM: {min: 31, max: 37}, 
            refLeuc: {min: 6, max: 16},
            refNeut: {min: 1, max:7},
            refLinf: {min: 3.5, max: 11},
            refMono: {min: 0.2, max: 1},
            refEosi: {min: 0.1, max: 1},
            refBaso: {min: 0.02, max: 0.1}, 
            refPlaq: {min: 200, max: 550},
        }
    }

    else if (dados.sexo == 'false' && dados.idade > 12) //se for masculino adulto maior que 12 anos
    {
        var valorRef = {
            ID: 'MASCULINO ADULTO',
            refHemacias: {min: 4.5, max: 5.5},
            refHb: {min: 13, max: 17},
            refHt: {min: 40, max: 50},
            refVCM: {min: 83, max: 101},
            refHCM: {min: 27, max: 32},
            refCHCM: {min: 31.5, max: 34.6},
            refLeuc: {min: 4, max: 10},
            refNeut: {min: 2, max: 7},
            refLinf: {min: 1, max: 3},
            refMono: {min: 0.2, max: 1},
            refEosi: {min: 0.02, max: 0.5},
            refBaso: {min: 0.02, max: 0.1},
            refPlaq: {min: 150, max: 400},
        }
    }

    else if (dados.sexo == 'true' && dados.idade > 12) //se for feminino adulto 
    {
        var valorRef = {
            ID: 'FEMININO ADULTO',
            refHemacias: {min: 3.8, max: 4.8},
            refHb: {min: 12, max: 15},
            refHt: {min: 36, max: 46},
            refVCM: {min: 83, max: 101},
            refHCM: {min: 27, max: 32},
            refCHCM: {min: 31.5, max: 34.6},
            refLeuc: {min: 4, max: 10},
            refNeut: {min: 2, max: 7},
            refLinf: {min: 1, max: 3},
            refMono: {min: 0.2, max: 1},
            refEosi: {min: 0.02, max: 0.5},
            refBaso: {min: 0.02, max: 0.1},
            refPlaq: {min: 150, max: 400},
        }
    }}

    else if (dados.tipoIdade == "meses") {

        if (dados.idade <= 1) //meses de 0 a 1
        {
            var valorRef = {
                ID: '0 A 1 MESES',//NÃO MUDEI OS VALORES ABAIXO
                refHemacias: {min: 3, max: 5.4}, //preenchido
                refHb: {min: 11.5, max: 16.5},
                refHt: {min: 33, max: 53}, 
                refVCM: {min: 92, max: 116},
                refHCM: {min: 30, max: 36},
                refCHCM: {min: 29, max: 37}, 
                refLeuc: {min: 5, max: 19},
                refNeut: {min: 3, max:9},
                refLinf: {min: 3, max: 16},
                refMono: {min: 0.3, max: 1},
                refEosi: {min: 0.2, max: 1}, 
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 210, max: 650},
            }
        }
        else if (dados.idade == 2) //meses 2
        {
            var valorRef = {
                ID: '2 MESES',//PREENCHIDO
                refHemacias: {min: 3.1, max: 4.3},
                refHb: {min: 9.4, max: 13},
                refHt: {min: 28, max: 42}, 
                refVCM: {min: 87, max: 103},
                refHCM: {min: 27, max: 33},
                refCHCM: {min: 27, max: 37}, 
                refLeuc: {min: 5, max: 15},
                refNeut: {min: 1, max: 5},
                refLinf: {min: 4, max: 10},
                refMono: {min: 0.4, max: 1.2},
                refEosi: {min: 0.1, max: 1},
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 210, max: 650},
            }
        }
        else if (dados.idade >= 3 && dados.idade < 11) //meses  MAIOR IGUAL A 3 OU MENOR QUE 11
        {
            var valorRef = {
                ID: '3 a 11 meses',//preenchido
                refHemacias: {min: 4.1, max: 5.3},
                refHb: {min: 11.1, max: 14.1},
                refHt: {min: 30, max: 40}, 
                refVCM: {min: 68, max: 84},
                refHCM: {min: 24, max: 30},
                refCHCM: {min: 30, max: 36}, 
                refLeuc: {min: 6, max: 18},
                refNeut: {min: 1, max:6},
                refLinf: {min: 4, max: 12},
                refMono: {min: 0.2, max: 1.2},
                refEosi: {min: 0.1, max: 1},
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 200, max: 550},
            }
        }
        else if (dados.idade >= 12 && dados.idade < 23) //DE 12 A 23 MESES
        {
            var valorRef = {
                ID: 'entre 1 ano e 2', //PREENCHIDO ok
                refHemacias: {min: 3.9, max: 5.1}, 
                refHb: {min: 11.1, max: 14.1},
                refHt: {min: 30, max: 38}, 
                refVCM: {min: 72, max: 84},
                refHCM: {min: 24, max: 30},
                refCHCM: {min: 31, max: 37}, 
                refLeuc: {min: 6, max: 16},
                refNeut: {min: 1, max:7},
                refLinf: {min: 3.5, max: 11},
                refMono: {min: 0.2, max: 1},
                refEosi: {min: 0.1, max: 1},
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 200, max: 550},
            }
        }
    }
    else if (dados.tipoIdade == "dias"){
        if (dados.idade <= 2) //idade menor que 2 dias
        {
            var valorRef = {
                ID: 'RECEM NASCIDO', //preenchido
                refHemacias: {min: 5, max: 7},
                refHb: {min: 14, max: 18},
                refHt: {min: 45, max: 75}, 
                refVCM: {min: 100, max: 120},
                refHCM: {min: 31, max: 37},
                refCHCM: {min: 30, max: 36}, 
                refLeuc: {min: 10, max: 26},
                refNeut: {min: 4, max:14},
                refLinf: {min: 3, max: 8},
                refMono: {min: 0.5, max: 2},
                refEosi: {min: 0.1, max: 1},
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 150, max: 450},
            }
        }
        else if (dados.idade >= 3 && dados.idade <= 29) //de 3 a 29 dias
        {
            var valorRef = {
                ID: 'de 3 dias a 29', //não mudei ainda
                refHemacias: {min: 3.9, max: 5.1},
                refHb: {min: 11, max: 14},
                refHt: {min: 35, max: 45}, 
                refVCM: {min: 77, max: 95},
                refHCM: {min: 25, max: 33},
                refCHCM: {min: 31, max: 37}, 
                refLeuc: {min: 5, max: 13},
                refNeut: {min: 2, max:8},
                refLinf: {min: 1, max: 5},
                refMono: {min: 0.2, max: 1},
                refEosi: {min: 0.1, max: 1},
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 180, max: 400},
            }
        }
        else if (dados.idade >= 30 && dados.idade <= 60) //de 1 a 2 meses
        {
            var valorRef = {
                ID: '0 A 1 MESES',//NÃO MUDEI OS VALORES ABAIXO
                refHemacias: {min: 3, max: 5.4}, //preenchido
                refHb: {min: 11.6, max: 16.5},
                refHt: {min: 33, max: 53}, 
                refVCM: {min: 92, max: 116},
                refHCM: {min: 30, max: 36},
                refCHCM: {min: 29, max: 37}, 
                refLeuc: {min: 5, max: 19},
                refNeut: {min: 1, max:6},
                refLinf: {min: 3, max: 16},
                refMono: {min: 0.3, max: 1},
                refEosi: {min: 0.2, max: 1}, 
                refBaso: {min: 0.02, max: 0.1},//TODOS IGUAIS
                refPlaq: {min: 210, max: 650},
            }
    }
    }
  
    function preencherVR (dados){ //preenche dados de campos com o mesmo ID no formulário e no laudo
    
        chaves = Object.keys(dados)
        console.log(chaves)
        valores = Object.values(dados)
        console.log(valores)

        valoresDentro = Object.values(valores[1])
        console.log('valores[1]', valores[1])
        console.log('valoresDentro', valoresDentro)
        
        console.log('chaves[1]', chaves[1])
        chavesDentro = Object.keys(valores[1])
        console.log('chaves dentro', chavesDentro)
       

    for (i in chaves){
        
            if (document.getElementById(chaves[i]+'.'+chavesDentro[0]) != null){
                document.getElementById(chaves[i]+'.'+chavesDentro[0]).innerHTML = valores[i].min
                document.getElementById(chaves[i]+'.'+chavesDentro[1]).innerHTML = valores[i].max
            }
        }
    }
    

    preencherVR(valorRef)

    // Cria um objeto contendo informações se há anemia
    var anemia = {
        status: null,
        tamanho: null,
        cor: null,
    }

    if (dados.hb < valorRef.refHb.min) //Verifica se há anemia
    {
        anemia.status = " ↓ anemia ";
        
        if (dados.VCM < valorRef.refVCM.min) //Verifica a classificação de acordo com o tamanho das celulas
        {
            anemia.tamanho = " ↓ microcítica "
        }
        else if (dados.VCM > valorRef.refVCM.max)
        {
            anemia.tamanho = " ↑ macrocítica "
        }
        else if (dados.VCM > valorRef.refVCM.min && dados.VCM < valorRef.refVCM.max)
        {
            anemia.tamanho = " normocítica "
        }
        
        if (dados.HCM < valorRef.refHCM.min) //Verifica a classificação de acordo com a cor das celulas
        {
            anemia.cor = " hipocrômica "
        }
        else if (dados.HCM > valorRef.refHCM.min && dados.HCM < valorRef.refHCM.max)
        {
            anemia.cor = " normocrômica "
        }
        
    }
    
    classificaAnemia()

    function classificaAnemia(){
        if (anemia.status != null){
            if (anemia.tamanho.indexOf("microcítica") >= 0 && anemia.cor.indexOf("hipocrômica") >= 0){
                sugest.innerText = ("Investigar possibilidade de anemia ferropriva, intoxicação por chumbo ou anemia sideroblástica. ")
            }
            else if (anemia.tamanho.indexOf("Normocítica") >= 0 && anemia.cor.indexOf("normocrômica") >= 0)
            {
                sugest.innerText = ("Possível anemia hemolítica, paciente em condição pós hemorragia ou nefropatias. ")
            }
            else if (anemia.tamanho.indexOf("Macrocítica"))
            {
                sugest.innerText = ("Investigar anemia megaloblástica, abuso de álcool e hepatopatias. ")
            }
        }
        else{
            sugest.innerText = ("Sem evidência de anemia. ")
        }
    }

    //Cria um objeto contendo informações sobre a série branca
    var serieBranca = {
        leuc:null,
        linf:null,
        neut:null,
        mono:null,
        eosi:null,
        baso:null,
    }



    if (dados.leuc > valorRef.refLeuc.max){
        serieBranca.leuc = "↑ leucocitose  "
        //Sem significado clínico de forma isolada
    }
    else if (dados.leuc < valorRef.refLeuc.min){
        serieBranca.leuc = "↓ leucopenia  "
        //Sem significado clínico de forma isolada
    }

    if (dados.linf > valorRef.refLinf.max){
        serieBranca.linf = "↑ linfocitose "
        sugest.innerText += " Linfocitose, sugestivo de infecção viral, investigar também neoplasias de linfopoese. "
    }
    else if (dados.linf < valorRef.refLinf.min){
        serieBranca.linf = "↓ linfopenia  "
        sugest.innerText += " Linfocitopenia, investigar doenças e fármacos imunossupressores, doença de Hodgkin e Lupus. "
    }

    if (dados.mono > valorRef.refMono.max){
        serieBranca.mono = "↑ monocitose "
        sugest.innerText += " Monocitose, investigar endocardite subaguda, tuberculose e brucelse, se persistente em idosos pode indicar leucemia mielomonocítica crônica. "
    }
    else if (dados.mono < valorRef.refMono.min){
        serieBranca.mono = "↓ monocitopenia "
        //Achado pouco incomum com pouca relevância clínica conforme Faillace cap 17 pg 270
    }
    
    if (dados.eosi > valorRef.refEosi.max){
        serieBranca.eosi = " ↑ eosinofilia "
        sugest.innerText += " Eosinofilia, processo alérgico ou parasitário. " 
    }
    else if (dados.eosi < valorRef.refEosi.min){
        serieBranca.eosi = " ↓ eosinopenia "
        //Sem significado clínico conforme Faillace cap 17 pg 270
    }
    
    if (dados.baso > valorRef.refBaso.max){
        serieBranca.baso = " ↑ basofilia "
        //Sem significado clínico conforme Faillace cap 17 pg 270
    }
    else if (dados.baso < valorRef.refBaso.min){
        serieBranca.baso = " ↓ basopenia "
        //Sem significado clínico conforme Faillace cap 17 pg 270

        
    }
    if (dados.neut > valorRef.refNeut.max){
        serieBranca.baso = " ↑ neutrofilia "
        sugest.innerText += " Neutrofilia, processo infeccioso ou inflamatório instaurado, outras causas possíveis: trauma, neoplasias, uso de corticoides ou intoxicações endógenas. "
    }
    else if (dados.neut < valorRef.refNeut.min){
        serieBranca.neut = " ↓ neutropenia "
        sugest.innerText += " Neutropenia, investigar uso de medicamentos quimioterápicos e doenças que danificam a medula óssea (hemopatias leucêmicas). "
    }

    //Preenche flags plaquetograma
    var plaquetograma = null

    if (dados.plac_cont > valorRef.refPlaq.max){
        plaquetograma = " ↑ trombocitose "
        sugest.innerText += " Trombocitose, fenômeno reacional, não representa em si uma doença hematologica, comum nos primeiros anos de vida, na anemia ferropênica e nas doenças inflamatórias crônicas, bem como em períodos pós-hemorrágicos. "
    }
    else if (dados.plac_cont < valorRef.refPlaq.min){
        plaquetograma = " ↓ trombocitopenia "
        sugest.innerText += " Trombocitopenia, possível consequência de quimioterapia e radioterapia, doenças infeccioasas graves, esplenomegalia e viroses febris. " 
    }

    if (plaquetograma != null){
        document.getElementById('plac_obs').innerHTML = plaquetograma
    }

    function preencherFlags(objeto, campo){
        let valuesObj = Object.values(objeto)
        console.log(valuesObj)
        for (i in valuesObj){
            if (valuesObj[i] != null){
                document.getElementById(campo).innerText += valuesObj[i]
            }
        }
    }
    
    preencherFlags(anemia, 'hem_obs')
    preencherFlags(serieBranca, 'leuc_obs')

