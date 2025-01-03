import { useState } from "react";

export default function Massage() {
  const [result, setResult] = useState("");
  const [massage, setMassage] = useState(false);

  return (
    <div>
      <button>{}</button>
      <button
        className="text-white hover:bg-blue-400 bg-blue-600 p-2 m-2 "
        onClick={() => {
          //   if (massage == false) {
          //     setResult("Hello!");
          //   } else {
          //     setResult("Hello!");
          //   }

          if (massage == false) {
            setMassage(true);
            setResult("Hello!");
          } else {
            setMassage(false);
            setResult("");
          }
        }}
      >
        {" "}
        {massage ? "hide mag" : "show msg"}{" "}
      </button>

      {result && <p className="text-white"> {result} </p>}
    </div>
  );
}
