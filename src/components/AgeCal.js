import React, {useState } from 'react';
//  import AgeCal from Components

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthDate = new Date(birthdate); // convert birthDate -> Date object
    const today = new Date();              // get current date
const yearDiff =today.getFullYear()-birthDate.getFullYear();
const monthDiff =today.getMonth()-birthDate.getMonth();
const dayDiff =today.getDate()-birthDate.getDate();

let ageYear=yearDiff;
let ageMonth=monthDiff;
let ageDay=dayDiff;

if(dayDiff<0){
    const lastMonth = new Date(today.getFullYear,today.getMonth-1,birthDate.getDate)
    ageMonth-=1;
    ageDay  = Math.floor((today - lastMonth) /(24*60*60*1000))

}
if(monthDiff<0){
    ageYear-=1
    ageMonth+=12
}
// let ageInMilliseconds = today - birthDate;

// const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
// ageInMilliseconds -= years * (365.25 * 24 * 60 * 60 * 1000);

// const months = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
// ageInMilliseconds -= months * (30.44 * 24 * 60 * 60 * 1000);

// const days = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

// setAge({ ageYear });
// setAge(ageMonth);
// setAge(ageDay)
// set calculated age 


setAge(
    `Your age is ${ageYear} years, ${ageMonth} months, and ${ageDay} days`
  );
// setAge({
//         years: ageYear,
//         months: ageMonth,
//         days: ageDay,
// });
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>
        Enter your birthdate:
        <input
          type="date"
        //   value={birthDate}
          onChange={(e) => setBirthdate(e.target.value)}
          max="9999-12-31"
          min="0000-01-01"
        />
      </label>
      {/* button to trigger age calculate function*/}
      <button onClick={calculateAge}>Calculate Age</button> 
      {age !== null && <p>: {age} years</p>}
    </div>
  );
}

export default App;
