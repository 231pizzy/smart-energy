import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordSolar = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onComponent747ContainerClick = useCallback(() => {
    // Please sync "Check email (solar)" to the project
  }, []);

  const onBackToLoginClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-auto md:h-[995px] overflow-hidden flex flex-col md:flex-row items-start md:items-start justify-center md:justify-start gap-[40px] text-left text-37xl text-text font-lato">
  {/* left div */}
  <div className="hidden md:block w-[700px] relative h-[988px]">
    <img
      className="absolute top-[400.7px] w-[700px] h-[466.7px] overflow-hidden z-10"
      alt=""
      src="/sun-energybro-1.svg"
    />
    <div className="absolute top-[0px] left-[0px] bg-seashell-300 w-[750px] h-[995px] overflow-hidden flex flex-col items-center justify-start py-16 px-0 box-border z-0">
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <div className="bg-whitesmoke-200 flex flex-col items-center justify-center p-[8.994945526123047px] mb-5">
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
  
  {/* active div */}
  <div className="w-full md:w-[540px] h-auto md:h-[721px] overflow-hidden flex flex-col items-center justify-start gap-[32px] text-lg text-primary-color md:px-0">
    <div className="flex flex-col items-center justify-start gap-[64px] mt-10 md:mt-[277px] text-21xl text-text">
      <div className="flex flex-col items-center justify-start gap-[40px]">
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <b className="relative capitalize">Forgot Password</b>
          <div className="w-full md:w-[536px] relative text-xl leading-[30px] text-center inline-block">
            Enter the email address you used to create your account, a link will be sent to you to reset your password
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-xl">
          <div className="flex flex-col items-start justify-start gap-[16px] w-full">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[26px] font-medium">
                <span>Email</span>
                <span className="text-red"> *</span>
              </div>
            </div>
            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col w-full md:w-[500px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-lg h-8 w-full"
                  id="email"
                />
                </div>
                </form>
          </div>
          <div
            className="w-full md:w-[400px] rounded-81xl bg-primary-color flex flex-row items-center justify-center py-4 px-8 md:px-[200px] box-border cursor-pointer text-lg text-base-white"
            onClick={onComponent747ContainerClick}
          >
            <b className="relative capitalize">Send</b>
          </div>
        </div>
      </div>
      <b
        className="relative text-xl [text-decoration:underline] text-primary-color cursor-pointer"
        onClick={onBackToLoginClick}
      >
        Back to login
      </b>
    </div>
  </div>
</div>

  );
};

export default ForgotPasswordSolar;
