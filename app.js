// http://54.218.118.137/
$(document).ready(function(){

  $('button').click(function(){

    $.ajax({
      method: "GET",
      url: "http://pokeapi.co/api/v1/pokemon/1/"
    })

    .done(function(data){
      console.log(data);
      $('#pokeBin').append(
        `<div class="pokeCard">
          <p>${data.name}</p>
        </div>`
      )
    })

    $.ajax({
      url: "http://pokeapi.co/api/v1/description/4/"
    }).done(function(data){
      console.log(data);
      console.log(data.description);
      $(".pokeCard").append(
        `<p>${data.description}</p>`
      )
    })

  })

})
