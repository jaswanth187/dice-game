const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = "dice" + firstRandomNum + ".png";
const secondDiceImage = "dice" + secondRandomNum + ".png";

document.querySelectorAll("img")["0"].setAttribute("src", firstDiceImage);
document.querySelectorAll("img")["1"].setAttribute("src", secondDiceImage);

let dicebtn = document.getElementById("dicebtn");

// checkbox here
var last;
document.addEventListener("input", (e) => {
  if (e.target.getAttribute("name") == "check") {
    if (last) last.checked = false;
  }
  e.target.checked = true;
  last = e.target;
});
// dice logic
dicebtn.addEventListener("click", () => {
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  // const userinp= document.getElementsByClassName('check')
  // userinp.value()
  const firstDiceImage = "dice" + firstRandomNum + ".png";
  const secondDiceImage = "dice" + secondRandomNum + ".png";

  document.querySelectorAll("img")["0"].setAttribute("src", firstDiceImage);
  document.querySelectorAll("img")["1"].setAttribute("src", secondDiceImage);

  document.addEventListener("input", (e) => {
    if (e.target.getAttribute("name") == "check") {
      if (last) {
        last.checked = false;
        // last.value=undefined
      }
    }
    e.target.checked = true;
    last = e.target;
  });

  if (last) {
    total = firstRandomNum + secondRandomNum;
    console.log(last.value,total);
    if (last == "above" && total > 7) {
      console.log("You won", total);
    }

    last.checked = false;
    last.value=undefined
  } else {
    console.error("this is an empty check");
  }
});


