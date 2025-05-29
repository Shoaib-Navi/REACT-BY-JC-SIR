import React ,{useState} from 'react';


export default function TextForm() {
  
const [text , setText] = useState("Enter text here");  //this text is initial text.  text is fixed value, but you want to change text then it will be change by setText

const handleOnChange = (event) =>{
  setText(event.target.value);
}
const handleUpClick = (event) =>{
  let newText = text.toUpperCase();
  setText(newText);
}
const handleDownClick = (event) =>{
  let newText = text.toLowerCase();
  setText(newText);
}


  
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-6 col-lg-4">
        <div className="form-floating mb-3">
          <input
            type="textArea"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleOnChange}
            value={text}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="submit"
            className="btn btn-primary b1" 
            onClick={handleUpClick}
            placeholder="Password"
            value="To UpperCase"
          />

        </div>
        <div className="form-floating">
          <input
            type="submit"
            className="btn btn-primary b1" 
            onClick={handleDownClick}
            placeholder="Password"
            value="To LowerCase"
          />

        </div>
      </div>
    </div>
  );
}



//what is state management?
//class manages
//Hooks is used to manages state management


//assignment 
//convert to lowercase