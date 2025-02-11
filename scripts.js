// Cotação de moedas do dia
const USD = 5.78
const EUR = 5.97
const GBP = 7.16

//obtendo os elementos do formulário
const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
 // console.log(amount.value)
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") //atualiza o conteúdo "amount.value" por apenas números
})

//Captando o evento de submit (enviar) do formulário
form.onsubmit = (e) => {
  e.preventDefault()

  switch (currency.value) {
    case "USD" :
      convertCurrency(amount.value, USD, "US$")
    break
    case "EUR" :
      convertCurrency(amount.value, EUR, "€")
    break
    case "GBP" :
      convertCurrency(amount.value, GBP , "£")
    break
  }

  //console.log(currency.value)
}

//função para converter a moeda
function convertCurrency(amount, price, symbol) {
  //console.log(amount, price, symbol)
  try {
    //exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calcula o total
    //let total = String(amount * price).replace(".", ",") - substituindo  ponto por virgula
    let total = amount * price

    //FORMATAR O VALOR TOTAL
    total = formatCurrencyBRL(total).replace("R$", "")

    //exibe o resultado total
    result.textContent = `${total} Reais`

    //aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) {

    //remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

//formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
 return value.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL"
 })
}