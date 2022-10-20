import React from 'react';
import '../App.css';
import OptionSelector from '../Components/OptionSelector';
import ThreadsNavegator from '../Components/ThreadsNavegator';



const inizialaizer = [
  {
      id:1,
      body:'5555555555555555555',
      category:'Juan',
  },
  {
      id:2,
      body:'4444444444444',
      category:'no',
  },
  {
      id:3,
      body:'7272727272',
      category:'no',
  }

]

function PageThread2() {

  const [thread1,setThread1]=React.useState(inizialaizer)



  return (
    <div className='general'>
        <div className='Box1'>
            <h2>FORUM</h2>
            <br></br>
            <ThreadsNavegator></ThreadsNavegator>
            
            <OptionSelector></OptionSelector>

            <form>
              <label>Body:</label><br></br>
              <textarea className='textfield' name="Text1" cols="60" rows="5"></textarea><br></br>
            </form>

            <button className='button'>Post</button>
        
        </div>
        <div className='Box2'>
          {thread1.map(thread=>(
            <div className='Box3'>
              Thread2 {" "+thread.category}<br></br>
              Body:{" "+thread.body}
            </div>
          ))
          
          }

        </div>
    </div>
    
  );
}

export default PageThread2;
