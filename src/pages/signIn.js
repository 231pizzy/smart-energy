import { useCallback } from "react";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password-solar");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-solar");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/website");
  }, [navigate]);

  const onComponent747ContainerClick = useCallback(() => {
    // Please sync "Sign up complete(solar)" to the project
  }, []);

  const signin = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/website");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white min-h-screen overflow-hidden text-left text-37xl text-text font-lato">
    {/* left image part */}
    <div className="hidden md:block absolute top-0 left-0 w-1/2 h-[100%]">
      <div className="absolute top-0 left-0 bg-seashell-300 w-[700px] h-full" />
      <img
        className="absolute top-[400.7px] w-[700px] h-[466.7px] overflow-hidden"
        alt=""
        src="/sun-energybro-1.svg"
      />
      <div className="absolute top-[64px] left-[64px] flex flex-col items-start justify-start gap-[12px]">
        <div className="bg-whitesmoke-200 flex flex-col items-center justify-center p-[8.994945526123047px]">
          <img
            className="w-[182px] relative h-[70.6px]"
            alt=""
            src="/group-10466.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="w-[600px] relative capitalize font-extrabold text-2xl md:text-21xl inline-block">
            energy management system
          </div>
          <div className="w-[736px] relative text-5xl md:text-21xl leading-[150%] capitalize font-medium whitespace-pre-wrap inline-block">
            A smart way to manage your solar energy usage ...
          </div>
        </div>
      </div>
    </div>
    {/* input side */}
    <div className="absolute top-[80px] left-[50%] transform -translate-x-1/2 md:translate-x-0 md:left-[735px] flex flex-col items-center justify-center gap-[24px] md:gap-[48px] text-21xl mt-6 md:mt-16 w-full md:w-auto px-4 md:px-0 max-w-screen-sm mx-auto">
      <div className="flex flex-col items-center justify-start gap-[20px] md:gap-[40px] w-full">
        <b className="relative capitalize text-xl md:text-21xl text-center">Login To Your Account</b>
        <div className="flex flex-col items-center justify-start gap-[16px] md:gap-[32px] text-xl w-full">
          <div className="flex flex-col items-start justify-start gap-[20px] md:gap-[40px] w-full">
            <form onSubmit={signin} className="flex flex-col gap-4 w-full">
              <div className="flex flex-col w-full md:w-[500px]">
                <label htmlFor="email" className="mb-2 md:mb-6">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-lg h-8 w-auto"
                  id="email"
                />
              </div>
              <div className="flex flex-col w-full md:w-[500px] mb-8">
                <label htmlFor="password" className="mb-2 md:mb-6">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-3 rounded-lg h-8 w-auto"
                  id="password"
                />
              </div>
              {/* <p className="flex justify-end w-full md:w-[500px] mr-10 text-primary-color cursor-pointer" onClick={onForgotPasswordTextClick}>Forgot Password</p> */}
              <button
                className="bg-primary-color text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer w-full md:w-[500px]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[16px] md:gap-[32px] text-lg">
        {/* <div
          className="relative text-lg md:text-xl font-medium cursor-pointer text-primary-color">
          <span className="text-text">Don't have an account?</span>
          <span>{` `}</span>
          <span>
            <span className="[text-decoration:underline]" onClick={dontAlreadyHaveAnClick}>
              Click here to create one
            </span>
          </span>
        </div> */}
      </div>
    </div>
  </div>
  
  


  );
};

export default SignIn;






