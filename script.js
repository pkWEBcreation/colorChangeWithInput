let input1 = document.getElementById("text").value;
let input2 = document.getElementById("box1").value;
let input3 = document.getElementById("box2").value;
let submit = document.getElementById("submit");

let text = document.getElementById("text1");
let box1 = document.getElementById("box11");
let box2 = document.getElementById("box21");

function change() {
    
    let input1 = document.getElementById("text").value;
    let input2 = document.getElementById("box1").value;
    let input3 = document.getElementById("box2").value;
    
    text.style.color = " " + input1   
    box1.style.backgroundColor = " " + input2
    box2.style.backgroundColor = " " + input3
}
