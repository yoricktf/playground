import "../App.css";
import { useState, useEffect } from "react";

function Details() {
const [sitter, setSitter] = useState(true)
console.log(sitter)

  function handleSitterStatus() {
    setSitter(!sitter);
  }


  return (
    <div className="App">
      <h1>form to get details from the user to make them either a sitter or a parent</h1>

      <label>Sitter
        <input type="radio" name="sitter" onChange={handleSitterStatus}/>
        {/* <input type="radio" name="sitter" value={true} onChange={e => setSitter(e.target.value)}/> */}
      </label>
      <label>Parent
        <input type="radio" name="sitter" onChange={handleSitterStatus}/>
      </label>



      <form hidden={!sitter}>
        <label>
            <input type="text" disabled={!sitter} />
        </label>
        <label>
            <input type="text" disabled={!sitter} />
        </label>
        <label>
            <input type="text" disabled={!sitter} />
        </label>
        <button type="submit">Become a Sitter</button>
      </form>

<hr />

      <form hidden={sitter}>
        <label>
            <input type="text" disabled={sitter} />
        </label>
        <label>
            <input type="text" disabled={sitter} />
        </label>
        <label>
            <input type="text" disabled={sitter} />
        </label>
        <button type="submit">Find a Babysitter</button>
      </form>





    </div>
  );
}

export default Details;
