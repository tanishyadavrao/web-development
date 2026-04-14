let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.getElementById("resetBtn");
let newgamebtn = document.getElementById("newgmbtn");
let cgMode = document.getElementById("cgMode");

let turnX = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        console.log("winner", val1);
        winnermessage(val1);
      }
    }
  }
};
winnermessage = (winner) => {
  document.querySelector(".winnertxt").innerHTML =
    `player ${winner} is the winner`;
  document.querySelector(".msg").classList.remove("hide");
};
resetbtn.addEventListener("click", () => {
  document.querySelector(".msg").classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});
newgamebtn.addEventListener("click", () => {
  document.querySelector(".msg").classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});
let currentmode = "theme1";
let body = document.querySelector("body");
cgMode.addEventListener("click", () => {
  if (currentmode == "theme1") {
    body.classList.remove("theme1");
    body.classList.add("theme2");
    currentmode = "theme2";
  } else if (currentmode == "theme2") {
    body.classList.remove("theme2");
    body.classList.add("theme3");
    currentmode = "theme3";
  } else if (currentmode == "theme3") {
    body.classList.remove("theme3");
    body.classList.add("theme1");
    currentmode = "theme1";
  }
});
