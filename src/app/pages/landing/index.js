import React from "react";
import Banner from "./sections/banner";
import Invitation from "./sections/invitation";
import Counter from "./sections/counter";
import AboutUs from "./sections/about-us";
import Gallery from "./sections/gallery";
import Location from "./sections/location";
import "./styles.scss";
import { PlayCircle, PauseCircle } from "react-feather";

const Landing = ({ state, dispatch, location }) => {

  const [audioUrl] = React.useState('https://docs.google.com/uc?export=download&id=1otrDDMkyj1N8PjHgdkBC7dmHQHPzVnSR');
  const [audio] = React.useState(new Audio(audioUrl));
  const [playing, setPlaying] = React.useState(false);

  const onMusicClicked = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }

  React.useEffect(() => {
      setTimeout(() => {
        audio.play();
        setPlaying(!playing);
      }, 5000);
  }, [audio, playing])

  return (
    <div className="container-landing">
      <Banner
        img={
          state.dataLandingPage.dataBanner && state.dataLandingPage.dataBanner
        }
        location={location}
      />
      <Invitation
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Counter
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <AboutUs
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Gallery
        dataNewArrival={state.dataLandingPage.dataNewArrival}
      />
      <Location />

      {/* Music */}
      <div>
        {
          playing ? (
            <PauseCircle className="pause-circle" onClick={onMusicClicked} />
          ) : (
            <PlayCircle className="play-circle" onClick={onMusicClicked} />
          )
        }
      </div>
    </div>
  );
};

export default Landing;
