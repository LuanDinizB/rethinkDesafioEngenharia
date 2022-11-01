const pessoas = [
    {name: "Fabiana Araújo", age: 33 },
    {name: "Gabriel Gomes", age: 25 },
    {name: "Fernando Henrique", age: 17 },
    {name: "Ana Luiza", age: 2 },
    {name: "Geralda do Nascimento", age: 93 },
    {name: "Miguel Souza", age: 70 },
    {name: "Antonio Miguel", age: 69 }
]

 
// -------------------------------------------------------------------
// 3)

function buscarPeloNome(nome){
   return pessoas.find((pessoa) => pessoa.name === nome);
}
//console.log(buscarPeloNome("Gabriel Gomes"));


// --------------------------------------------------------------------
// 4)


const nomesRetornados = pessoas.map(function(e){
    return e.name;
})

//bonus:

  const nomesRetornadosBonus = pessoas.map(function(e){
    const split = e.name.split(' ');
    return split[0];
  });

// -------------------------------------------------------------------
// 5)

const inserirId = pessoas.map(function(element, id){
    id = id+1;
    element = {id, ...element}
    return element;
})
console.log(inserirId)

// -------------------------------------------------------------------
// 6)

function filtrar(element) {    
    return element.age > 18;
}
const resposta = pessoas.filter(filtrar);

// -------------------------------------------------------------------
// 7)

const mediaIdades = pessoas.reduce(
  function(soma, atual){      
  return (soma + atual.age);
}, 0)/pessoas.length;
