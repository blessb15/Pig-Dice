//business
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
var comp = $("#replace").text();
if (comp === "Computer"){
  document.getElementById("roll2").disabled = true;
  document.getElementById("hold2").disabled = true;
}
console.log(comp)

// User

// player 1
document.getElementById("roll2").disabled = true;
var numArray1 = [];
var numArray2 = [];

$(".buttonroll1").submit(function(event){
  event.preventDefault();
  var num = Math.floor((Math.random() * 6) + 1);
  numArray1.push(num);

  if (num > 1) {
    $("#turntotal1").text(numArray1);
  } else if (num === 1){
    alert("You got a One. No points added, Player 2 roll.");
    numArray1.splice(0, numArray1.length)
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
    $("#turntotal1").text(numArray1);
  }
});

$(".buttonhold1").submit(function(event){
  event.preventDefault();
  var myResult = numArray1;
  myResult.forEach(function(num){
    sum += num;
    });
    if (sum >= 100){
    alert("Player 1 Wins");
    location.reload();
    }
  $("#outputtotal1").text(sum)
  numArray1.splice(0, numArray1.length)
  document.getElementById("roll1").disabled = true;
  document.getElementById("roll2").disabled = false;
  $("#turntotal1").text(numArray1);
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
  numArray2.push(num);


  if (num > 1) {
    $("#turntotal2").text(numArray2);
  } else if (num === 1){
    alert("You got a One. No points added, Player 1 roll.");
    numArray2.splice(0, numArray2.length)
    document.getElementById("roll2").disabled = true;
    document.getElementById("roll1").disabled = false;
    $("#turntotal2").text(numArray2);
  }
});

$(".buttonhold2").submit(function(event){
  event.preventDefault();
  var myResult = numArray2;
  myResult.forEach(function(num){
    sum2 += num;
  });
    if (sum2 >= 100){
    alert("Player 2 Wins");
    location.reload();
  }
  $("#outputtotal2").text(sum2)
  numArray2.splice(0, numArray2.length)
  document.getElementById("roll2").disabled = true;
  document.getElementById("roll1").disabled = false;
  $("#turntotal2").text(numArray2);
});

//computer player
$(".computerButton").submit(function(event){
  event.preventDefault();
  function visitPage(){
        window.location='index2.html';
    }
  // document.getElementById("roll2").disabled = true;
  // document.getElementById("hold2").disabled = true;
  console.log(Computer)
});
console.log(comp);
