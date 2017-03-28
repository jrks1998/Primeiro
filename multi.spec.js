const Code = require('code');

const Lab = require('lab');

const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 1 e 3 deve ser 4', (done) {

   Code.expect(multi(1, 3)).to.equal(5);
   done();

});
