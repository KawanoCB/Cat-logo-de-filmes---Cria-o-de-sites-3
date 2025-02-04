class Ator 
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Diretor {
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Filme {
    constructor(id, titulo, ano, genero, categoria, cartaz, direcao, atores, classificacao, avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.categoria=categoria;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.atores=atores;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }
}

getCard =  async () => {
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz=document.createAttribute("img");
    imgCartaz.setAttribute("class","card-img-topz");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody=document.createElement("div");
    cardBody.setAttribute("class","card-body");
    let hCardTitle=document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes=document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content: space-around;");
    let divGenero=document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoProducao=document.createElement("div");
    divAnoProducao.setAttribute("style","flex-grow:1;");
    let divClassificacao=document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoProducao);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());

    return card;
}

setBtnDetalhes = () => {
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes = appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes = setAttribute("id", this.id);
    this.btnDetalhes = setAttribute("class", "btnDetalhesFilmes");
}

getBtnDetalhes=()=>{
    return this.btnDetalhes
}

//através do método ‘getDetalhesFilme()’
//determinar uma ação que chamará a função  ‘detalhesFilme()’
//a partir do botão de detalhes existente em cada item da lista de filmes.

