function multi(x, y) {
  if (!x || !y)
    return { message: 'parametros faltando'};
  return x + y;
}

module.exports = { multi };
