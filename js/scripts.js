// Business



// player one
function PlayerOne(num){
this.num = num;
var numArray = [];
numArray.push(num)
}




// playertwo
function PlayerTwo(numArray2){
this.numArray2 = [];
}








// User
$(document).ready(function(event){

  $(".playerinputOne").submit(function(event){
    event.preventDefault();
    var num = Math.floor((Math.random() * 6) + 1);
    var newPlayer = new PlayerOne(num);

  // var randomNum =
  console.log(num);
  console.log(newPlayer);
});

  $("form.playerinputTwo").submit("button#roll2");
  var randomNum2 = Math.floor((Math.random() * 6) + 1);

  $("form.playerinputOne").submit("button#hold1");


  $("form.playerinputTwo").submit("button#hold2");


});
