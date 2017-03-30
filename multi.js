function multi(x, y) {
    if (x == 0 || y == 0)
    return x + y;
    if (!x || !y)
    return { message: 'parametros faltando'};
  return x + y;
}

module.exports = { multi };
