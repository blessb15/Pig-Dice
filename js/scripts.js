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
var sum = 0;
var sum2 = 0;

if (sum >= 25){
  alert("Player 1 Wins");
  sum = 0;
  sum2 =0;
}

if (sum2 >= 25){
  alert("Player 2 Wins");
  sum = 0;
  sum2 =0;
}

// player 1

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
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
    $("#turntotal1").text(numArray);
  }
});

$(".buttonhold1").submit(function(event){
  event.preventDefault();
  var myResult = numArray;
  myResult.forEach(function(num){
    sum += num;
    });
    if (sum >= 100){
    alert("Player 1 Wins");
    location.reload();
    }
  $("#outputtotal1").text(sum)
  numArray.splice(0, numArray.length)
  document.getElementById("roll1").disabled = true;
  document.getElementById("roll2").disabled = false;
  $("#turntotal1").text(numArray);
});


/// end
///
///
///
///
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
    document.getElementById("roll2").disabled = true;
    document.getElementById("roll1").disabled = false;
    $("#turntotal2").text(numArray);
  }
});

$(".buttonhold2").submit(function(event){
  event.preventDefault();
  var myResult = numArray;
  myResult.forEach(function(num){
    sum2 += num;
  });
    if (sum2 >= 100){
    alert("Player 2 Wins");
    location.reload();
  }
  $("#outputtotal2").text(sum2)
  numArray.splice(0, numArray.length)
  document.getElementById("roll2").disabled = true;
  document.getElementById("roll1").disabled = false;
  $("#turntotal2").text(numArray);

});
