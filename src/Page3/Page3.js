import React, { Dispatch, useEffect, useState } from "react";
import "./Page3.css";
import Maki4 from "../Asset/carousel/Maki4-removebg-preview.png";
import Other1 from "../Asset/carousel/Others1-removebg-preview.png"
function Page3() {
  return (
    <div className="Page3-MaimContainer">
      <div className="Page3-MaimContainer2">
        <div className="Page3-MaimContainer3">
          <div className="Page3-MaimContainer31">
            <h2>What's Trending / 東果乳</h2>
            <h1>Japanese Sushi</h1>
            <p>Feel the taste of most delivery Sushi here.</p>

            <div className="Page3-MaimContainer32">
              <ul>
                <li>Maki Sushi</li>
                <li>Naka Sushi</li>
                <li>Oshiete</li>
              </ul>

              <ul>
                <li>Temari Sushi</li>
                <li>Tenten Sushi</li>
                <li>Mai inari Sushi</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Page3-MaimContainer4">
        <img src={Maki4}></img>
        </div>
      </div>

      <button id="btn4">Discover</button>

      <div className="Page3-MaimContainer2">
        <div className="Page3-MaimContainer4">
        <img src={Other1}></img>
        </div>
        <div className="Page3-MaimContainer3">
          <div className="Page3-MaimContainer31">
            <h2>What's Trending / 東果乳</h2>
            <h1>Japanese Drinks</h1>
            <p>Feel the taste of most delivery drinks here.</p>

            <div className="Page3-MaimContainer32">
              <ul>
                <li>Sake saie</li>
                <li>Beeru</li>
                <li>Sakura tea</li>
              </ul>

              <ul>
                <li>Aoijiru</li>
                <li>Mochi tea</li>
                <li>Mugicha</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
