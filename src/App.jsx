import React from "react";

function App(){
   
// (year,month,date,hour)=(2022,4,5,20)
let currDate=new Date().getHours();
let greeting = "";
const greetingcolor  = {};

if(currDate >= 1 && currDate < 12){
  greeting="Good Morning";
  greetingcolor.color = "olive";
} else if(currDate == 12){
  greeting="Good Noon";
  greetingcolor.color = "orange";
} else if(currDate > 12 && currDate < 19){
  greeting = "Good AfterNoon";
  greetingcolor.color = "gray";
} else {
  greeting = "Good Night";
  greetingcolor.color = "teal";
}

return (
  <>
    <div>
    <h1>Hello Sir, <span style={greetingcolor}>{greeting}</span></h1>
  </div>
  </>
)

}

export default App;