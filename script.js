let you = 0;
let comp = 0;
let draw = 0;
let output = document.querySelector(".output");
function clicked(){
    console.log("click")
}
const compchoice = () =>{
    let choice = ["Stone","Paper","Scissors"];
    let math = Math.floor(Math.random() *3);
    return choice[math];
}
const winner = (win) =>{
    if(win){
        output.innerText = "You Win";
        you++;
        output.style.backgroundColor = "#FFD700"
        output.style.fontSize = "25px"
        output.style.color = "white"
        document.querySelector(".you").innerText = you
        desingOfOutput();
    }
    else{
        output.innerText = "You Loss";
        comp++;
        output.style.backgroundColor = "#8B0000"
        output.style.fontSize = "25px"
        output.style.color = "white"
        document.querySelector(".comp").innerText = comp
    }
}
let playgame = (choiceClass) =>{
    let compchoice1 = compchoice();
    console.log(compchoice1 + choiceClass)

  if(compchoice1 === choiceClass){
    document.querySelector(".output").innerText = "Match Draw";
    output.style.backgroundColor = "#808080"
        output.style.fontSize = "25px"
        output.style.color = "white"
        draw++;
        document.querySelector(".draw").innerText = draw
  }
  else{
    win = true;
    if(choiceClass === "Stone"){
      win =  compchoice1 === "Paper" ? false : true;
    }
    else if(choiceClass === "Paper"){
      win =  compchoice1 === "Scissors" ? false : true;
    }
    else{   
    win = compchoice1 === "Stone" ? false : true;
    }
   winner(win)
  }
}
let choices = document.querySelectorAll("#choice")
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const choiceClass = choice.getAttribute("class");
        playgame(choiceClass);
    })
})
