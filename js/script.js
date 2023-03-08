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


