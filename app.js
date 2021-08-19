function getPinNumber(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+'';
    const pinStringLength = pinString.length;

    if(pinStringLength==4){
        return pin;
    }else{
        return getPinNumber();
    }
}
// generate pin section
document.getElementById('pin-button').addEventListener('click', generatePin);
function generatePin(){
    document.getElementById('show-pin').value = getPinNumber();

}
// calculator section
document.getElementById('key-pad').addEventListener('click', keyPadClicked);
function keyPadClicked(event){
    const keyNumber = (event.target.innerText);
    const inputNumber = document.getElementById('show-keyNumber');
    if(isNaN(keyNumber)){
        inputNumber.value = '';
    }else{
        const prevNumber = inputNumber.value;
        const newNumber = prevNumber+keyNumber;
        inputNumber.value = newNumber;
    }
    
} 
// test pin number
document.getElementById('test-pin').addEventListener('click', verifyPin);
function verifyPin(){
    const generatedPin = document.getElementById('show-pin').value;
    const typedPin = document.getElementById('show-keyNumber').value;

    const matched = document.getElementById('matched');
    const notMatched = document.getElementById('notMatched');    

    if(generatedPin==typedPin){
        matched.style.display = 'block';
        notMatched.style.display = 'none';
    }else{
       notMatched.style.display = 'block';  
       matched.style.display = 'none';
    }
}