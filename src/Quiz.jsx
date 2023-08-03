import React, { useEffect, useState } from 'react';
import Question from './Question';

const Quiz = () => {
  const [username, setUsername] = useState('');
  const [rollno, setRollno] = useState('');

  let [currentindex,setcurrentindex] = useState(0)
  let [score, setscore] = useState(0)
  let [showres, setshowres] = useState(false)

  useEffect(() => {
    // Fetch data from localStorage when the component mounts
    let storedUsername = localStorage.getItem('name');
    let storedRollno = localStorage.getItem('rollno');

    // Update state with retrieved data, or set default values if data is not available
    setUsername(storedUsername || 'Default Username');
    setRollno(storedRollno || 'Default Roll Number');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts


let obj = [ {
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},
{
    "question":"The correct sequence of HTML tags for starting a webpage is ",
    "options":[
        "Head, Title, HTML, body",
        "HTML, Body, Title, Head",
        "HTML, Head, Title, Body",
        "HTML, Head, Title, Body"
    ],

    "correct_ans":"HTML, Head, Title, Bod"
},
{
    "question":"  Which of the following element is responsible for making the text bold in HTML? ",
    "options":[
        "<pre>",
        "<a>",
        "<b>",
        "<br>"
    ],

    "correct_ans":"<b>"
},
{
    "question":"Which of the following tag is used for inserting the largest heading in HTML?",
    "options":[
        "<h3>",
        "<h1>",
        "<h5>",
        "<h6>"
    ],

    "correct_ans":"<h1>"
},
{
    "question":" Which of the following tag is used to insert a line-break in HTML? ",
    "options":[
        "<br> ",
        "<a>",
        "<pre>",
        "<b>"
    ],

    "correct_ans":"<br>"
},
{
    "question":" How to create an unordered list (a list with the list items in bullets) in HTML?",
    "options":[
        "<ul>",
        "<ol>",
        "<li>",
        "<i>"
    ],

    "correct_ans":"<ul>"
},
{
    "question":" Which of the following element is responsible for making the text italic in HTML? ",
    "options":[
        "<i>",
        "<italic>",
        "<it>",
        "<pre>"
    ],

    "correct_ans":"<i>"
},
{
    "question":" How to create a hyperlink in HTML? ",
    "options":[
        "<a href = www.javatpoint.com> javaTpoint.com </a>",
        "<a url = www.javatpoint.com javaTpoint.com /a>",
        "<a link = www.javatpoint.com> javaTpoint.com </a>",
        "<a> www.javatpoint.com <javaTpoint.com /a>"
    ],

    "correct_ans":"<a href = www.javatpoint.com> javaTpoint.com </a>"
},
{
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},
{
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},
{
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},
{
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},
{
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},
{
    "question":" HTML stands for ",
    "options":[
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these"
    ],

    "correct_ans":"HyperText Markup Language"
},


]


const callback =(data)=>{
    if(data ==obj[currentindex]['correct_ans']){
        setscore(score+1)
    }
    
    if(currentindex >= obj.length -1 ){
        setshowres(true)
    }

    else{
        setcurrentindex(++currentindex)
    }

}

  return (
    <>
    

      <div>Username: {username}</div>

      <div>Roll Number: {rollno}</div>


      {
        showres ?
        <h1>Score :{score}</h1>
        :
        
        <Question 
        question ={obj[currentindex]["question"]}
        options = {obj[currentindex]["options"]}
        i={currentindex}
        callback= {callback}   // function
        />


      }
    </>
  );
}

export default Quiz;
