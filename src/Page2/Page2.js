import React, { Dispatch, useEffect, useState } from "react";
import bg1 from "../Asset/Desktop - 2 (2).png";
import CenterMode from "../Page2/Carrousel";
import "./Page2.css";

function Page2() {


let [carousel, setcarousel] = useState("All");

      
  return (
    <div className="Page2-MaimContainer">
    {/* <img src={bg1}></img> */}

        <div className="Page2-h1Container">
        <h1>Popular Foods / 風斤</h1>
        </div>
        
        <div className="Page2-2Container">
            <ul>
                <li onClick={() => setcarousel("All")} style={{
                    backgroundColor: carousel==="All" ? 'white' :  'rgb(255, 255, 255, 0.1) ',
                    color: carousel==="All" ? '#b1464a' :  '#ffffff',
                }} >
                    All
                </li>
                <li onClick={() => setcarousel("Sushi")} style={{
                    backgroundColor: carousel==="Sushi" ? 'white' :  'rgb(255, 255, 255, 0.1) ',
                    color: carousel==="Sushi" ? '#b1464a' :  '#ffffff',
                }}>
                    Sushi
                </li>
                <li onClick={() => setcarousel("Maki")} style={{
                    backgroundColor: carousel==="Maki" ? 'white' :  'rgb(255, 255, 255, 0.1) ',
                    color: carousel==="Maki" ? '#b1464a' :  '#ffffff',
                }}>
                    Maki
                </li>

                <li onClick={() => setcarousel("Others")} style={{
                    backgroundColor: carousel==="Others" ? 'white' :  'rgb(255, 255, 255, 0.1) ',
                    color: carousel==="Others" ? '#b1464a' :  '#ffffff',
                }}>
                    Others
                </li>
            </ul>
        </div>
        <div className="Page2-3Container">
         
            <CenterMode carousel={carousel}/>
          
        </div>
        <div className="Page2-4Container">
        <button id="btn3">Explore Foods</button>
        </div>
    </div>
  )

}

export default Page2;
