import React from "react";
import './Home.css'

import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'




function Home() {
    let navigate = useNavigate()





    const Loginpage =()=>{
        navigate("/login");
        
    }
    useEffect(() => {
        consoleText(['WELCOME TO QUIZ FLOW ', 'TEST YOUR SKILLS', 'IMPROVE YOUR SKILLS'], 'text', [ 'rebeccapurple', 'lightblue','black','orange']);
      }, []);
    
      function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {
          if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
          }
        }, 120)
        window.setInterval(function() {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
          } else {
            con.className = 'console-underscore'
            visible = true;
          }
        }, 400)
      }
  return (
    <>
    <div className="header">
       
        
        <div className="siderectangle">
        <button onClick={() => Loginpage()} className="gettingstartedtext"><b>GETTING STARTED</b></button>
           
        </div> 

        <div className="rightbar">
        <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
            <h1 className="quiztext"><b>QUIZ</b></h1>
            <h1 className="flowtext" ><b>FLOW</b></h1>
         
   
            <div className="line">

            </div>



            <div className="vectors">
            <div className="vector1">
                        </div>
            <div className="vector2"></div>
            <div className="vector3"></div>
            <div className="vector4"></div>
            <div className="vector5"></div>
            <div className="vector6"></div>
            <div className="vector7"></div>
            <div className="vector1">
                        </div>
            <div className="vector2"></div>
            <div className="vector3"></div>
            <div className="vector4"></div>
            <div className="vector5"></div>
            <div className="vector6"></div>
            <div className="vector7"></div>
            
           
            </div>
        </div>

       
       
    </div>

    </>
  );
}

export default Home;

