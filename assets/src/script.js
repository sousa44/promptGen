// elementos DOM

const tituloPrompt = document.getElementById("tituloPrompt");
const promptText = document.getElementById("promptText");
const salvarPrompt = document.getElementById("salvarPrompt");
const promptsArmazenados = document.querySelector(".promptsArmazenados");
// const promptsContainer = document.getElementById("prompts");


tituloPrompt.classList.add("fw-bold")

function pegarDados(titulo, prompt) {


    if (titulo === "" || prompt === "") {
        alert("Digite o prompt")

        return;

    }


    const div = document.createElement('div');


    div.classList.add("text-light", "border", "border-light", "mb-2", "p-2", "text-center", "rounded-1", "w-100");

    div.innerHTML = `

    <h5> ${titulo} </h5>

    <p>  ${prompt}  </p>
    
    `
    promptsArmazenados.appendChild(div)

    const prompts = JSON.parse(localStorage.getItem("prompts")) || [];

    prompts.push({
        titulo: titulo,
        prompt: prompt
    });

    localStorage.setItem("prompts", JSON.stringify(prompts));






}


salvarPrompt.addEventListener("click", (e) => {


    e.preventDefault()



    const titulo = tituloPrompt.value
    const prompt = promptText.value

    pegarDados(titulo, prompt)

    // limpar prompts

    tituloPrompt.value = "";
    promptText.value = "";


})

function carregarPrompts() {

    // localStorage.removeItem("prompts")
    const prompts = JSON.parse(localStorage.getItem("prompts")) || [];

    prompts.forEach(item => {

        const div = document.createElement("div");


        div.classList.add(
            "text-light",
            "border",
            "border-light",
            "mb-2",
            "p-2",
            "text-center",
            "rounded-1"
        );

        div.innerHTML = `
            <h5>${item.titulo}</h5>
            <p>${item.prompt}</p>
        `;

        promptsArmazenados.appendChild(div);



    });

}

carregarPrompts()

