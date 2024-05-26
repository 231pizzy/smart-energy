import { useMemo } from "react";

const FrameComponent = ({ password, propColor }) => {
  const passwordStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="flex flex-col items-start justify-start gap-[16px] text-left text-xl text-gray-300 font-lato">
      <div className="flex flex-row items-center justify-start">
        <div className="relative leading-[26px] font-medium">
          <span style={passwordStyle}>{password}</span>
          <span className="text-red"> *</span>
        </div>
      </div>
      <div className="w-[500px] relative rounded-lg bg-whitesmoke-100 box-border h-14 text-gray-400 border-[1px] border-solid border-line">
        <img
          className="absolute top-[12px] left-[452px] w-8 h-8 overflow-hidden"
          alt=""
          src="/component-788.svg"
        />
        <div className="absolute top-[20px] left-[20px]">*************</div>
      </div>
    </div>
  );
};

export default FrameComponent;
