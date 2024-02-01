import { useState } from 'react';

export default function Contact() {

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [message, setMessage] = useState(``);

  const handleInputChange = (event) => {
    event.preventDefault();
    const inputName = event.target.name
    if(inputName === `name`){
      setName(event.target.value)
    } else if(inputName === `email`){
      setEmail(event.target.value)
    } else {
      setMessage(event.target.value)
    }    
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    if(name === ``){
      alert(`Fill the name input`)
    } else if (!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)){
      alert(`Email is not valid`)
    } else if (message === ``){
      alert(`Remember to type a message`)
    } else {
      alert(`Form Submitted`)
    }
  } 

  const validateForm = () => {
    const formMessage = document.getElementById(`formMessage`)
    if(name === ``){
      formMessage.innerHTML = `Fill the name input`
    } else if (!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)){
      formMessage.innerHTML = `Email is not valid`
    } else if (message === ``){
      formMessage.innerHTML = `Remember to type a message`
    } 
  }
  // onBlur 

  return (
    <>    
      <h2 className='pageTitle'>Contact</h2>
      <div>
        <form onSubmit={handleSubmission}>
          <label>Name:</label><br />
          <input 
            value={name}
            name='name'
            type="text" 
            id="enterName"
            onChange={handleInputChange}
            onBlur={validateForm}
          /> <br />
          <label>Email:</label> <br />
          <input 
            value={email}
            name='email'
            type="text"
            id="enterEmail"
            onChange={handleInputChange}
            onBlur={validateForm}
          /> <br />
          <label>Message:</label> <br />
          <input 
            value={message}
            name='message'
            type="text" 
            id="enterMessage"
            onChange={handleInputChange}
            onBlur={validateForm}
          /> <br />
          <button>Submit</button>
        </form>
        <h3 id='formMessage'></h3>
      </div>
    </>
  );
}