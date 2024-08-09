const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: false
};
// FUNÇÃO PARA OBTER A PLACA DO CARRO NO OBJETO
function obterPlaca(){
    console.log(carro.placa)
}
obterPlaca()

//FUNÇÃO PARA OBTER A CLASSE DO CARRO NO OBJETO
// function verificarClasses(){
//     console.log(carro.classes)
// }
// verificarClasses()

function verificarClasses(){
    if(carro.classes.length === 1){
        return carro.classes[0]
    }
    return carro.classes
}
console.log(verificarClasses());

// FUNÇÃO QUE VERIFICA A POTENCIA REAL DO CARRO E ELEVA AO QUADRADO SE FOR LUXO (TRUE)
function potenciaReal(){
    if(carro.luxo === true){
        console.log(Math.pow(carro.potencia,2));
    }else{
        console.log(carro.potencia);
    }
}
potenciaReal();

//FUNÇÃO QUE CRIA NOVA CLASSE 

// function adicionarNovaClasse(novaClasse){
//     const classesPernitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê']
//     const classes = carro.classes;

//     if (classes.length >= 3){
//         return 'esse carro não pode ter mais classes';
//     }
//     if(classesPernitidas.includes(novaClasse.toLowerCase())){
//         if(classes.includes(novaClasse)){
//             return `O carro já possui a classe ${novaClasse}.`;
//         }
//         classes.push(novaClasse)
//         return `Classe ${novaClasse} adicionada com sucesso`
//     }
    
// }

// console.log(adicionarNovaClasse('hatchback'))
// console.log(carro.classes)

// Supondo que o objeto carro esteja definido assim segundo momento

function adicionarNovaClasse(novaClasse) {
    const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê'];
    const classes = carro.classes;

    if (classes.length >= 3) {
        return 'Esse carro não pode ter mais classes.';
    }

    // Verifica se a novaClasse está na lista de classesPermitidas
    if (classesPermitidas.includes(novaClasse.toLowerCase())) {
        // Verifica se a classe já existe no carro
        if (classes.includes(novaClasse.toLowerCase())) {
            return `O carro já possui a classe ${novaClasse}.`;
        }

        // Adiciona a nova classe ao carro
        classes.push(novaClasse.toLowerCase());
        return `Classe ${novaClasse} adicionada com sucesso.`;
    } else {
        return `Classe ${novaClasse} não é permitida.`;
    }
}

// Testando a função
console.log(adicionarNovaClasse('hatchback')); // Classe hatchback adicionada com sucesso
console.log(carro); // ['sedan', 'suv', 'hatchback']

console.log(adicionarNovaClasse('cupê')); // Esse carro não pode ter mais classes.
console.log(carro); // ['sedan', 'suv', 'hatchback']

console.log(adicionarNovaClasse('crossover')); // Esse carro não pode ter mais classes.
console.log(carro);

//ATIVIDADE 5

function naoMaisLuxo(){
    if(!carro.estacionado){
        return `O carro Placa ${carro.placa} está estacionado`;
    }else if(!carro.luxo){
        return `O carro ${carro.placa} não é luxuoso`;
    }
}
const resultado = naoMaisLuxo()
console.log(resultado);
