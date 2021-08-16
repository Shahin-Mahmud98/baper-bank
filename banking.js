// // handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function(){
//     const depositInput =document.getElementById('deposit-input');
// })  

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    depositTotal.innerText = depositAmount;

    // clear the deposit input field

    depositInput.value = '';
})























































































































