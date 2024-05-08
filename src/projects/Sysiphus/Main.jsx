import React from "react";
import "./res/styles.css";
import Mountain from "./res/imgs/BG.svg";
import Pushing from "./res/imgs/Pushing.svg";

export default function Main() {
   return (
      <>
         <div className="hero">
            <div className="bg">
               <img src={Mountain} alt="Mountain" className="imgs bg-mountain" />
               <img src={Pushing} alt="Pushing" className="imgs bg-push" />
         
            </div>
            
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h1 className="title">Sisyphus</h1>
                </div>
                <div className="col-6">
                <h1 className="title">Sisyphus</h1>
                </div>
              </div>
            </div>
         </div>

         <div className="section1"></div>
      </>
   );
}
