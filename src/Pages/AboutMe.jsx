import myPicture from "../assets/me.jpg"
export default function AboutMe() {
    return (
      <div>
            <h2 className='pageTitle'>About me</h2>
            <div id="infoPicture" className="content">
                <div id='image'>
                    <img src={myPicture} alt="Picture - Manjot Padda" id='picture'/>
                </div>
                <h2 className='Bio'>My Biography</h2>
                <p>
                    My name is Manjot Padda , Welcome to my portfolio. I am a 24 year old sikh female , I am currently taking a coding bootcamp at the University of Toronto I would love to further my career as a frontend web developer.
                    I have been in the coding feild for about 2 years now. My progress below will show you how far i've come along,I hope you enjoy my portfolio!
                </p>
            </div>
      </div>
    );
  }
  