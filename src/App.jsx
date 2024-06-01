import {
  faAmericanSignLanguageInterpreting,
  faGlobe,
  faGreaterThan,
  faLanguage,
  faSignLanguage,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import logo from "./Images/Logo.svg";
import TV from "./Images/tv.png";
import Download from "./Images/Download.jpg";
import BoxShot from "./Images/boxshot.png";
import Icon_Download from "./Images/download.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Questions from "./Data";
import { useState } from "react";

function App() {
  const faqQuestions = () => {};
  const [showAnswer, setShowAnswer] = useState(Questions.id);
  return (
    <>
      {/*---------------- Banner Section Start -------------------- */}
      <section className="w-[100%] h-[100vh] bg-cover bg-center bg-[url(./Images/BannerBg.jpg)] ">
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <header className=" p-[15px] mx-auto max-w-[950px]">
            <div className="grid items-center sm:grid-cols-2 grid-cols-[30%_auto]">
              <figure className="">
                <img src={logo} className="max-w-[100px] mr-[10px]" alt="" />
              </figure>
              <div className="flex gap-4 justify-end ">
                <div className="relative">
                  {" "}
                  <FontAwesomeIcon
                    className="text-white  absolute	top-[9px] left-[5px]"
                    icon={faGlobe}
                  />
                  <select
                    name=""
                    id=""
                    className="bg-black text-white border-[1px] rounded-[5px] sm:p-[5px_25px] p-[5px_25px] border-white"
                  >
                    <option value="">Urdu</option>
                    <option value="">Punjabi</option>
                    <option value="">Urdu</option>
                    <option value="">Punjabi</option>
                    <option value="">Urdu</option>
                    <option value="">Punjabi</option>
                    <option value="">Urdu</option>
                    <option value="">Punjabi</option>
                  </select>
                </div>

                <button className="bg-[red] p-[5px] text-white rounded-[5px]">
                  Sign In
                </button>
              </div>
            </div>
          </header>
          <div className="max-w-[950px] text-center mx-auto sm:py-[150px] py-[50px]  ">
            <h1 className="text-5xl text-white font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-2xl pt-5">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-white text-2xl pt-5">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className=" sm:px-[10px] px-[40px] mx-auto max-w-[600px] mt-7   ">
              <form
                action=""
                className="grid gap-[10px] sm:grid-cols-[70%_auto] grid-cols-1"
              >
                <input
                  placeholder="Enter Email"
                  type="text"
                  className="w-[400px] h-[50px] pl-[6px] text-white bg-transparent outline-2 border-[2px]  rounded-[2px] "
                />
                <button className=" bg-[red] hover:bg-[rgba(193,17,25)]  duration-300 h-[50px] w-[160px] rounded-[3px] text-white font-medium">
                  Get Started
                  <FontAwesomeIcon icon={faGreaterThan} className="ml-[5px]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*---------------- Banner Section End -------------------- */}
      {/*---------------- Enjoy on your TV Start -------------------- */}
      <section className="w-[100%] bg-black sm:py-[100px] py-[50px] border-t-[8px] border-t-[#605b5d]">
        <div className="max-w-[950px] px-[15px] mx-auto">
          <div className="grid text-white items-center  sm:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="sm:text-5xl text-[40px] font-extrabold mb-[20px]">
                Enjoy on your TV
              </h1>
              <p className="text-2xl  ">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <figure className="relative">
              <img src={TV} className="relative z-[2]" />
              <video
                className=" absolute top-[20%] z-[1] left-[10%] w-[80%] rounded-[5px] "
                autoPlay
                loop
                src={
                  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                }
              ></video>
            </figure>
          </div>
        </div>
      </section>
      {/*---------------- Enjoy on your TV End -------------------- */}
      {/*---------------- Download your shows Start -------------------- */}
      <section className="w-[100%] bg-black sm:py-[100px] py-[50px] border-t-[8px] border-t-[#605b5d]">
        <div className="max-w-[950px] px-[15px] mx-auto">
          <div className="grid gap-3 text-white items-center  sm:grid-cols-2 grid-cols-1">
            <figure className="relative sm:order-1 order-2">
              <img src={Download} alt="" />
              <div className="sm:w-[60%] w-[80%] absolute sm:left-[20%] left-[10%] bottom-[0px] border-[2px] border-[#ccc] items-center rounded-[8px] grid grid-cols-[70%_auto] bg-black ">
                <div className="grid grid-cols-[20%_auto] p-[10px] items-center">
                  <img src={BoxShot} className="" />
                  <div className="ml-[10px]">
                    <h3 className="text-[15px]">Stranger Things</h3>
                    <span className="text-[13px] text-blue-400">
                      Downloading...
                    </span>
                  </div>
                </div>
                <div className="">
                  <img src={Icon_Download} />
                </div>
              </div>
            </figure>
            <div className="sm:order-2 order-1 ">
              <h1 className="sm:text-5xl sm:leading-[55px] leading-[50px] text-[40px] font-extrabold mb-[20px]">
                Download your shows to watch offline
              </h1>
              <p className="text-2xl  ">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*---------------- Download your shows End -------------------- */}
      {/*---------------- Watch Every Start -------------------- */}
      <section className="w-[100%] bg-black sm:py-[100px] py-[50px] border-t-[8px] border-t-[#605b5d]">
        <div className="max-w-[950px] px-[15px] mx-auto">
          <div className="grid text-white items-center  sm:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="sm:text-5xl text-[40px] font-extrabold mb-[20px]">
                Watch everywhere
              </h1>
              <p className="text-2xl  ">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <figure className="relative">
              <img
                src={
                  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                }
                className="relative z-[2]"
              />
              <video
                className=" absolute top-[9%] z-[1] left-[21%] w-[61%] rounded-[5px] "
                autoPlay
                loop
                src={
                  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                }
              ></video>
            </figure>
          </div>
        </div>
      </section>
      {/*---------------- Watch Every End -------------------- */}
      {/*---------------- profiles for kids Start -------------------- */}
      <section className="w-[100%] bg-black sm:py-[100px] py-[50px] border-t-[8px] border-t-[#605b5d]">
        <div className="max-w-[950px] px-[15px] mx-auto">
          <div className="grid text-white items-center  sm:grid-cols-2 grid-cols-1">
            <figure className=" sm:order-1 order-2 relative">
              <img
                src={
                  "https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                }
                className="relative z-[2]"
              />
            </figure>{" "}
            <div className="sm:order-2 order-1">
              <h1 className="sm:text-5xl text-[40px] font-extrabold mb-[20px]">
                Create profiles for kids
              </h1>
              <p className="text-2xl  ">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*---------------- profiles for kids End -------------------- */}
      {/*---------------- Frequently Start -------------------- */}
      <section className="w-[100%] bg-black sm:py-[100px] py-[50px] border-t-[8px] border-t-[#605b5d]">
        <div className="max-w-[950px] mb-[10px]  text-white px-[15px] mx-auto">
          <h2 className="text-center font-extrabold text-5xl">
            Frequently Asked Questions{" "}
          </h2>
          <div className="py-[30px]">
            {Questions.map((faqItems, i) => {
              return (
                <div className="bg-[#414141]">
                  <div
                    className="sm:text-[30px] text-[20px] hover:bg-[rgb(78,78,78)]  mt-[5px] duration-300 hover:cursor-pointer select-none relative p-[20px] border-b-[3px] border-black "
                    onClick={() => {
                      setShowAnswer((prev) =>
                        prev === faqItems.id ? null : faqItems.id
                      );
                    }}
                  >
                    <h3>{faqItems.question}</h3>
                    <span
                      className={`absolute top-[20px] right-[20px] ${
                        showAnswer === faqItems.id ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className={
                      showAnswer === faqItems.id
                        ? "scale-y-[100%]  duration-100  h-auto p-[20px]"
                        : "scale-y-0 h-[0px] duration-100  origin-top text-[15px] sm:text-[20px]"
                    }
                  >
                    <p>{faqItems.Answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-white text-center text-2xl pt-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className=" sm:px-[10px] px-[40px] mx-auto max-w-[600px] mt-7   ">
          <form
            action=""
            className="grid gap-[10px] sm:grid-cols-[70%_auto] grid-cols-1"
          >
            <input
              placeholder="Enter Email"
              type="text"
              className="w-[400px] h-[50px] pl-[6px] text-white bg-transparent outline-2 border-[2px]  rounded-[2px] "
            />
            <button className=" bg-[red] hover:bg-[rgba(193,17,25)]  duration-300 h-[50px] w-[160px] rounded-[3px] text-white font-medium">
              Get Started
              <FontAwesomeIcon icon={faGreaterThan} className="ml-[5px]" />
            </button>
          </form>
        </div>
      </section>
      {/*---------------- Frequently End -------------------- */}
      {/*---------------- Footer Start -------------------- */}
      <footer className="w-[100%] bg-black sm:py-[100px] py-[50px] border-t-[8px] border-t-[#605b5d]">
        <div className="max-w-[950px] mb-[10px]  text-white px-[15px] mx-auto">
          <h3 className="underline">
            <a href="tel:linkedin@gmail.com" className="text-[#ccc]">
              Questions? Contact us.
            </a>
          </h3>
          <div className="py-[30px] grid sm:grid-cols-4 grid-cols-1">
            <div className="">
              <ul>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Investor Relations
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Privacy
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Speed Test
                  </a>
                </li>
                <li className="mb-[10px]">
                  <div className="relative my-[20px]">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white  absolute	top-[9px] left-[5px]"
                      icon={faAmericanSignLanguageInterpreting}
                    />
                    <select
                      name=""
                      id=""
                      className="bg-black text-white border-[1px] rounded-[5px] sm:p-[5px_25px] p-[5px_25px] border-white"
                    >
                      <option value="">Urdu</option>
                      <option value="">Punjabi</option>
                      <option value="">Urdu</option>
                      <option value="">Punjabi</option>
                      <option value="">Urdu</option>
                      <option value="">Punjabi</option>
                      <option value="">Urdu</option>
                      <option value="">Punjabi</option>
                    </select>
                  </div>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Netflix Pakistan
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Jobs
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Cookie Preferences
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Legal Notices
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Account
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Ways to Watch
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Corporate Information
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Only on Netflix
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Media Center
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Terms of Use
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a href="" className=" text-[#ccc]  underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*---------------- Footer End -------------------- */}
    </>
  );
}

export default App;
