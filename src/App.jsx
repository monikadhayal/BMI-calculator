import { useState } from "react";
import AppComponent from "./AppComponet.jsx";

function App() {
  const [Height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [BMI,  setBMI] = useState(0);
  const [result,setResult] = useState(0);
  const [s,setS] = useState(false);
  
  const calculateBMI = () => {
    setBMI(Math.round(Weight / Math.pow(Height / 100, 2)));
    const a=Math.round(Weight / Math.pow(Height / 100, 2));
  //  return Math.round( Weight / Math.pow(Height/100, 2));

  if(a <= 18){
    setResult("Underweight");
  }else if (a > 18 && a < 25){
    setResult("Normalweight");
  }else{
    // setResult(console.log("Overweight"));
    setResult("Overweight");
  }
  };

  return (
    <div className="w-screen h-screen bg-black ">
      <h1 className="text-4xl text-white flex justify-center font-semibold ">
        BMI-Calculater
      </h1>
      {/* <h2>{Height}</h2> */}
      <div className="flex flex-col  justify-center border border-blue-600 text-white font-sembold pl-52 pr-52">
        <label htmlFor="weight" className="block mb-2">
          Weight (kg)
        </label>
        <input
          className="w-full border p-2 text-black"
          type="number"
          placeholder="Enter weight"
          id="weight"
          // onClick={increase}

          // onClick={()=>setCounter(counter+1)}
          // onClick={()=>{
          //   setCounter(counter+1)
          //   console.log("a");
          // }}

          onChange={(e) => {
            // console.log(e);
            // console.log(e.target);
            // console.log(e.target.value);
            setWeight(e.target.value);
          }}
          // value={Weight}
        />

        <label htmlFor="height" className="block mb-2">
          Height (cm)
        </label>
        <input
          className="w-full border p-2 text-black"
          type="number"
          placeholder="Enter weight"
          id="height"
          // value={Height}
          onChange={(e) => {
            setHeight(e.target.value);
            // console.log(e.target.value);
          }}
        />
        {/* let flag ="false"; */}
        <button className=" hover:bg-blue-600 bg-blue-500  p-2  m-4 rounded"
          // type="submit" 
          onClick={() => {
            //  const result = calculateBMI();
            // setBMI(result);
            setS(true);
            calculateBMI();
          }}
        >
          Calculate BMI
          
        </button>
        {/* logical operator */}
        {s && <p>Your BMI is : {BMI}</p>}    
        {/* ternary op */}
       
        {s? `Category: ${result}`: " "}
       {/* {bata na kutti kamini} */}
      </div>
      <AppComponent/>
    </div>
  );
}

export default App;


