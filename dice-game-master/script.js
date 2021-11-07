const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = "dice" + 6 + ".png";
const secondDiceImage = "dice" + 6 + ".png";

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
  if(last){
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
total=firstRandomNum+secondRandomNum
  console.log(last.value,total)
  if(last.value=='above'&&total>7){
    console.log('You Won')
  }
  else if(last.value=='below' &&total<7){
    console.log('You Won')
  }
  else if(last.value=='equal'&&total==7){
    console.log('You Won')
  }
  else{
    console.log('You Lost')
  }
  // if (last) {
  //   total = firstRandomNum + secondRandomNum;
  //   console.log(last.value,total);
  //   last.checked = false;
  //   last.value=undefined
  // } else {
  //   console.error("this is an empty check");
  // }
}
else{
  console.log('please check the checkbox')
}
});



