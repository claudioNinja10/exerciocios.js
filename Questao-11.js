function questao11(){
    let carro = {
        marca: 'H10',
        modelo: 'H10',
        ano: 2021
    }
    console.log(`marca: ${carro.marca}\nmodelo: ${carro.modelo}\nano: ${carro.ano}`)
    carro.cor = 'Branco'
    console.log(`marca: ${carro.marca}\nmodelo: ${carro.modelo}\nano: ${carro.ano}\ncor: ${carro.cor}`)
    delete carro.ano
    console.log(`marca: ${carro.marca}\nmodelo: ${carro.modelo}\ncor: ${carro.cor}`)
}
