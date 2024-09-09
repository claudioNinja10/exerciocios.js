function questao13(){
    let cont = 1

    let numero_questao13 = Number(prompt('Digite um número inteiro: '))
    
    while(cont<=10){
        let tabuada = numero_ex13*cont
        console.log(numero_questao13+' x '+cont+' = '+tabuada)
        cont++
    }
}
