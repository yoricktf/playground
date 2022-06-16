import "../App.css";
import { useState, useEffect, useContext, React } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'




function Details(props) {
const navigate = useNavigate()
const userId = props.user._id
const [sitter, setSitter] = useState(true)
const [phoneNumber, setPhoneNumber] = useState('')
const [email, setEmail] = useState('')
const [location, setLocation] = useState()
const [bio, setBio] = useState('write a bit about yourself')
const [profilePicture, setProfilePicture] = useState('')
// SITTER ONLY DETAILS BELOW
const [rate, setRate] = useState(0)
const [referal, setReferal] = useState(false)


  const handleSitterStatus = () => {
    setSitter(!sitter);
  }

  const addUserDetails = (e) => {
    e.preventDefault()
    axios.post('user/addUserDetails', { userId, sitter, phoneNumber, email, location, bio, profilePicture, rate, referal})
    navigate(`/dashboard`)
  }



  return (
    <div className="App">
      <h1>form to get details from the user to make them either a sitter or a parent</h1>

      <label>Sitter
        <input type="radio" name="sitter" defaultChecked onChange={handleSitterStatus}/>
        {/* <input type="radio" name="sitter" value={true} onChange={e => setSitter(e.target.value)}/> */}
      </label>
      <label>Parent
        <input type="radio" name="sitter" onChange={handleSitterStatus}/>
      </label>



      <form onSubmit={addUserDetails} hidden={!sitter}>
        <label>Rate
          <input type="text" disabled={!sitter} onChange={e => setRate(e.target.value)}/>
        </label>
        <label>Profile Picture
          <input type="file" disabled={!sitter} onChange={e => setProfilePicture(e.target.value)}/>
        </label>
        <label>Email
          <input type="text" disabled={!sitter} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>Phone Number
            <input type="tel" disabled={!sitter} onChange={e => setPhoneNumber(e.target.value)}/>
        </label>
        <label>Location (just write yourstreet name)
            <input type="text" disabled={!sitter} onChange={e => setLocation(e.target.value)}/>
        </label>
        <label>bio
          <textarea name="" id="" cols="25" rows="3" onChange={e => setBio(e.target.value)}></textarea>
            {/* <input type="text" disabled={!sitter} /> */}
        </label>
        <button type="submit">Become a Sitter</button>
      </form>

      <hr />

      <form onSubmit={addUserDetails} hidden={sitter}>
        <label>Email
          <input type="text" disabled={sitter} />
        </label>
        <label>Phone Number
          <input type="text" disabled={sitter} />
        </label>
        <label>Location
          <input type="text" disabled={sitter} />
        </label>
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
