
function calcular(){
    let nome = document.querySelector('.nome')
    let notaPrimeiroBimestre = document.querySelector('.primeiraNota')
    let notaSegundoBimestre = document.querySelector('.segundaNota')
    let notaTerceiroBimestre = document.querySelector('.terceiraNota')
    let notaQuartoBimestre = document.querySelector('.quartaNota')
    let resultadoFinal = document.querySelector('.media')

    if (!nome.value || !notaPrimeiroBimestre.value || !notaSegundoBimestre || !notaTerceiroBimestre || !notaQuartoBimestre) return alert('Por Favor, preencha todos os campos')

    let primeiraNota = Number(notaPrimeiroBimestre.value)
    let segundaNota = Number(notaSegundoBimestre.value)
    let TerceiraNota = Number(notaTerceiroBimestre.value)
    let quartaNota = Number(notaQuartoBimestre.value)
    
    let notaFinal = (primeiraNota + segundaNota + TerceiraNota + quartaNota) / 4
    resultadoFinal.innerHTML = `Bem vindo(a) ${nome.value}.<br> Sua média foi ${notaFinal}`
}
