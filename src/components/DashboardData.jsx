import PropTypes from 'prop-types';
import Property1predictOff from './property1predict';
import { FaBars } from 'react-icons/fa';

  function DashBoardData({ className = "", sideBar }) {
    return (
        <div className={`bg-base-white w-full flex flex-col items-center justify-start pt-0 px-0 pb-2 box-border gap-10 md:gap-[61px] text-right text-[16px] md:text-[20px] text-text font-lato ${className} ${sideBar ? "" : "ml-64"}`}>
            <div className="w-full max-w-screen-xl flex flex-col items-center justify-start">
                <div className="w-full shadow-[8px_16px_24px_rgba(28,_29,_34,_0.08)] bg-base-white h-[100px] flex flex-row items-center justify-between py-[22px] px-4 md:px-10 box-border">
                    <div className="flex flex-col items-center justify-center p-[4.5px]">
                        <img className="w-[91px] h-[35.3px]" alt="" src="/group-10466.svg" />
                    </div>
                    <div className="flex flex-row items-center justify-end py-2 px-3 gap-[16px]">
                        <img className="w-10 h-10 relative rounded-[50%]" alt="" src="/aisvarya-adeseye.jpeg" />  
                        <b className="relative leading-[26px] capitalize">Aisvarya</b>
                    </div>
                </div>

                <div className="w-full bg-seashell flex flex-col items-end justify-start py-6 px-4 md:px-16 box-border text-left text-lg text-gray-100">

                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] rounded-lg bg-whitesmoke flex flex-row items-center justify-center p-4 gap-[8px] border-[1px] border-solid border-line">
                        <img className="w-[15px] h-[16.7px]" alt="" src="/frame-617303.svg" />
                        <div className="relative flex items-center">
                            <span>Date :</span>
                            <select defaultValue="custom" className="ml-2 text-text font-bold bg-whitesmoke border-none outline-none cursor-pointer">
                                <option value="this-week">This Week</option>
                                <option value="last-week">Last Week</option>
                                <option value="custom">Custom</option>
                            </select>
                        </div>
                    </div>


                </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-10 md:gap-[44px] text-center text-2xl md:text-5xl">
                <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[40px]">
                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-6 gap-[24px] border-[1px] border-solid border-line">
                        <b className="w-[245px] text-xl md:text-2xl capitalize">
                            <p className="m-0">Total energy</p>
                            <p className="m-0">generated</p>
                        </b>
                        <div className="text-4xl md:text-21xl capitalize text-green text-left">3,200kw</div>
                    </div>
                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-6 gap-[24px] border-[1px] border-solid border-line">
                        <b className="w-[245px] text-xl md:text-2xl capitalize">
                            <p className="m-0">Total energy</p>
                            <p className="m-0">consumed</p>
                        </b>
                        <div className="text-4xl md:text-21xl capitalize text-primary-color text-left">1,200kwh</div>
                    </div>
                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-6 gap-[24px] border-[1px] border-solid border-line">
                        <b className="w-[245px] text-xl md:text-2xl capitalize">
                            <p className="m-0">Total energy</p>
                            <p className="m-0">stored</p>
                        </b>
                        <div className="text-4xl md:text-21xl capitalize text-deepskyblue text-left">2,000kwh</div>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col lg:flex-row  items-start justify-start gap-[44px] text-base ${sideBar ? "" : "ml-12"}`}>
                {/* energy Production */}
          <div className="lg:w-[778px] w-full relative shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white box-border h-[834px] border-[1px] border-solid border-line">
            <div className="absolute lg:top-[254px] lg:left-[40px] top-[100px] left-[10px] lg:w-[698px] lg:h-[512px] w-[calc(100% - 20px)] h-[calc(100% - 110px)]">
              <div className="absolute top-[493px] left-[79px] flex flex-row items-start justify-start gap-[63px] text-left">
                <div className="relative font-medium">11am</div>
                <div className="relative font-medium">12pm</div>
                <div className="relative font-medium">1pm</div>
                <div className="relative font-medium">2pm</div>
                <div className="relative font-medium">3pm</div>
                <div className="relative font-medium">4pm</div>
                <div className="relative font-medium">5pm</div>
              </div>
              <img
                className="relative w-[611px] h-[469px]"
                alt=""
                src="/union.svg"
              />
              <div className="absolute top-[2px] left-[0px] flex flex-col items-center justify-start gap-[64px]">
                <div className="relative font-medium">100kw</div>
                <div className="relative font-medium">80kw</div>
                <div className="relative font-medium">60kw</div>
                <div className="relative font-medium">40kw</div>
                <div className="relative font-medium">20kw</div>
                <div className="relative font-medium">0kw</div>
              </div>
              <img
                className="absolute top-[78px] left-[71px] w-[618px] h-[391px]"
                alt=""
                src="/graph-1.svg"
              />
              <img
                className="absolute top-[2178.5px] left-[16px] w-[695.7px] h-[200.5px]"
                alt=""
              />
              <div className="absolute top-[19px] left-[81px] w-[607px] h-[455px]">
                <img
                  className="absolute top-[0px] left-[112px] w-[495px] h-[455px]"
                  alt=""
                  src="/group-10468.svg"
                />
                <div className="absolute top-[1px] left-[0px] w-[607px] h-[400px]">
                  <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[79.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[159.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[239.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[319.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[399.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[235px] left-[180px] w-[150px] h-[230px] text-smi text-gray-200 font-manrope">
                <div className="absolute top-[98px] left-[12.3px] flex flex-col items-center justify-start gap-[2px]">
                  <div className="w-3.5 relative rounded-[50%] bg-steelblue-100 box-border h-3.5 border-[2px] border-solid border-steelblue-200" />
                  <div className="w-px relative box-border h-[121px] border-r-[1px] border-dashed border-steelblue-100" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[150px] h-[101px]">
                  <div className="relative shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] [backdrop-filter:blur(3px)] bg-base-white w-[150px] h-[100px]">
                    <img
                      className="absolute top-[100px] left-[4.2px] w-6 h-[20.5px]"
                      alt=""
                    />
                    <div className="absolute top-[0px] left-[0px] shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] rounded-lg bg-base-white box-border w-[150px] h-[87px] border-[1px] border-solid border-color" />
                  </div>
                  <div className="absolute top-[12px] left-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-col items-end justify-start">
                        <div className="relative">12:30pm</div>
                      </div>
                      <div className="relative text-sm font-semibold font-lato text-text">
                        PV Production
                      </div>
                    </div>
                    <div className="relative font-extrabold font-lato text-steelblue-100">
                      30kw
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[778px] h-[88px] text-5xl border-[1px] border-solid border-line">
              <b className="absolute top-[29.5px] left-[31px] uppercase">{`Energy Production `}</b>
              <Property1predictOff
                property1predictOffPosition="absolute"
                property1predictOffTop="16px"
                property1predictOffRight="24px"
                property1predictOffLeft="unset"
              />
            </div>
            <div className="absolute top-[123px] left-[32px] shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-4 gap-[16px] text-lg border-[1px] border-solid border-line">
              <b className="relative capitalize whitespace-pre-wrap">{`production prediction for 22/05/2024  `}</b>
              <b className="relative text-5xl capitalize text-steelblue-100 text-left">
                85 kw
              </b>
            </div>
          </div>
          {/* energy consumption */}
          <div className="w-[778px] relative shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white box-border h-[834px] border-[1px] border-solid border-line">
            <div className="absolute top-[254px] left-[40px] w-[698px] h-[512px]">
              <div className="absolute top-[493px] left-[79px] flex flex-row items-start justify-start gap-[63px] text-left">
                <div className="relative font-medium">11am</div>
                <div className="relative font-medium">12pm</div>
                <div className="relative font-medium">1pm</div>
                <div className="relative font-medium">2pm</div>
                <div className="relative font-medium">3pm</div>
                <div className="relative font-medium">4pm</div>
                <div className="relative font-medium">5pm</div>
              </div>
              <img
                className="relative w-[611px] h-[469px]"
                alt=""
                src="/union.svg"
              />
              <div className="absolute top-[2px] left-[0px] flex flex-col items-center justify-start gap-[64px]">
                <div className="relative font-medium">100kw</div>
                <div className="relative font-medium">80kw</div>
                <div className="relative font-medium">60kw</div>
                <div className="relative font-medium">40kw</div>
                <div className="relative font-medium">20kw</div>
                <div className="relative font-medium">0kw</div>
              </div>
              <img
                className="absolute top-[341px] left-[71px] w-[618px] h-32"
                alt=""
                src="/graph-11.svg"
              />
              <img
                className="absolute top-[2178.5px] left-[16px] w-[695.7px] h-[200.5px]"
                alt=""
              />
              <div className="absolute top-[19px] left-[81px] w-[607px] h-[455px]">
                <img
                  className="absolute top-[0px] left-[112px] w-[495px] h-[455px]"
                  alt=""
                  src="/group-10468.svg"
                />
                <div className="absolute top-[1px] left-[0px] w-[607px] h-[400px]">
                  <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[79.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[159.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[239.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[319.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[399.5px] left-[-0.5px] box-border w-[608px] h-px border-t-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
              <div className="absolute top-[297px] left-[274px] w-[150px] h-[170px] text-smi text-gray-200 font-manrope">
                <div className="absolute top-[98px] left-[12.3px] flex flex-col items-center justify-start gap-[2px]">
                  <div className="w-3.5 relative rounded-[50%] bg-purple box-border h-3.5 border-[2px] border-solid border-violet" />
                  <div className="w-px relative box-border h-[61px] border-r-[1px] border-dashed border-purple" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[150px] h-[101px]">
                  <div className="relative shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] [backdrop-filter:blur(3px)] bg-base-white w-[154px] h-[100px]">
                    <img
                      className="absolute top-[100px] left-[4.4px] w-[24.6px] h-[20.5px]"
                      alt=""
                    />
                    <div className="absolute top-[0px] left-[0px] shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] rounded-lg bg-base-white box-border w-[154px] h-[87px] border-[1px] border-solid border-color" />
                  </div>
                  <div className="absolute top-[12px] left-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-col items-end justify-start">
                        <div className="relative"> 12:30pm</div>
                      </div>
                      <div className="relative text-sm font-semibold font-lato text-text">
                        Energy Consumption
                      </div>
                    </div>
                    <div className="relative font-extrabold font-lato text-purple">
                      15w
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[779px] h-[88px] text-5xl border-[1px] border-solid border-line">
              <b className="absolute top-[29.5px] left-[31px] uppercase">
                Energy consumption
              </b>
              <Property1predictOff
                property1predictOffPosition="absolute"
                property1predictOffTop="16px"
                property1predictOffRight="unset"
                property1predictOffLeft="565px"
              />
            </div>
            <div className="absolute top-[123px] left-[32px] shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-4 gap-[16px] text-lg border-[1px] border-solid border-line">
              <b className="relative capitalize">
                Consumption prediction For 22/05/2024
              </b>
              <b className="relative text-5xl capitalize text-purple text-left">
                85 kw
              </b>
            </div>
          </div>
        </div>
      </div>

    );
};

DashBoardData.propTypes = {
    className: PropTypes.string
};

export default DashBoardData;
