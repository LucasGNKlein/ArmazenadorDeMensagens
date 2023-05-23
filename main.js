const btnEl = document.querySelector(".btn"); // retorna o btn
const inputEl = document.querySelector("input"); // retorna o input
const messageEl = document.querySelector(".message"); // retorna o message
const errorEl = document.querySelector(".error"); // retorna o error

btnEl.addEventListener("click",displayMessage); // executando função ao clicar no btn  

//abaixo função executada ao clicar no btn

function displayMessage() {
    if(inputEl.value) {
        messageEl.textContent = inputEl.value;
        inputEl.value = " ";
    } else {
        errorEl.style.display = "block";
        setInterval(() => {
            errorEl.style.display = "none";
        }, 10000);
    }
}