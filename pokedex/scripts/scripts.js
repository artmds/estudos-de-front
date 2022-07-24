var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
  e.preventDefault();


  // Pegando as informações da API
  let urlForm = 'https://pokeapi.co/api/v2/pokemon/'
  let name = document.getElementById('name')
  urlForm = urlForm + this.name.value;
  urlForm = urlForm.toLocaleLowerCase();

  let resposta = document.getElementById('content');

  let img = document.getElementById('imgPokemon')

  let html = ''
  //Tratando as informações
  fetch(urlForm) 
    .then(resposta => resposta.json())
    .then(function(data){
      console.log(data)
      html = 'Nome: ' + formatText(data.name) + '<br>';
      html = html + 'Tipo: ' + formatText(data.types[0].type.name);
      resposta.innerHTML = html


      img.innerHTML = "<img src = '"+ data.sprites.front_default +"' ><img src = ' " + data.sprites.back_default +" '>"
    })
    
    .catch(function(err){
      if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
        html = 'Pokémon não encontrado! :('
      }else{
        html = 'Erro: ' + err;
      }
      resposta.innerHTML = html;
    })

});



function formatText(val){
  return val[0].toUpperCase() + val.substr(1);
}