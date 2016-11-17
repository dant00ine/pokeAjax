function pokeGet(id){

  var description

  $.ajax({
    method: "GET",
    url: `http://pokeapi.co/api/v1/pokemon/${id}/`
  }).done(function(data){
    description = data.descriptions[0].resource_uri
    console.log("Description:");
    console.log(description);
    $('#pokeBin').append(
      `<div class="pokeCard">
        <p>${data.name}</p>
      </div>`
    )
    console.log("first description console log");
    console.log(description);
    descriptionGet(description)
  })

}

function descriptionGet(description){
  $.ajax({
    url: `http://pokeapi.co${description}`
  }).done(function(data){
    console.log(data);
    console.log(data.description);
    $(".pokeCard").last().append(
      `<p>${data.description}</p>`
    )
  })
}
