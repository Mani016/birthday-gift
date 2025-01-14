import "./App.scss";

import { Button, Card, CardBody } from "reactstrap";

import BooBooTimeline from "./assets/BooBooTimeline.png";
import Cheesy1 from "./assets/cheesy-1.gif";
import Cheesy2 from "./assets/cheesy-2.gif";
import Cheesy3 from "./assets/cheesy-3.gif";
import Cheesy4 from "./assets/cheesy-4.gif";
import Cheesy5 from "./assets/cheesy-5.gif";
import Cheesy6 from "./assets/cheesy-6.gif";
import Dance from "./assets/dance.gif";
import Music from "./assets/music.mp3";
import StarGif from "./assets/star.gif";
import { useState } from "react";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleStepChange = step => {
    setCurrentStep(step);
  };
  const handleAudioPlay = () => {
    var audio = document.getElementById("audio");
    audio.play();
  };
  return (
    <>
      {currentStep === 0 ? (
        <Card className="special-day-card">
          <CardBody>
            <img src={StarGif} alt="" className="star-gif" />
            <h3 className="text-warning">It's Your Special Day Yeyeye !</h3>
            <h4 className="text-info">
              Ab kuch cheesyyyyyy linein tumhaare liye kyunki hihihi uske bina
              boo boo ko maje khah aayenge (mai apni baat kr rhi hu 🤭)
            </h4>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button
                color="info"
                onClick={() => handleStepChange(1)}
                className="w-50">
                Chlo ab mujhe (mtlb button ko 🤭) click kro aur mujhe (mtlb boo
                boo ko 🤭) ek kissie 😘 dekho next kya hai ➡️
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 1 ? (
        <Card className="cheesy-1-card">
          <CardBody>
            <img src={Cheesy1} alt="" className="star-gif" />
            <h2>cheesy lines se phle</h2>
            <h1>
              I Love You Boo Boo ❤️
              <br />I Love You❤️
            </h1>
            <p className="mt-2">
              bohot bohot bohot humesha sth rehna humesha aise hi
            </p>
            <p>tumhaare sth hi buddhi hona chahti hu mai👵</p>
            <p>
              thik hai thik hai nahi kr rhi behes tum phle ho jaaoge mujhse 👴🤭
            </p>
            <p> Acha sorry sorry 🤭</p>
            <p>I Love You boo boo ❤️ Thank you Thank you❤️</p>
            <p>
              Zindagi ko itna khoobsurat bnaane ke liye mujhe fir se jeena
              sikhaane ke liye thank you 😘
            </p>
            <p>
              jitna bolu utna kamm hai hahah pta hai abhi likhte likhte bhi ro
              di mai toh haha ahem mood swings (par ye sirf mai keh skti hu 🤭)
              <br />
              thik hai kabhi kabhi tum bhi
            </p>
            <p> chalo ab aage dekhte hai </p>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button onClick={() => handleStepChange(2)}>
                Chlo next line dekho lekin usse phle mujhe (mtlb boo boo ko 🤭)
                ek kissie 😘 💞
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 2 ? (
        <Card className="cheesy-2-card">
          <CardBody>
            <img src={Cheesy2} alt="" className="star-gif" />
            <h3 className="text-info">
              tumhaare bina life ek error hai, par tum toh mera debugging tool
              hai.... 💜
            </h3>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button onClick={() => handleStepChange(3)}>
                Chlo ab next cheesy line aur kya krna tumhe wo pta hi hihihih
                🤭😘
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 3 ? (
        <Card className="cheesy-3-card">
          <CardBody>
            <img src={Cheesy3} alt="" className="star-gif" />
            <h3>
              Tum hai meri life ka main function, aur main tumhaari forever
              call...
            </h3>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button onClick={() => handleStepChange(4)}>
                Chlo ab next cheesy line aur kya krna tumhe wo pta hi hihihih
                🤭😘
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 4 ? (
        <Card className="cheesy-4-card">
          <CardBody>
            <img src={Cheesy4} alt="" className="star-gif" />
            <h3>
              Tumhaara pyar toh USB-C cable jaisa hai—fast charge, tight
              connection, aur kabhi loose nahi 🙈🤭
            </h3>
            <h3>
              Tumhaara pyaar toh RAM ki tarah hai—jitna zyada milta hai, utni
              fast main chalti hoon... 💾💋
            </h3>
            <h3>
              Boo Boo, tum woh app ho jiska subscription lifetime ke liye
              chahiye, with unlimited updates... 📱💞
              <br />
              Milega Kya ?
            </h3>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button onClick={() => handleStepChange(5)}>
                Chlo ab suprise ki baari (kaafi cheesy ho gya na) hihihih 🤭😘
                (yhah ek extra kissie (gif jaisi hihihih 🤭))
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 5 ? (
        <Card className="cheesy-5-card">
          <CardBody>
            <img src={Cheesy6} alt="" className="star-gif my-2" />
            <h3>Do you want to see the surprise?</h3>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button onClick={() => handleStepChange(6)}>Yes!</Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 6 ? (
        <Card className="cheesy-6-card">
          <CardBody>
            <img src={Cheesy5} alt="" className="star-gif my-2" />
            <br />
            <img src={BooBooTimeline} alt="" className="boo-boo-timeline" />
            <h3 className="my-3">4+4=8 but you+me=fate 😍🧿</h3>
            <h3>I Love You Boo Boo ❤️🫶🏻</h3>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Button
                onClick={() => {
                  handleStepChange(7);
                  document.body.style.background = "black";
                  document.getElementsByClassName("card")[0].style.background =
                    "black";
                }}>
                Next Surprise 🎉
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 7 ? (
        <Card className="cheesy-7-card">
          <CardBody>
            <Button
              className=""
              onClick={() => {
                document.body.style.background =
                  "url('src/assets/background.gif')";
                document.getElementsByClassName("card")[0].style.background =
                  "transparent";
                handleStepChange(8);
              }}>
              Lights On
            </Button>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {currentStep === 8 ? (
        <Card className="cheesy-8-card">
          <CardBody>
            <img src={Dance} alt="" className="star-gif my-3" />
            <br />
            <Button
              className=""
              onClick={() => {
                handleAudioPlay();
              }}>
              Play Music
            </Button>
            <audio controls id="audio" className="d-none">
              <source src={Music} type="audio/ogg" />
              <source src={Music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <h3 className="my-4">Happy Birthday Boo Boo 😘 💞</h3>
            <h4>Let's Dance 💃🕺 </h4>
            <h4>I Love You Boo Boo 💞❤️</h4>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
