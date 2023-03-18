function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin");
    const score = {red:0,blue:0,green:0,yellow:0};
    setTimeout(() => {
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    const minTime = 10;
    const maxTime = 15;
    const redTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
    const blueTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
    const greenTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
    const yellowTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
  
    console.log("Race100M results:");
    console.log(`Red: ${redTime} seconds`);
    console.log(`Blue: ${blueTime} seconds`);
    console.log(`Green: ${greenTime} seconds`);
    console.log(`Yellow: ${yellowTime} seconds`);
  
    const times = {red: redTime, blue: blueTime, green: greenTime, yellow: yellowTime};
    const sortedColors = Object.keys(times).sort((a,b) => times[a]-times[b]);
    const firstColor = sortedColors[0];
    const secondColor = sortedColors[1];
    score[firstColor] += 50;
    score[secondColor] += 25;
  
    console.log(`New score:`, score);
    console.log(`${firstColor} won the race and scored 50 points.`);
    console.log(`${secondColor} came second and scored 25 points.`);
  
    setTimeout(() => {
      LongJump(score, callbackFnc);
    }, 1000);
  }
  
  function LongJump(score, callbackFnc) {
    const colors = ['red', 'yellow', 'green', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    score[randomColor] += 150;
  
    console.log(`New score:`, score);
    console.log(`${randomColor} won the long jump and scored 150 points.`);
  
    setTimeout(() => {
      HighJump(score, callbackFnc);
    }, 1000);
  }
  
  function HighJump(score, callbackFnc) {
    const color = prompt("What colour secured the highest jump?");
    if (color === null || color === "" || !["red", "yellow", "green", "blue"].includes(color.toLowerCase())) {
      console.log("Event was cancelled");
      callbackFnc(score);
      return;
    }
    score[color.toLowerCase()] += 100;
    console.log(`New score:`, score);
    console.log(`${color} won the high jump and scored 100 points.`);
  
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort(([,a],[,b]) => b-a);
    console.log("Final score:");
    sortedScores.forEach(([color, points], index) => {
      const place = index + 1;
      console.log(`${color} came ${place}${place===1?"st":place===2?"nd":place===3?"rd":"th"} with ${points} points.`);
    });
  }
  
  OpeningCeremony((score) => {
    console.log("All events completed!");
  });