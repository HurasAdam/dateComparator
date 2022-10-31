//dateCompare//
function compare(){
    const day= parseInt(document.querySelector('#day').value);
    const month= parseInt(document.querySelector('#month').value);
    const year= parseInt(document.querySelector('#year').value);
    const day_2= parseInt(document.querySelector('#day_2').value);
    const month_2= parseInt(document.querySelector('#month_2').value);
    const year_2= parseInt(document.querySelector('#year_2').value);
    const resultBox=document.querySelector('#resultBox');
    const pickedDate=[];
    const pickedDate_2=[];
    pickedDate.push(day);
    pickedDate.push(month);
    pickedDate.push(year);
    pickedDate_2.push(day_2);
    pickedDate_2.push(month_2);
    pickedDate_2.push(year_2);
    
    let newDate= new Date(pickedDate[2],pickedDate[1]-1,pickedDate[0]);
    let newDate_2= new Date(pickedDate_2[2],pickedDate_2[1]-1,pickedDate_2[0]);

    if(newDate>newDate_2){
       return resultBox.textContent= `Greater date is: ${newDate}`
    }
    else if(newDate<newDate_2){
        return resultBox.textContent= `Greater date is: ${newDate_2}`
    }
    else{
        return resultBox.textContent= 'Please pick a date to compare';
    }
    }
const button = document.querySelector('#compareDateButton');
button.addEventListener('click',compare);


// is year leap//

function isLeap(){
    
    const isLeapBtn = document.querySelector('#isLeapBtn');
    const day= parseInt(document.querySelector('#day').value);
    const month= parseInt(document.querySelector('#month').value);
    const year= parseInt(document.querySelector('.isLeapInput').value);
    const day_2= parseInt(document.querySelector('#day_2').value);
    const month_2= parseInt(document.querySelector('#month_2').value);
    const year_2= parseInt(document.querySelector('#year_2').value);
    const resultBox=document.querySelector('#resultBox');
    
   if(year%4===0 &&year%100!==0){
    return resultBox.textContent= `rok: ${year} jest rokiem przestępnym`
 }
 else if(year%4!==0){
    return resultBox.textContent= `rok: ${year} nie jest rokiem przestępnym`
 }
else{
    console.log('podaj rok')
}
}
isLeapBtn.addEventListener('click',isLeap);

const inputs = document.querySelectorAll('input')
const resetBtn= document.querySelector('.resetBtn');
resetBtn.addEventListener('click',()=>{
inputs.forEach(input=>input.value='')
resultBox.innerHTML=''
});



//Clock//
/* eslint-disable no-unused-vars */

function showTime(){
    const currentDate= new Date();
    let hour= currentDate.getHours();
    let minutes= currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const display= document.querySelector('.display');
    let session= 'AM';

if(hour==0){
    hour=12
}
if(hour>12){
    hour=hour-12;
    session='PM'
}
    hour= (hour<10) ? '0'+hour:hour;
    minutes=(minutes<10) ? '0'+minutes:minutes;
    seconds=(seconds<10) ? '0'+seconds:seconds;

display.innerText= `${hour}: ${minutes}: ${seconds}: ${session}`
setTimeout(showTime,1000);
}
showTime();

