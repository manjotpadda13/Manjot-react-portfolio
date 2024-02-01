import myPicture from "../assets/picture.jpg"
export default function AboutMe() {
    return (
      <div>
            <h2 className='pageTitle'>About me</h2>
            <div id="infoPicture" className="content">
                <div id='image'>
                    <img src={myPicture} alt="Picture - David Rodriguez" id='picture'/>
                </div>
                <p>
                    My name is Manjot Padda Rodriguez, Welcome to my portfolio. I am a 24 years old , I am currently taking a coding bootcamp at the University of Toronto.
                    I have been in the coding feild for about 2 years now. My progress below will show you how far i've come along, Enjoy!
                </p>
            </div>
      </div>
    );
  }
  