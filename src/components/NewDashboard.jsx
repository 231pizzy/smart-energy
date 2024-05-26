import React, { useState } from 'react'

function NewDashboard({ sideBar }) {
    const [productionType, setProductionType] = useState("actual");
    const [consumptionType, setConsumptionType] = useState("actual");

    const getProductionImage = (type) => {
        switch (type) {
            case "actual-and-predicted":
                return "/prodAP.png"; // Actual & Predicted image
            case "predicted":
                return "/prodP.png"; // Predicted image
            case "actual":
            default:
                return "/actualProd.png"; // Actual image
        }
    };


    const getConsumptionImage = (type) => {
        switch (type) {
            case "actual-and-predicted":
                return "/consAP.png"; // Actual & Predicted image
            case "predicted":
                return "/consP.png"; 
            case "actual":
            default:
                return "/Actualcons.png";
        }
    };

    return (
        <div className={`w-full ${!sideBar && "lg:ml-64"} h-full`}>
            <div style={{ height: "80px", border: "1px solid gray", display: "flex", justifyContent: 'space-between', alignContent: "center", alignItems: "center" }}>
                <img className="w-[91px] h-[35.3px] ml-12" alt="" src="/group-10466.svg" />
                <div className="flex flex-row items-center justify-end py-2 px-3 gap-[16px] lg:mr-12 mr-1">
                    <img className="w-10 h-10 relative rounded-[50%]" alt="" src="/aisvarya-adeseye.jpeg" />
                    <b className="relative leading-[26px] capitalize">Aisvarya</b>
                </div>
            </div>

            <div style={{ height: "50px", backgroundColor: "#FFF4F1", alignContent: "center", alignItems: "center" }} className='flex justify-end lg:mr-12 mr-1'>
                <div className="relative flex items-center mr-6 bg-gray-50 h-6 rounded-md">
                    <span>Date :</span>
                    <select defaultValue="today" className="ml-2 text-text font-bold bg-whitesmoke border-none outline-none cursor-pointer">
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="this week">This Week</option>
                        <option value="this month">This Month</option>
                        <option value="last month">Last Month</option>
                        <option value="next day">Next Day</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>

            </div>

            <div className="flex flex-col items-center justify-start gap-10 md:gap-[44px] text-center text-2xl md:text-4xl mt-5">
                <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[40px]">
                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-6 gap-[24px] border-[1px] border-solid border-line">
                        <b className="w-[230px] text-xl md:text-2xl capitalize">
                            <p className="m-0">Total energy</p>
                            <p className="m-0">generated</p>
                        </b>
                        <div className="text-4xl md:text-21xl capitalize text-green text-left">3,200kw</div>
                    </div>
                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-6 gap-[24px] border-[1px] border-solid border-line">
                        <b className="w-[230px] text-xl md:text-2xl capitalize">
                            <p className="m-0">Total energy</p>
                            <p className="m-0">consumed</p>
                        </b>
                        <div className="text-4xl md:text-21xl capitalize text-primary-color text-left">1,200kwh</div>
                    </div>
                    <div className="shadow-[8px_16px_24px_rgba(28,_29,_34,_0.06)] bg-base-white flex flex-col items-center justify-start p-6 gap-[24px] border-[1px] border-solid border-line">
                        <b className="w-[230px] text-xl md:text-2xl capitalize">
                            <p className="m-0">Total energy</p>
                            <p className="m-0">stored</p>
                        </b>
                        <div className="text-4xl md:text-21xl capitalize text-deepskyblue text-left">2,000kwh</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-6 px-4 flex-col md:flex-row w-full">
                {/* firstbox */}
                <div className="w-full md:w-1/2 border border-gray-100 lg:ml-4">
                    <div className="h-[80px] flex justify-between items-center">
                        <h1 className="lg:text-lg text-sm font-semibold font-lato text-text ml-3">ENERGY PRODUCTION</h1>
                        <div className="relative flex items-center justify-center">
                            <span>Type:</span>
                            <select
                                value={productionType}
                                onChange={(e) => setProductionType(e.target.value)}
                                className="ml-2 text-text font-bold bg-whitesmoke border-none outline-none cursor-pointer text-lg"
                            >
                                <option value="actual-and-predicted">Actual & Predicted</option>
                                <option value="predicted">Predicted</option>
                                <option value="actual">Actual</option>
                            </select>
                        </div>
                    </div>
                    <img
                        className="w-full"
                        alt="Production"
                        src={getProductionImage(productionType)}
                    />
                </div>

                {/* secondbox */}
                <div className="w-full md:w-1/2 border border-gray-100 mr-4">
                    <div className="h-[80px] flex justify-between items-center">
                        <h1 className="lg:text-lg text-sm font-semibold font-lato text-text ml-3">ENERGY CONSUMPTION</h1>
                        <div className="relative flex items-center justify-center">
                            <span>Type:</span>
                            <select
                                value={consumptionType}
                                onChange={(e) => setConsumptionType(e.target.value)}
                                className="ml-2 text-text font-bold bg-whitesmoke border-none outline-none cursor-pointer text-lg"
                            >
                                <option value="actual-and-predicted">Actual & Predicted</option>
                                <option value="predicted">Predicted</option>
                                <option value="actual">Actual</option>
                            </select>
                        </div>
                    </div>
                    <img
                        className="w-full"
                        alt="Consumption"
                        src={getConsumptionImage(consumptionType)}
                    />
                </div>
            </div>


        </div>
    )
}

export default NewDashboard
