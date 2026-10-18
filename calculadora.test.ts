import { soma, subtracao, multiplicacao, divisao } from './calculadora';

// Testes unitários diretos e simples
test('deve somar dois numeros corretamente', () => {
    expect(soma(2, 3)).toBe(5);
});

test('deve subtrair o segundo numero do primeiro', () => {
    expect(subtracao(10, 4)).toBe(6);
});

test('deve multiplicar os dois numeros', () => {
    expect(multiplicacao(3, 4)).toBe(12);
});

test('deve dividir o primeiro numero pelo segundo', () => {
    expect(divisao(10, 2)).toBe(5);
});

test('deve retornar mensagem de erro ao tentar dividir por zero', () => {
    expect(divisao(10, 0)).toBe("Erro: não é possível dividir por zero");
});