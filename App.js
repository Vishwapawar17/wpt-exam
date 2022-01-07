import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div className="container-fluid">
      {" "}
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const headerApp = "My ChatAPP";
  const studentname = "Vishwadip";
  const studentid = "118";
  const inputcss="form-control w-100 p-3 rounded-pill";
  const inputcssError="form-control w-100 p-3 rounded-pill border-dander"; 
  const [inputchat, setinputchat] = useState("");
 const [validationError,setValidationError]=useState(false);

 const[list,setlist]=useState([]);
 const [chats,setchat]=useState([]);

  const handleinput = (e) => {
    const newvalue = e.target.value;
    setinputchat(newvalue);
  };
  const sendmessage = () => {

    if(inputchat=="")
{

  setValidationError(true);
  alert("empty flied not allowed");
  return
} 

const newlist=[...list,inputchat];

setlist(newlist);

setinputchat("");
setValidationError(false);


};

  return (
    <div>
      <div className="row bg-secondary p-3">
        <div className="col fs-1">{headerApp}</div>
        <div className="col fs-4">
          {studentname}_{studentid}
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-10 p-2 h-50">
          <input
            type="text"
            name=""
            id=""
            placeholder="lets chat here..."
            className="form-control w-100 p-3 rounded-pill"
            onChange={handleinput}
          />
        </div>

        <div className="col-2 p-2">
          <input
            type="button"
            value="send"
            className="form-control w-100 p-3 rounded-pill"
            onChange={sendmessage}
          />
        </div>
      </div>

<div id="parent">

  {list.map((item) => (

    <div className="alert alert-warning"> {item}</div>
  ))}
</div>
</div>
);
}




