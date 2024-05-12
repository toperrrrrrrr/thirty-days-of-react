import React from "react";
import "./res/styles.css";

export default function Main() {
   return (
      <>
         <div>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-3 nav-center">
                     <h1 className="nav-text ">Home</h1>
                  </div>
                  <div className="col-3 nav-center">
                     <h1 className="nav-text">The Myth</h1>
                  </div>
                  <div className="col-3 nav-center">
                     <h1 className="nav-text">Interpretations</h1>
                  </div>
                  <div className="col-3 nav-center">
                     <h1 className="nav-text">Modern Applications</h1>
                  </div>
               </div>
            </div>
         </div>
         <div className="hero ">
            <div className="katawan">
               <div className="container-fluid container-hero">
                  <div className="row row-fit">
                     <div className="col-sm-6 col-title">
                        <div className="mx-5 px-5 text-contain">
                           <h1>ˈsɪsɪfəs </h1>
                           <h1 className="title">SISYPHUS</h1>
                           <p className="subtitle">
                              Pushing upwards, brings us closer to the
                           </p>
                           <p className="subtitle">stars.</p>
                        </div>
                     </div>
                     <div className="col-sm-6 cols"></div>
                  </div>
               </div>
            </div>
         </div>

         <div className="gradientbg">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12">
                     <h1 className="title">amazing</h1>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
