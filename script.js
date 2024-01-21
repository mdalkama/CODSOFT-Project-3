let inputBox = document.querySelector("#input-box");

let btn = document.querySelectorAll(".btn");
let string = ''
btn.forEach(element =>{
    element.addEventListener("click", (a) =>{
        if(a.target.innerHTML == "="){
            string = String(eval(string));
            inputBox.value = string;
        }
        else if(a.target.innerHTML == 'AC'){
            string = '';
            inputBox.value = string;
        }
        else if(a.target.innerHTML == 'Del'){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }
        else if(a.target.innerHTML == '+' ){
            string += '+';
            inputBox.value = string;
        }
        else if(a.target.innerHTML == '−' ){
            string += '-';
            inputBox.value = string;
        }
        else if(a.target.innerHTML == '÷' ){
            string += '/';
            inputBox.value = string;
        }
        else if(a.target.innerHTML == '×' ){
            string += '*';
            inputBox.value = string;
        }
        else{
            string += a.target.innerText;
            inputBox.value = string;
        }

    });
});
const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 1200;
for(let i = 0; i < numberOfColorBoxes; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox);
}
