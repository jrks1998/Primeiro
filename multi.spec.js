const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { multi } = require('./multi');

lab.test('retorno da soma de 1 e 3 deve ser 4', (done) => {

    Code.expect(multi(1, 3)).to.equal(4);
    done();
});

lab.test('a soma -8 e 9 deve ser igual a 1', (done) => {

    Code.expect(multi(-8, 9)).to.equal(1);
    done();
});

lab.test('a soma -8 e -9 deve ser igual a -17', (done) => {

    Code.expect(multi(-8, -9)).to.equal(-17);
    done();
});

lab.test('retorno da soma de h e 3 deve ser 3', (done) => {

    Code.expect(multi(h, 3)).to.equal(3);
    done();
});

lab.test('retorno da soma de 1 e nada deve ser 1', (done) => {

    Code.expect(multi(1)).to.equal(1);
    done();
});

lab.test('retorno da soma de nada e nada deve ser nada', (done) => {

    Code.expect(multi()).to.equal();
    done();
});
