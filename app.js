// http://54.218.118.137/imgs/1
$(document).ready(function(){
  console.log("document ready");

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
