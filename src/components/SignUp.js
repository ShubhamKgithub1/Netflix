import { useState } from "react";
import Header from "./Header";
const SignUp = () => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState(false);
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg')] bg-cover bg-center h-[75vh]">
      <div className="bg-custom-gradient h-full relative">
        <Header />
        <div className="text-white flex flex-col items-center justify-center h-[80%] space-y-6">
          <h1 className="text-5xl font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="text-2xl">Watch anywhere. Cancel anytime.</h3>
          <p className="text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex gap-4">
            <div
              className={`relative border border-slate-400 rounded-md w-96 ${
                isActive ? "bg-custom-input" : "bg-transparent"
              } transition-all duration-300 px-1`}
            >
              <div
                className={`absolute left-3 h-4 ${
                  isActive ? "top-0 text-custom-gray text-sm" : "top-[25%]"
                }  transition-all transform duration-150`}
              >
                Email address
              </div>
              <div>
                <input
                  type="text"
                  className="p-2 mt-3 bg-transparent outline-none w-[100%]"
                  onFocus={() => setIsActive(true)}
                  // {isFilled && onBlur={() => setIsActive(false)}}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() =>
                    email ? setIsActive(true) : setIsActive(false)
                  }
                />
              </div>
            </div>

            <button className="px-6 py-2 bg-custom-red text-white text-2xl font-semibold rounded-md">
              Get Started &gt;{" "}
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 h-3 w-full bg-[rgb(35,35,35)]"></div>
      </div>
      <div className="h-[60vh] bg-black text-white">
        <div className=" flex items-center w-[60%] mx-auto">
          <div className="max-w-[50%] flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Enjoy on your TV</h1>
            <p className="text-[1.5rem] font-normal">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
              className="block w-auto relative z-20"
            />
            <div>
            <video
              className="absolute top-[50%] left-[50%] transform -translate-x-[51%] -translate-y-[54%]"
              width="416"
              autoPlay muted loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
