const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { multi } = require('./multi');

lab.test('numeros inteiros', (done) => {

    Code.expect(multi(1, 3)).to.equal(4);
    Code.expect(multi(0, 0)).to.equal(0);
    done();
});

lab.test('numeros negativos', (done) => {

    Code.expect(multi(-8, -9)).to.equal(-17);
    Code.expect(multi(-0, 60)).to.equal(60)
    done();
});

lab.test('expressão mal formada', (done) => {
    const r = multi();
    Code.expect(r.message).to.equal("parametros faltando")
    done();
});
