function pokeGet(id){

  var description

  $.ajax({
    method: "GET",
    url: `http://pokeapi.co/api/v1/pokemon/${id}/`
  }).done(function(data){
    description = data.descriptions[0].resource_uri
    console.log(data);
    if(data.types[1]){
      $('#pokeBin').append(
        `<div class="pokeCard">
          <h5>${data.name}</h5>
          <p>${data.types[0].name}, ${data.types[1].name}</p>
        </div>`
      )
    } else {
      $('#pokeBin').append(
        `<div class="pokeCard">
          <h5>${data.name}</h5>
          <p>${data.types[0].name}</p>
        </div>`
      )
    }

    descriptionGet(description)
  })

}

function descriptionGet(description){
  $.ajax({
    url: `http://pokeapi.co${description}`
  }).done(function(data){
    $(".pokeCard").last().append(
      `<p>${data.description}</p>`
    )
  })
}
