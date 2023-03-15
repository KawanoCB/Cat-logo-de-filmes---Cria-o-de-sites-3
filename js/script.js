/*
let ator = new Ator(1, "JOHN WAYNE");
console.log(ator);

let diretor = new Diretor(1, "Alfred Hitchcock");
console.log(diretor);

let direcao = [
    new Diretor(1, "Lana Wachowski"),
    new Diretor(2, "Lilly Wachowski")
];

let elenco =[
    new Ator(1, "Keanu Reeves"),
    new Ator(2, "Carrie-Anne Moss"),
    new Ator(3, "Laurence Fishburne"),
    new Ator(4, "Joe Pantoliano"),
    new Ator(5, "Hugo Weaving"),
    new Ator(6, "Antony Ray Parker"),
];

let sinopse = "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.";
let cartaz = "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg";

let filme = new Filme(
    1, "The Matrix",
    1999,
    genero,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
);
console.log(filme); 
*/

let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if (inputBuscarFilme.ariaValueMax.length > 0){
        console.log(inputBuscarFilme.value);
    }
    return false;
}

btnBuscarFilme.onclick = () => {
        if(inputBuscarFilme.value.length > 0){
            fetch("https://www.omdbapi.com/?apikey=448e074e&s="+inputBuscarFilme.value, {mode: "cors"})
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
            })
        }
        return false;
}

btnBuscarFilme.onclick = async () => {
    if (inputBuscarFilme.value.length > 0){
        let filmes = new Array();
            fetch("https://www.omdbapi.com/?apikey=448e074e&s="+inputBuscarFilme.value)
            .then((resp) => resp.json())
            .then((resp) => {
                resp.Search.forEach((item) => {
                    console.log(item);
                    let filme = new Filme(
                        item.imdbID,
                        item.Tilte,
                        item.Year,
                        null,
                        null,
                        null,
                        null,
                        null
                    );
                    filmes.push(filmes);
                });
            });
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) =>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilmes(filme.id);
            }
        });
    }
}

let detalhesFilmes = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=448e074e&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
        //Instanciar objeto da classe filme 
        //Chamar metodo para gerar card com detalhes do filme
        //Ocultar div #lista-filmes
    });
    console.log(resp);
}



