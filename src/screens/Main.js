import { useState } from 'react';
import './Main.css';
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SUCCESS_MESSAGE } from '../components/message';

import { upperCaseLetters,symbolsincluded,lowerCaseLetters,number } from '../Data';
const Main = ()=>{

    const[password,setPassword] = useState('');
    const[passwordLength,setPasswordLength] = useState(8);
    const[Uppercase,setUpperCase] = useState(false);
    const[Lowercase,setLowerCase] = useState(false);
    const[Number,setNumber] = useState(false);
    const[Symbol,setSymbol] = useState(false);


const generatePassword = (e)=>{


    if(!Uppercase && !Lowercase && !Number && !Symbol){
        notify("Select one option atleast",true);
    }
 
    let createPassword = '';

    if(Uppercase){
        createPassword = createPassword + upperCaseLetters;
    }

        if(Lowercase)
        {
            createPassword = createPassword + lowerCaseLetters;
        }

        if(Number)
        {
            createPassword = createPassword + number;
        }

        if(Symbol)
        {
            createPassword = createPassword + symbolsincluded;
        }



     setPassword(randompass(createPassword));

}

const randompass= (createPassword)=>{

    let realpass = '';

let passlength = createPassword.length;



for(let i=0;i<passwordLength;i++){

let index = Math.floor(Math.random()*passlength);

realpass = realpass + createPassword.charAt(index);


}
return realpass;


}


const copypass = () => {


    if(password === ''){
        notify('Nothing to copy',true);

        }
        else{
            // Create a temporary textarea element
    let textArea = document.createElement('textarea');

    // Set the password as the value of the textarea
    textArea.value = password;

    // Append the textarea to the document body
    document.body.appendChild(textArea);

    // Select the content of the textarea
    textArea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea from the document body
    document.body.removeChild(textArea);


            notify(SUCCESS_MESSAGE,false);
        }
    
    
    
    
}

const notify =(SUCCESS_MESSAGE,error = false)=>{

    if(error){
        toast.error(SUCCESS_MESSAGE, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }
    else{
        toast.success(SUCCESS_MESSAGE, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
   
}



    return <>
<div className="container">


<h1>Password Generator</h1>

<div className="passworddiv">

    <h1>{password}</h1>
    
</div>
<div className='passform'>
<div className='passlength'>
<label className='' htmlFor='password-length'>Password length</label>
    <input type='number' 
    id='pass-length' 
    name='pass-length' 
    max="20" min="8"
    defaultValue={passwordLength}
    onChange={(e)=>{

        setPasswordLength(e.target.value);
    }}
    ></input>

</div>
<div className='Uppercase'>
<label className='' htmlFor='Uppercase'>Include Uppercase Letter</label>
<input 
    type='checkbox' 
    id='Uppercase' 
    name='Uppercase'
    checked={Uppercase}
    onChange={(e) => {
        setUpperCase(e.target.checked);
        // console.log(e.target);
    }}
></input>


</div>
<div className='Lowercase'>
<label className='' htmlFor='Lowercase'>Include Lowercase Letter</label>
    <input
     type='checkbox'
      id='Lowercase' 
      name='Lowercase'
      
     checked = {Lowercase}
onChange={(e)=>{

setLowerCase(e.target.checked);

}}
      >
      </input>

</div>
<div className='Number'>
<label className='' htmlFor='Number'>Include Numbers</label>
    <input 
    type='checkbox' 
    id='Number' 
    name='Number'
        checked={Number}
        onChange={(e)=>{

       setNumber(e.target.checked);
console.log(e.target)
        }}
    ></input>

</div>
<div className='Symbol'>
<label className='' htmlFor='Symbol'>Include Symbols</label>
    <input 
    type='checkbox' 
    id='Symbol' 
    name='Symbol'
    
    checked={Symbol}
        onChange={(e)=>{

       setSymbol(e.target.checked);
        }
        }
    ></input>

</div>
</div>
<button onClick={generatePassword}   className='gecd pad1nerate-btn'>Generate Password</button>
<button onClick={copypass} className='generate-btn'>
    <FaRegCopy />
    </button>
<ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>

</div>

    </>
}

export default Main;