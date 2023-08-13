export function centavosParaReais(centavos: string) {
  const reais = (parseInt(centavos) / 100).toFixed(2)
  return reais.replace('.', ',') // Formatação para "X,XX"
}
