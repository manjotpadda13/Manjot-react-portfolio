import Project from "../Project"
import ManjotSchedular from "../assets/Manjot-schedular.png"
import WeatherNetwork from "../assets/Manjot-weather.png"
import NoteTaker from "../assets/note-taker.png"
export default function Portfolio() {
    return (
      <>
        <h2 className='pageTitle'>Portfolio</h2>
        <div style={{display:'Flex', justifyContent: 'center', flexWrap: `wrap`}}>
          <Project image={ManjotSchedular}  title="Manjot Schedular" link="https://github.com/manjotpadda13/manjotstudioscheduler?tab=readme-ov-file"/>
          <Project image={WeatherNetwork}  title="Weather Network" link="https://github.com/manjotpadda13/Paddaweathernetwork"/>
          <Project image={NoteTaker}  title="Note Taker" link="https://github.com/manjotpadda13/Manjot-Note-Taker?tab=readme-ov-file"/>
        </div>
      </>
    );
}