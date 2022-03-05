import React from "react";
import ReactDom from "react-dom";


import {add,mult} from "./cal.js"
import "./index.css"

console.log(add(4,5))
console.log(mult(4,5))

// var h1 = document.createElement("h1")
// h1.innerText = "welcome to masai school"
// h1.classList.add("venom");

var os = ["Android","Blackberry","iphone","windows phone"]
var mf = ["Samsaung","HTC","Apple","Micromax"]

ReactDom.render(
    <div>
        <h1 className="phone">Mobile Operating System</h1>,
        {os.map((e) => 
            <div >
                <li className="mf">{e}</li> 
            </div>
        )},

        <h1 className="phone" >Mobile  Manufacturers</h1>,
        {mf.map((er) => 
            <div>
                <li className="mf">{er}</li> 
            </div>
        )}
    </div>,

    document.getElementById("vikas")
)



