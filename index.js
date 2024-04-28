let counter = 0;
let placer = "O"; // X starts the game (since it increments first in `clicked`)
let items = updateArray();
let winner = checkWinner(items);

function clicked(el) {
  if (el.value == " " && document.getElementById("isWinner").innerHTML == '') {
    counter++;
    placer = (counter % 2 === 0) ? "O" : "X";
    el.value = placer;
    items = updateArray();
    winner = checkWinner(items);

    if (winner) {
      document.getElementById("isWinner").innerHTML = winner + " is the Winner!";
    } else if (counter === 9) {
      document.getElementById("isWinner").innerHTML = "Tie";
    }
  }
}

function updateArray() {
  return [
    [document.getElementById("a").value, document.getElementById("b").value, document.getElementById("c").value],
    [document.getElementById("d").value, document.getElementById("e").value, document.getElementById("f").value],
    [document.getElementById("g").value, document.getElementById("h").value, document.getElementById("i").value]
  ];
}

function checkWinner(items) {
  const lines = [
    // Rows
    [items[0][0], items[0][1], items[0][2]],
    [items[1][0], items[1][1], items[1][2]],
    [items[2][0], items[2][1], items[2][2]],
    // Columns
    [items[0][0], items[1][0], items[2][0]],
    [items[0][1], items[1][1], items[2][1]],
    [items[0][2], items[1][2], items[2][2]],
    // Diagonals
    [items[0][0], items[1][1], items[2][2]],
    [items[0][2], items[1][1], items[2][0]]
  ];

  for (let line of lines) {
    if (line[0] === line[1] && line[1] === line[2] && (line[0] === 'X' || line[0] === 'O')) {
      return line[0];
    }
  }

  return null;
}

function reset() {
  location.reload();
}
