import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ResetSuccessfullysolar = () => {
  const navigate = useNavigate();

  const onComponent747ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[152px] text-left text-37xl text-text font-lato">
      <div className="flex-1 h-[988px] flex flex-col items-center justify-start gap-[208px]">
        <div className="w-[864px] bg-seashell-300 overflow-hidden flex flex-col items-center justify-start py-16 px-0 box-border">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="bg-whitesmoke-200 flex flex-col items-center justify-center p-[8.994945526123047px]">
              <img
                className="w-[182px] relative h-[70.6px]"
                alt=""
                src="/group-10466.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="w-[736px] relative capitalize font-extrabold inline-block">
                energy management system
              </div>
              <div className="w-[736px] relative text-5xl leading-[150%] capitalize font-medium whitespace-pre-wrap inline-block">
                A smart way to manage your solar energy usage ...
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[700px] relative h-[466.7px] overflow-hidden shrink-0"
          alt=""
          src="/sun-energybro-1.svg"
        />
      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-end text-21xl">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <b className="relative capitalize">Pasword reset Successfully</b>
            <div className="w-[536px] relative text-xl leading-[30px] font-medium text-center inline-block">
              Login to your with your new password
            </div>
          </div>
          <div
            className="w-[400px] rounded-81xl bg-primary-color flex flex-row items-center justify-center py-4 px-[200px] box-border cursor-pointer text-center text-lg text-base-white"
            onClick={onComponent747ContainerClick}
          >
            <b className="flex-1 relative capitalize">Login</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessfullysolar;
