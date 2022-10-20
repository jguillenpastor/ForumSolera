import '../App.css';


function OptionSelector(props) {



    return (
        <div>
            <label>Category:</label><br></br>
            <select className='button' name="cars" id="cars" onChange={props.funct}>
              <option value="Question">Question</option>
              <option value="Suggestion">Suggestion</option>
              <option value="Clarification">Clarification</option>
            </select> 
        </div>
      
    );
  }
  
  export default OptionSelector;