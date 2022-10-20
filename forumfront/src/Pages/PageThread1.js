import React from 'react';
import '../App.css';
import OptionSelector from '../Components/OptionSelector';
import ThreadsNavegator from '../Components/ThreadsNavegator';
import { useNavigate } from 'react-router-dom';


const imagess=require.context('./images',true);


const inizialaizer = [
  {
      id:1,
      body:'Josaaaaaaaaaaaaaaaaaaaaaaaaaaae',
      category:'Juan',
  },
  {
      id:2,
      body:'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      category:'si',
  },
  {
      id:3,
      body:'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      category:'no',
  }

]

function PageThread1(props) {

  let navigate=useNavigate();

  const [thread1,setThread1]=React.useState([])
  const [body,setBody]=React.useState("")
  const [category,setCategory]=React.useState("Question")
  const [update,setUpdate]=React.useState("");
  const [threadname,setThreadname]=React.useState("Thread1")
  const [forbiddenWord,setforbiddenWord]=React.useState([])

  React.useEffect(()=>{

    fetch("http://localhost:8081/forum/"+threadname)
    .then(res=>res.json())
    .then((result)=>{
    setThread1(result);
     })

},[update])

React.useEffect(()=>{

  fetch("http://localhost:8081/forum/banned")
  .then(res=>res.json())
  .then((result)=>{
  setforbiddenWord(result);
   })

},[])

  const handleCategory=(e)=>{
    setCategory(e.target.value);
  }

  const handleText=(e)=>{
    setBody(e.target.value);
  }

  const handleClick=(e)=>{
    const aux={
      "thread":threadname,
      "category":category,
      "body":body
    }


    let found=-1;
    try{
      forbiddenWord.forEach(element => {
        found = body.search(element);
        if(found!=-1) {
          throw Error("Banned Word used")
        }
      });
    }catch (e){
      alert(e);
    }




    if(body!=""&&found==-1){
      fetch("http://localhost:8081/forum/post",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(aux)
    
    }).then(()=>{
        setUpdate(Math.random);
        console.log("New Transaction Added")
    })
    }else{
      if(body=="")
        alert("Empty Body")
    }
  }
  const handleThread = (event) => {
    if(event.target.value=="Thread1"){
      navigate("/");
    }else if(event.target.value=="Thread2"){
      navigate("/thread2");
    }else if(event.target.value=="Thread3"){
      navigate("/thread3");
    }
    setThreadname(event.target.value)
    setUpdate(Math.random);
    console.log(event.target.value)
  };

  return (
    <div className='general'>
        <div className='Box1'>
            <h2>FORUM / {props.text}</h2>
            <br></br>
            <ThreadsNavegator funct={handleThread}></ThreadsNavegator>
            
            <OptionSelector funct={handleCategory} ></OptionSelector>
            
            <form>
              <label>Body:</label><br></br>
              <textarea className='textfield' name="Text1" cols="60" rows="5" value={body} onChange={handleText}></textarea><br></br>
            </form>

            <button className='button' onClick={handleClick}>Post</button>
        
        </div>
        <div className='Box2'>
          {thread1.map(thread=>(
            <div className='Box3' key={thread.id}>
                <div style={{width:"80%"}}>
                  {props.text+" "+thread.category}
                <br></br>
                  Body:{" "+thread.body}
                </div>
                <img src={imagess(`./${thread.category}.png`)} className="img"></img>
            </div>
          ))
          
          }

        </div>
    </div>
    
  );
}

export default PageThread1;
