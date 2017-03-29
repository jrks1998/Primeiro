const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { multi } = require('./multi');

lab.test('soma numeros inteiros', (done) => {

    Code.expect(multi(1, 3)).to.equal(4);
    Code.expect(multi(18, 51)).to.equal(69);
    done();
});

lab.test('somando numeros negativos', (done) => {

    Code.expect(multi(-8, -9)).to.equal(-17);
    done();
});

lab.test('expressão mal formada', (done) => {
    const r = multi();
    Code.expect(r.message).to.equal("parametros faltando")
    done();
});
