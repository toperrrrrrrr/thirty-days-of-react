import React, { useState } from "react";
import Title from "../components/Title";

export default function Esignature() {
   const [date, setDate] = useState("");
   const [name, setName] = useState("");


   document.body.style.background = "#1C212A";
   document.body.style.color = "#D4D4D4  ";

   return (
      <div className="container text-center">
         <Title text={name} />
         <Title classes={"text-uppercase"} text={date} />
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            fuga, quis odio alias quibusdam tempora veritatis explicabo porro!
            Sequi aliquam quod dolores, placeat accusamus labore beatae possimus
            recusandae commodi soluta?
         </p>




         <footer>
            <input
               type="date"
               name="date"
               id="date"
               className="m-2"
               value={date}
               onChange={(e) => setDate(e.target.value)}
            />
            <input
               type="text"
               name="date"
               id="date"
               className="m-2"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </footer>
      </div>
   );
}
