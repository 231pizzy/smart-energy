import { useCallback } from "react";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import { useNavigate } from "react-router-dom";

const SignUpSolar1 = () => {
  const navigate = useNavigate();

  const onComponent747ContainerClick = useCallback(() => {
    // Please sync "Sign up complete(solar)" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/website");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[995px] overflow-hidden text-left text-37xl text-text font-lato">
      <div className="absolute top-[0px] left-[0px] w-[864px] h-[988px]">
        <div className="absolute top-[0px] left-[0px] bg-seashell-300 w-[864px] h-[995px]" />
        <img
          className="absolute top-[563.7px] left-[82px] w-[700px] h-[466.7px] overflow-hidden"
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
            <div className="w-[736px] relative capitalize font-extrabold inline-block">
              energy management system
            </div>
            <div className="w-[736px] relative text-5xl leading-[150%] capitalize font-medium whitespace-pre-wrap inline-block">
              A smart way to manage your solar energy usage ...
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[80px] left-[1046px] flex flex-col items-center justify-start gap-[48px] text-21xl">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <b className="relative capitalize">Create Your Account</b>
          <div className="flex flex-col items-center justify-start gap-[32px] text-xl">
            <div className="flex flex-col items-start justify-start gap-[40px]">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <FrameComponent1
                  fullName="Full name"
                  prop=" *"
                  xyzgmailcom="xyz@gmail.com"
                />
                <FrameComponent1
                  fullName="Email"
                  prop=" *"
                  xyzgmailcom="xyz@gmail.com"
                />
                <div className="flex flex-col items-end justify-start">
                  <FrameComponent
                    password="Create password"
                    propColor="#3d3d3d"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="w-8 relative h-8">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[2px] border-solid border-darkslategray-100" />
                  </div>
                  <div className="w-[444px] relative leading-[26px] font-medium inline-block shrink-0">
                    I have read and agree to the T
                    <span className="[text-decoration:underline]">{`erms and Condition `}</span>
                    of Smart energy management system
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[400px] rounded-81xl bg-primary-color flex flex-row items-center justify-center py-4 px-[200px] box-border cursor-pointer text-lg text-base-white"
              onClick={onComponent747ContainerClick}
            >
              <div className="relative capitalize font-semibold">
                Create Account
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[32px] text-lg">
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[151px] relative box-border h-px border-t-[1px] border-solid border-darkslategray-200" />
              <div className="relative leading-[26px]">{`Or sign up with `}</div>
              <div className="w-[151px] relative box-border h-px border-t-[1px] border-solid border-darkslategray-200" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px] text-xl">
              <div className="rounded bg-seashell-400 flex flex-row items-start justify-start py-4 px-8 gap-[16px] border-[1.5px] border-solid border-line">
                <img
                  className="w-[27px] relative h-[27px]"
                  alt=""
                  src="/group.svg"
                />
                <div className="relative leading-[26px] font-semibold">
                  Google
                </div>
              </div>
              <div className="rounded bg-seashell-400 flex flex-row items-start justify-start py-4 px-8 gap-[16px] border-[1.5px] border-solid border-line">
                <img
                  className="w-[27px] relative h-[27px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
                <div className="relative leading-[26px] font-semibold">
                  Facebook
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative text-xl font-medium cursor-pointer text-primary-color"
            onClick={onAlreadyHaveAnClick}
          >
            <span className="text-text">Already have an account ?</span>
            <span>{` `}</span>
            <span>
              <span className="[text-decoration:underline]">
                Click here to login
              </span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[80px] left-[904px] flex flex-row items-center justify-start py-2 px-4 gap-[10px] cursor-pointer text-lg text-primary-color"
        onClick={onFrameContainer1Click}
      >
        <img
          className="w-[10.2px] relative h-[17.8px] object-contain"
          alt=""
          src="/vector.svg"
        />
        <div className="relative font-medium">Back</div>
      </div>
    </div>
  );
};

export default SignUpSolar1;
