var ListadePeça = ["Filtro de Ar","Motor","Amortecedor"]
if (ListadePeça.length < 10){
    //É possivel cadastrar mais peças
    console.log("É possivel colocar mais peças na lista")
    } else {
    //Não é possivel cadastrar mais peças
        console.log("Não é possivel colocar mais peças na lista")
    }

let Peso = 50;55;
if(Peso.length < 100){
    //Não possui o peso necessario
    console.log("A peça deve ter no minimo 100g")
    } else {
    //Possui o peso necessario
        console.log("A peça possui o minimo de peso")
    }

let NomedePeça = "Motor"
if (NomedePeça.length > 3){
    //Quantidade necessaria de letras para o cadastro
    console.log("Nome de peça está adequado para o cadastro")
    } else if(NomedePeça.length ==0){
    //O nome de peça não pode estar vazio para o cadastro
        console.log("Não é possivel cadastrar sem um nome de peça")
    } else {
    //Não possui o necessario de letras para o cadastro
        console.log("O nome de peça não está adequado para o cadastro")
    }
    //= -> atribuição de valor -> Recebe ()
    //== -> verificação se os valores sao iguais -> é igual? (verifica se eh a msm coisa q ta escrita)
    //=== -> verificação se o valor e o tipo de valor são iguais (tanto como numero como em letra)

    // let idade = 23
    // if (idade == "23") esse so verifica se eh o msm 

    // let idade = "23"
    // if (idade === "23") Com aspas vira como se fosse letras



    // So é possivel em casos mais especificos, pois deve ser determinado todos os casos para a mensagem
switch(NomedePeça.length){
    Case 0:
    console.log("Não é possivel cadastrar sem um nome de peça")
    break;

    Case 1;
    Case 2;
    Case 3;
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")

    default:
        console.log("Nome da peça está adequado")
        break;
}