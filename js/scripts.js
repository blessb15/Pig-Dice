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


var numArray = [];

$(".buttonroll1").submit(function(event){
  event.preventDefault();
  var num = Math.floor((Math.random() * 6) + 1);
  numArray.push(num);

  if (num > 1) {
    $("#turntotal1").text(numArray);
  } else if (num === 1){
    alert("You got a One. No points added, Player 2 roll.");
    numArray.splice(0, numArray.length)
    // $(".buttonroll1").hide();
    $("#turntotal1").text(numArray);
  }
});

$(".buttonhold1").submit(function(event){
  event.preventDefault();
  var sum = 0;
  var myResult = numArray;
  myResult.forEach(function(num){
    sum += num;
  });
  $("#outputtotal1").text(sum)
  numArray.splice(0, numArray.length)
  // $(".buttonroll1").hide();
  $("#turntotal1").text(numArray);
});


// player 2


$(".buttonroll2").submit(function(event){
  event.preventDefault();
  var num = Math.floor((Math.random() * 6) + 1);
  numArray.push(num);

  if (num > 1) {
    $("#turntotal2").text(numArray);
  } else if (num === 1){
    alert("You got a One. No points added, Player 1 roll.");
    numArray.splice(0, numArray.length)
    // $(".buttonroll1").hide();
    $("#turntotal2").text(numArray);
  }
});

$(".buttonhold2").submit(function(event){
  event.preventDefault();
  var sum = 0;
  var myResult = numArray;
  myResult.forEach(function(num){
    sum += num;
  });
  $("#outputtotal2").text(sum)
  numArray.splice(0, numArray.length)
  // $(".buttonroll1").hide();
  $("#turntotal2").text(numArray);

});
