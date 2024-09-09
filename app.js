// comentário (duas barras)
// console.log(dados)

function pesquisar() {
    // Esta função é responsável por realizar uma pesquisa e exibir os resultados na página.

    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa)

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Informe um nome.</p>"
        return
    }

    // converte para minúsculas para comparar no if
    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada elemento (dado) do array 'dados'.
    // Para cada dado, cria um elemento HTML para exibir os resultados da pesquisa.
    for (let dado of dados) {
        
        // converte todas em minúsculas, para comparar
        // pode montar o laço (dado.titulo ou dado.descricao) nesta etapa, excluindo na etapa do if
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Verifica no console, se o conteúdo de título contém a string pesquisada
        console.log(titulo.includes(campoPesquisa))
        console.log(descricao.includes(campoPesquisa))

        // Condicional
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Cria uma div para cada resultado, com as informações do compositor.
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <table>
                    <td>
                        <p class="descricao-meta">
                            <a href=${dado.link} target="_blank" class="imagem-link">
                            <img src=${dado.imagem} width="250" height="300" alt="${dado.titulo}">
                            </a>
                        </p>
                    </td>
                    <td></td> <td>
                        <p>${dado.descricao}</p>
                    </td>
                </table>
            </div>
            `;
        }

    }

    // se não há resultados encontrados
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }    

    // Atribui o HTML gerado para a seção de resultados 
        section.innerHTML = resultados
}








