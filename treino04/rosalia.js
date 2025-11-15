document.getElementById('adicionar').addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("ingrediente");
    div.innerHTML = `
        <p>Ingrediente</p>
        <input type="text" placeholder="exemplo: trigo"> 

        <p>Preço</p>
        <input type="number" placeholder="3.69 = R$3.69"> 

        <p>Quantidade comprada (g)</p>
        <input type="number" placeholder="1500 = 1.5kg"> 
            
        <p>Quantidade Usada (g)</p>
        <input type="number" placeholder="300 = 300g">
        `
        document.getElementById("ingredientes").appendChild(div);
});
