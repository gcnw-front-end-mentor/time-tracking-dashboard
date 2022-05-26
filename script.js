export {daily, weekly, monthly, jsonData}

// RETRIEVE AND STORE LOCAL JSON DATA
async function getJSON(){
    let response = await fetch('./data.json');
    let data = await response.json()
    jsonData = data;}

var jsonData = [];
getJSON();

// CHANGE HOURS FOR EACH ACTIVITY UPON CLICK
function updateHours(selection){
    let timeframe = selection.currentTarget.id;
    times.forEach(node => node.style.color = '');
    for(let i=0; i<lastHours.length;i++){
        lastHours[i].innerHTML = jsonData[i]['timeframes'][timeframe]['previous']+'hrs';
        currentHours[i].innerHTML = jsonData[i]['timeframes'][timeframe]['current']+'hrs';
    }
    selection.currentTarget.style.color = 'white';}

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
weekly.style.color = 'white';
const monthly = document.getElementById('monthly');
const times = [daily,weekly,monthly];
const lastHours = document.getElementsByClassName('lastHours');
const currentHours = document.getElementsByClassName('currentHours');

daily.addEventListener('click', updateHours);
weekly.addEventListener('click', updateHours);
monthly.addEventListener('click', updateHours);

