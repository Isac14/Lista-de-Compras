// Pegando os botões
const add = document.querySelector("#btnAdd");
const clean = document.querySelector("#btnClean");

// Pegando a div que abriga os itens adicionados
const divItem = document.querySelector(".divItens");
const form = document.querySelector("#formItens");

// Adicionando itens na lista
add.addEventListener("click", function () {
    if (form.value == "") {
        alert(
            "Escreva o nome do item que deseja adicionar a lista de compras!"
        );
    } else {
        let item = form.value;
        divItem.innerHTML += `<p><li>${item}</li></p>`;
        form.value = "";
    }
});

// Limpando a lista de itens
clean.addEventListener("click", function () {
    divItem.innerHTML = "";
});

// Desabilitando a tecla Enter
form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});
