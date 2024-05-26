import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordsolar = () => {
  const navigate = useNavigate();

  const onComponent747ContainerClick = useCallback(() => {
    navigate("/reset-successfullysolar");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[995px] overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-[7px] box-border gap-[182px] text-left text-37xl text-text font-lato">
      <div className="w-[864px] relative h-[988px]">
        <img
          className="absolute top-[563.7px] left-[82px] w-[700px] h-[466.7px] overflow-hidden"
          alt=""
          src="/sun-energybro-1.svg"
        />
        <div className="absolute top-[0px] left-[0px] bg-seashell-300 w-[864px] h-[995px] overflow-hidden flex flex-col items-center justify-start py-16 px-0 box-border">
          <div className="flex flex-col items-start justify-start gap-[12px]">
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
      </div>
      <div className="flex flex-col items-center justify-start text-21xl">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <b className="relative capitalize">Reset Password</b>
          <div className="flex flex-col items-center justify-start gap-[63px] text-xl">
            <div className="flex flex-col items-start justify-start gap-[40px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[26px] font-medium">
                    <span>New Password</span>
                    <span className="text-red"> *</span>
                  </div>
                </div>
                <div className="w-[500px] rounded-lg bg-whitesmoke-100 box-border h-14 flex flex-row items-center justify-start py-3 px-4 gap-[327px] text-gray-400 border-[1px] border-solid border-line">
                  <div className="relative">*************</div>
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/component-788.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[26px] font-medium">
                    <span> Confirm Password</span>
                    <span className="text-red"> *</span>
                  </div>
                </div>
                <div className="w-[500px] rounded-lg bg-whitesmoke-100 box-border h-14 flex flex-row items-center justify-start py-3 px-4 gap-[327px] text-gray-400 border-[1px] border-solid border-line">
                  <div className="relative">*************</div>
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/component-788.svg"
                  />
                </div>
              </div>
            </div>
            <div
              className="w-[400px] rounded-81xl bg-primary-color flex flex-row items-center justify-center py-4 px-[200px] box-border cursor-pointer text-lg text-base-white"
              onClick={onComponent747ContainerClick}
            >
              <b className="relative capitalize">Create Password</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordsolar;
