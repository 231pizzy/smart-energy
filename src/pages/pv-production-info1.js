import { useCallback } from "react";
import FrameComponent1 from "../components/frame-component1";
import { useNavigate } from "react-router-dom";

const PvProductionInfo1 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/pv-production-info");
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
      <div className="absolute top-[160px] left-[978px] flex flex-col items-center justify-start gap-[40px] text-21xl">
        <div className="flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[40px]">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start gap-[16px]">
                  <b className="relative capitalize">Step -2</b>
                  <div className="w-[614px] relative text-xl leading-[30px] font-medium text-center inline-block">{`Fill your solar information to get a correct usage analysis and prediction of solar energy `}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start text-center text-lg text-primary-color">
              <div className="w-[130px] bg-seashell-100 box-border flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-primary-color">
                <div className="relative font-medium">
                  <p className="m-0">{`Weather `}</p>
                  <p className="m-0">forecast</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-2.5 px-2">
                <img
                  className="w-20 relative max-h-full"
                  alt=""
                  src="/line-10.svg"
                />
              </div>
              <div className="w-[130px] bg-whitesmoke-200 flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative font-medium">
                  <p className="m-0">{`Pv `}</p>
                  <p className="m-0">Production</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-2.5 px-2">
                <img
                  className="w-20 relative max-h-full"
                  alt=""
                  src="/line-11.svg"
                />
              </div>
              <div className="w-[130px] bg-whitesmoke-200 box-border flex flex-row items-center justify-center p-2.5 text-text border-[1px] border-solid border-line">
                <div className="relative font-medium">
                  <p className="m-0">{`Electricity `}</p>
                  <p className="m-0">consumption</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <FrameComponent1
              fullName="Solar capacity"
              prop="*"
              xyzgmailcom="0kwh"
            />
            <FrameComponent1 fullName="Solar panel" prop=" *" xyzgmailcom="0" />
          </div>
        </div>
        <div className="w-[400px] rounded-81xl bg-primary-color flex flex-row items-center justify-center py-4 px-[200px] box-border text-lg text-base-white">
          <b className="relative capitalize">Next</b>
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

export default PvProductionInfo1;
