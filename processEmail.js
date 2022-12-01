const processEmail = (mail) => {
    const loja = getLoja(mail.subject)
    const address = getAddress(mail.body)

    return { loja, address }
}

const getAddress = (body) => {
    const id = getBetween(body, '[PEDIDO #', ']')
    const data = getBetween(body, 'ENDEREÇO DE FATURAMENTO', 'Parabéns pela venda!').trim().split('\n')
    
    const address = {
        id,
        nome: data[0],
        rua: data[1],
        numero: data[2],
        complemento: data[3],
        bairro: data[4],
        cidade: data[5],
        estado: data[6],
        cep: data[7].replace(`-`, ``),
        telefone: data[8],
        email: data[9]
    }

    return address
}

const getLoja = (str) => {
    return getBetween(str, '[', ']')
}

const getBetween = (str, first, second) => {
    return str.split(first).pop().split(second)[0];
}

module.exports = {
    processEmail,
};
  