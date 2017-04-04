function multi(x, y) {
    if (x == undefined || y == undefined)
    return { message: 'parâmetros faltando'};

    if (typeof x == 'string' || y == 'string')
    return { message: 'parâmetros inválidos'};

  return x + y;
}

module.exports = { multi };
