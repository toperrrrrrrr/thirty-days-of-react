import React from "react";

export default function Dir() {
   return (
      <div className="container">
         <div className="row">
            <div className="col">
               <a href="/Sisyphus">
                  <button className="btn btn-primary m-2">Sisyphus</button>
               </a>
               <a href="/Dashboard">
                  <button className="btn btn-primary m-2">Dashboard</button>
               </a>
            </div>
         </div>
      </div>
   );
}
