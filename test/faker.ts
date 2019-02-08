import { fakerBr, validateBr } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {
  it('Faker To generate any data', () => {
    expect(fakerBr.cep()).to.exist;
    // expect(fakerBr.cnpj()).to.exist;
    expect(fakerBr.cpf()).to.exist;
    // expect(fakerBr.currency()).to.exist;
    // expect(fakerBr.inscricaoestadual()).to.exist;
    // expect(fakerBr.percentage()).to.exist;
    expect(fakerBr.rg()).to.exist;
    expect(fakerBr.placa()).to.exist;
    expect(fakerBr.telefone()).to.exist;
    // expect(fakerBr.time()).to.exist;
    expect(fakerBr.titulo()).to.exist;
  });


  it('Faker CEP', () => {
    const cep = fakerBr.cep();
    expect(validateBr.cep(cep)).to.be.true;
  });
  it('Faker CNPJ', () => {
    const cnpj = fakerBr.cnpj();
    expect(validateBr.cnpj(cnpj)).to.be.true;
  });
  it('Faker CPF', () => {
    const cpf = fakerBr.cpf();
    expect(validateBr.cpf(cpf)).to.be.true;
  });
  it('Faker RG', () => {
    const rg = fakerBr.rg();
    expect(validateBr.rg(rg)).to.be.true;
  });
  it('Faker PLACA', () => {
    const placa = fakerBr.placa();
    expect(validateBr.placa(placa)).to.be.true;
  });
  it('Faker Telefone', () => {
    const telefone = fakerBr.telefone();
    expect(validateBr.telefone(telefone)).to.be.true;
  });
  it('Faker celular', () => {
    const celular = fakerBr.celular();
    expect(validateBr.celular(celular)).to.be.true;
  });
  // it('Faker Time', () => {
  //   const time = fakerBr.time();
  //   expect(validateBr.time(time)).to.be.true;
  // });
  it('Faker Titulo', () => {
    const titulo = fakerBr.titulo();
    expect(validateBr.titulo(titulo)).to.be.true;
  });

  it('Faker Moeda', () => {
    const currency = fakerBr.currency();
    const currencyNumber = fakerBr.currencyNumber();
    // expect(validateBr.currency(currency)).to.be.true;
    expect(validateBr.currency(currencyNumber)).to.be.true;
  });

  it('Faker Others', () => {

    // const inscricaoestadual  = fakerBr.inscricaoestadual();
    // expect(validateBr.inscricaoestadual(inscricaoestadual)).to.be.true;

    // const percentage  = fakerBr.percentage();
    // expect(validateBr.percentage(percentage)).to.be.true;
  });

});