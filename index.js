let counter = 0;
let placer = "O";
let items = updateArray();
let winner = checkWinner(items);
let currentScore;
let newScore;


function clicked(el) {
  counter++;
  if(document.getElementById("isWinner").innerHTML == '') {
    if (counter % 2 == 0) {
      placer = "O";
    } else {
      placer = "X";
    }
    if (el.value == " ") {
      el.value = placer;
    } else {
      el.value = el.value;
    }
    items = updateArray();
    winner = checkWinner(items);
  }
  if (winner == "X" || winner == "O") {
    document.getElementById("isWinner").innerHTML = winner + " is the Winner!";
  } else if (counter == 9 && winner == null) {
    document.getElementById("isWinner").innerHTML = "Tie";
  }
}
function updateArray() {
  let items = [
    [
      document.getElementById("a").value,
      document.getElementById("b").value,
      document.getElementById("c").value,
    ],
    [
      document.getElementById("d").value,
      document.getElementById("e").value,
      document.getElementById("f").value,
    ],
    [
      document.getElementById("g").value,
      document.getElementById("h").value,
      document.getElementById("i").value,
    ],
  ];
  return items;
}
function printArray(items) {
  items.forEach((element) => console.log(element));
}
function checkWinner(items) {
  //Diagnal
  if (items[0][0] == items[1][1] && items[0][0] == items[2][2]) {
    return items[0][0];
  } else if (items[0][2] == items[1][1] && items[0][2] == items[2][0]) {
    return items[0][2];
  }
  //columns
  else if (items[0][0] == items[1][0] && items[0][0] == items[2][0]) {
    return items[0][0];
  } else if (items[0][1] == items[1][1] && items[0][1] == items[2][1]) {
    return items[0][1];
  } else if (items[0][2] == items[1][2] && items[0][2] == items[2][2]) {
    return items[0][2];
  }
  //rows
  else if (items[0][0] == items[0][1] && items[0][0] == items[0][2]) {
    return items[0][0];
  } else if (items[1][0] == items[1][1] && items[1][0] == items[1][2]) {
    return items[1][0];
  } else if (items[2][0] == items[2][1] && items[2][0] == items[2][2]) {
    return items[2][0];
  }
}
function reset(el) {
  location.reload();
}
