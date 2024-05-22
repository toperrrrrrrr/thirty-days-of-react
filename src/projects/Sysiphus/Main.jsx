import React from "react";
import "./res/styles.css";
import Sisyphus from "./res/imgs/Sisyphus.png";
import Boulder from "./res/imgs/boulder.png";
import backboulder from "./res/imgs/backboulder.png";

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
                     <div className="col-sm-6 container-col">
                        <div className="mx-5 px-5">
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
         <div>
            <div className="section-1">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12 fullscreen-col">
                        <div className="textContainer centerItems">
                           <div className="row row-myth">
                              <div className="col-6 container-col">
                                 <div className="insideContainer">
                                    <h1 className="subtitle">The Myth</h1>
                                    <p>
                                       Sisyphus, a crafty rebel from Greek myth,
                                       faces an eternal torment: pushing a
                                       boulder uphill, only to see it roll back
                                       down. This seemingly pointless task has
                                       become a powerful symbol of human
                                       resilience, perseverance, and the quest
                                       for meaning in a seemingly absurd world.
                                       Join us as we explore the myth of
                                       Sisyphus and uncover the timeless lessons
                                       it offers.
                                    </p>
                                 </div>
                              </div>
                              <div className="col-6 container-col">
                                 <img src={Sisyphus} alt="Myth" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="section-2">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12 fullscreen-col">
                        <div className="textContainer centerItems">
                           <div className="row row-myth">
                              <div className="col-6 container-col">
                                 <img
                                    src={Boulder}
                                    alt="Boulder"
                                    className="fitimage"
                                 />
                              </div>
                              <div className="col-6 container-col-1">
                                 <div>
                                    <h1>
                                       Interpretations: Finding Meaning in the
                                       Absurd
                                    </h1>
                                    <p>
                                       The myth of Sisyphus, with its seemingly
                                       endless cycle of frustration, has sparked
                                       numerous interpretations throughout
                                       history. Here, we explore some of the
                                       core themes that continue to resonate:
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="hero ">
               <div className="container-fluid container-hero">
                  <div className="row row-fit">
                     <div className="col-6 container-col">
                        <divs>
                           <div>
                              <h1>
                                 Interpretations: Finding Meaning in the Absurd
                              </h1>
                              <p>
                                 The myth of Sisyphus, with its seemingly
                                 endless cycle of frustration, has sparked
                                 numerous interpretations throughout history.
                                 Here, we explore some of the core themes that
                                 continue to resonate:
                              </p>
                           </div>
                        </divs>
                     </div>
                     <div className="col-6 container-col">
                        <img src={backboulder} alt="backboulder" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
