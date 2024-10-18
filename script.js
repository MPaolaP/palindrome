const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");



btn.addEventListener("click", () => {
    const textInput = input.value;
    if(textInput === ""){
        alert("Please input a value");
    }else{
        const newText = textInput.split(/[^a-zA-Z0-9]/).join('').toLowerCase().split("");

        
        for(let i = 0; i < newText.length; i++){
            if(newText[i] !== newText[newText.length - i - 1]){
result.innerHTML = `<b>${textInput}</b> is not a palindrome`;
return;
    }else{
        result.innerHTML = `<b>${textInput}</b> is a palindrome`;
        }
    } 
    
 }

});