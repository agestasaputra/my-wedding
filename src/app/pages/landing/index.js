import React from "react";
import Banner from "./sections/banner";
import Invitation from "./sections/invitation";
import Counter from "./sections/counter";
import AboutUs from "./sections/about-us";
import Gallery from "./sections/gallery";
import Location from "./sections/location";
import "./styles.scss";
import { PlayCircle, PauseCircle } from "react-feather";
import ModalWelcome from "./components/modal-welcome";

const Landing = ({ state, dispatch, location }) => {
  const [audioUrl] = React.useState('https://docs.google.com/uc?export=download&id=1otrDDMkyj1N8PjHgdkBC7dmHQHPzVnSR');
  const [audio] = React.useState(new Audio(audioUrl));
  const [playing, setPlaying] = React.useState(false);
  const [modalWelcome, setModalWelcome] = React.useState({
    isShow: false,
    title: `Welcome to Siska & Agesta's Wedding!`,
    fullscreen: false
  })
  const [guest, setGuest] = React.useState("");

  React.useEffect(() => {
    // assign guest
    // format: https://agestasaputra.github.io/my-wedding/?to=Rizal+&+Partner
    const tmp = location.search
      ? location.search.split('=')[1].replace(/[+]/g, " ")
      : "";
    setGuest(tmp);
  }, [location]);

  React.useEffect(() => {
    onDeviceChecking();
    setTimeout(() => {
      setModalWelcome((prevState) => ({
          ...prevState,
          show: true
        })
      );
    }, 1000);
  }, [])

  const onDeviceChecking = () => {
    const mq = window.matchMedia( "(min-width: 480px)" );
      if (mq.matches) {
        // desktop
        setModalWelcome((prevState) => ({
            ...prevState,
            fullscreen: false
          })
        );
      } else {
        // mobile
        setModalWelcome((prevState) => ({
            ...prevState,
            fullscreen: true
          })
        );
      }
  }

  const onMusicClicked = () => {
    if (playing) {
      audio.pause();
    } else {
      console.log('onMusicClicked - 2!');
      // audio.autoplay = true;
      // audio.volume = 0;
      setTimeout(() => {
        audio.load();
        audio.currentTime = 0;
        audio.play();
      }, 1000);
    }
    setPlaying(!playing);
  }

  const onModalClosed = () => {
    setModalWelcome((prevState) => ({
      ...prevState,
      show: !prevState.show
    })
  );
    onMusicClicked();
  }

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


      <ModalWelcome
        show={modalWelcome.show}
        title={modalWelcome.title}
        fullscreen={modalWelcome.fullscreen}
        guest={guest}
        onModalClosed={onModalClosed}
      />

      {/* Music */}
      <div>
        {
          (!modalWelcome.show && playing) && <PauseCircle className="pause-circle" onClick={onMusicClicked} />
        }
        {
          (!modalWelcome.show && !playing) && <PlayCircle className="play-circle" onClick={onMusicClicked} />
        }
      </div>
    </div>

  );
};

export default Landing;
