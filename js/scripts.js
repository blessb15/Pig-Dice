// Business



// player one
function PlayerOne(num){
this.num = num;
}




// playertwo
function PlayerTwo(num2){
  this.num2 = num2;
  var numArray = [];
  numArray.push(num2)
}








// User
$(document).ready(function(event){

    var numArray = [];

  $(".playerinputOne").submit(function(event){
    event.preventDefault();

    var num = Math.floor((Math.random() * 6) + 1);

    numArray.push(num);

    console.log(numArray);

    if (num > 1) {
      $("#turntotal1").text(numArray);
    } else if (num === 1){
      alert("You got a One. No points added, Player 2 roll.");
      $(".playerinputOne").hide();
    }
});









  $(".btn .btn-danger").submit(function(event){;
  event.preventDefault();

  var num2 = Math.floor((Math.random() * 6) + 1);
  var newPlayer2 = new PlayerTwo(num2);

  console.log(num2);
  console.log(newPlayer2);
});
  $("form.playerinputOne").submit("button#hold1");


  $("form.playerinputTwo").submit("button#hold2");


});
