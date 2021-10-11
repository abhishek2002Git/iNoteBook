import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "" , email: "" , password: "", cpassword: ""})
    let history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})  
          });
          const json = await response.json();
          console.log(json)
          if (json.success) { // redirecting to homepage if user is valid
            //  save the auth-token redirect
            localStorage.setItem('token', json.authToken)
            history.push("/")
            props.showAlert("Successfully createt account", "success")
          }
          else{
              props.showAlert("Invalid Credentials", "danger")
          }
    }

    const onChange = (e) => {
        // setNote({ ...note, [e.target.name]: e.target.value });
        setCredentials({...credentials, [e.target.name]: e.target.value})
      };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange = {onChange}
            name="name"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>  
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange = {onChange}
            name="email"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange = {onChange}
            name="password"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange = {onChange}
            name="cpassword"
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
