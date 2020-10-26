
    var dados = window.localStorage


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
    if (dados.sexo == 'false' && dados.idade > 12) //se for masculino adulto
    {
        var valorRef = {
            ID: 'MASCULINO ADULTO',
            refHemacias: {min: 4.5, max: 5.5},
            refHb: {min: 13, max: 17},
            refHt: {min: 40, max: 50},
            refVCM: {min: 83, max: 101},
            refHCM: {min: 27, max: 32},
            refCHCM: {min: 39.5, max: 46},
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
            refCHCM: {min: 39.5, max: 46},
            refLeuc: {min: 4, max: 10},
            refNeut: {min: 2, max: 7},
            refLinf: {min: 1, max: 3},
            refMono: {min: 0.2, max: 1},
            refEosi: {min: 0.02, max: 0.5},
            refBaso: {min: 0.02, max: 0.1},
            refPlaq: {min: 150, max: 400},
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
        anemia.status = " ↓ anemia";

        if (dados.VCM < valorRef.refVCM.min) //Verifica a classificação de acordo com o tamanho das celulas
        {
            anemia.tamanho = " ↓ microcítica"
        }
        else if (dados.VCM > valorRef.refVCM.max)
        {
            anemia.tamanho = " ↑ macrocítica"
        }
        else if (dados.VCM > valorRef.refVCM.min && dados.VCM < valorRef.refVCM.max)
        {
            anemia.tamanho = " normocítica "
        }

        if (dados.HCM < valorRef.refHCM.min) //Verifica a classificação de acordo com a cor das celulas
        {
            anemia.cor = " ↓ hipocrômica"
        }
        else if (dados.HCM > valorRef.refHCM.min && dados.HCM < valorRef.refHCM.max)
        {
            anemia.cor = " normocrômica "
        }

    }

    console.log(anemia)


    //Cria um objeto contendo informações sobre a série branca
    var serieBranca = {
        leuc:null,
        linf:null,
        mono:null,
        eosi:null,
        baso:null,
    }

    if (dados.leuc > valorRef.refLeuc.max){
        serieBranca.leuc = "↑ leucocitose  "
    }
    else if (dados.leuc < valorRef.refLeuc.min){
        serieBranca.leuc = "↓ leucopenia  "
    }

    if (dados.linf > valorRef.refLinf.max){
        serieBranca.linf = "↑ linfocitose "
    }
    else if (dados.linf < valorRef.refLinf.min){
        serieBranca.linf = "↓ linfopenia  "
    }

    if (dados.mono > valorRef.refMono.max){
        serieBranca.mono = "↑ monocitose "
    }
    else if (dados.mono < valorRef.refMono.min){
        serieBranca.mono = "↓ monocitopenia "
    }
    
    if (dados.eosi > valorRef.refEosi.max){
        serieBranca.eosi = " ↑ eosinofilia "
    }
    else if (dados.eosi < valorRef.refEosi.min){
        serieBranca.eosi = " ↓ eosinopenia "
    }
    
    if (dados.baso > valorRef.refBaso.max){
        serieBranca.baso = " ↑ basofilia"
    }
    else if (dados.baso < valorRef.refBaso.min){
        serieBranca.baso = " ↓ basopenia"
    }
    
    console.log(serieBranca)

    //Preenche flags plaquetograma
    var plaquetograma = null

    if (dados.plac_cont > valorRef.refPlaq.max){
        plaquetograma = " ↑ trombocitose "
    }
    else if (dados.plac_cont < valorRef.refPlaq.min){
        plaquetograma = " ↓ trombocitopenia "
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
