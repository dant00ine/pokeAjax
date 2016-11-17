// http://54.218.118.137/imgs/1
$(document).ready(function(){
  console.log("document ready");

  $('button').click(function(){

    var starter = Math.floor(Math.random()*9 + 1)

    pokeGet(starter)

  })
})
