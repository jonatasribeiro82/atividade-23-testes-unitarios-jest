// Funções básicas da calculadora tipadas com number
export function soma(a: number, b: number): number {
    return a + b;
}

export function subtracao(a: number, b: number): number {
    return a - b;
}

export function multiplicacao(a: number, b: number): number {
    return a * b;
}

export function divisao(a: number, b: number): number | string {
    // Tratando a divisão por zero
    if (b === 0) {
        return "Erro: não é possível dividir por zero";
    }
    return a / b;
}