/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - ((((((passo 6 - verificar se o body ja tem a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
        - passo 8 - trocar a imagem do botão e alterar para imagem sol)))))
*/

/* objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua*/

// - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botomAlterarTempo = document.getElementById("botom-alterar-tempo");

//- passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botom");

//- passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botomAlterarTempo.addEventListener("click", () => {


    //passo 6 - verificar se o body ja tem a classe do modo-escuro no body
    const modoEscuruEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuruEstaAtivo) {
        //passo 7 - trocar a imagem do botão de alterar tema pra sol
        body.classList.remove("modo-escuro");
        //passo 8 - trocar a imagem do botão e alterar para imagem sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); 

    } else {
        // passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //- passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});








