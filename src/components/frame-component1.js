const FrameComponent1 = ({ fullName, prop, xyzgmailcom }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] text-left text-xl text-text font-lato">
      <div className="flex flex-row items-center justify-start">
        <div className="relative leading-[26px] font-medium">
          <span>{fullName}</span>
          <span className="text-red">{prop}</span>
        </div>
      </div>
      <div className="w-[500px] relative rounded-lg bg-whitesmoke-100 box-border h-14 text-lg text-gray-400 border-[1px] border-solid border-line">
        <div className="absolute top-[17px] left-[17px] font-medium">
          {xyzgmailcom}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
