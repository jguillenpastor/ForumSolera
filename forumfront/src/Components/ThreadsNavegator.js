import '../App.css';


function ThreadsNavegator(props) {


    return (
        <div>
            <label>Thread:</label><br></br>
            <select className='button' name="cars" id="cars" onChange={props.funct}>
              <option value="Thread1">Thread1</option>
              <option value="Thread2">Thread2</option>
              <option value="Thread3">Thread3</option>
            </select> 
        </div>
      
    );
  }
  
  export default ThreadsNavegator;