import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    <ToastContainer/>
  

let [name,setname] = useState("")
let [email,setemail] = useState("")
let [password,setpassword] = useState("")
let [rollno,setrollno] = useState()

useEffect(() => {
    let username = localStorage.getItem("name");
    let useremail = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let rollno = localStorage.getItem("rollno");

    setname(username)
    setemail(useremail)
    setpassword(password)
    setrollno(rollno)
  }, []);

  let navigate = useNavigate()
  const submit = async () => {

    if (name == "" || email == "" || password == "" || rollno == "") {
        toast.error('Enter NAME, Email, Password, and Roll number');
    } else {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("rollno", rollno);
    toast.success("login successful")
    setTimeout(() => {
        navigate('/Quiz');
      }, 6000);

    navigate("/Quiz")
    

    



      // try{
      //     let user = await  createUserWithEmailAndPassword(auth,email,Password)
      //     console.log(user.user.uid)
   

      // }
      // catch(err){
      //     alert(err)

      // }
    }
  };


  return (
    <>
    <div className='main' >

    <div className="login">
    <form  className='loginform' action="">
      <label htmlFor=""className='labels' >NAME</label>
    <input 
        value={name}
        onChange={(e) => setname(e.target.value)}
        required
        type="text"
        placeholder="enter your name"
      />
      <br />
      <label  className='labels' htmlFor="">ROLLNO</label>
      <input
        value={rollno}
        onChange={(e) => setrollno(e.target.value)}
        required
        type="number"
        placeholder="enter roll number"
      />
      <br />
      <label  className='labels' htmlFor="">EMAIL</label>
      <input
        value={email}
        required
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="enter email"
      />
      <br />
      <label  className='labels' htmlFor="">PASSWORD</label>
      <input
        value={password}
        required
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        placeholder="enter password"
      />
      <br />
      <br />
      <Button className='btn'   onClick={() => submit()} >
       LOGIN
      </Button>
      </form>
      </div>
    </div>

    </>

  )
}

export default Login
