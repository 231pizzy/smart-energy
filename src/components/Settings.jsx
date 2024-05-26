import React, { useState } from 'react'

function Settings() {
  const [notificationChecked, setNotificationChecked] = useState(false);
  const [email, setEmail] = useState('aisvarya@brilloconnetz.com');
  const [emailChecked, setEmailChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+94 87 345 0987');
  const [phoneChecked, setPhoneChecked] = useState(false);



  return (
    <div className="w-full lg:ml-64 h-full flex flex-col items-center justify-center">
          <div style={{ height: "70px", border: "1px solid gray", display: "flex", justifyContent: 'space-between', alignContent: "center", alignItems: "center" }} className='w-full'>
                <img className="w-[91px] h-[35.3px] ml-12" alt="" src="/group-10466.svg" />
                <div className="flex flex-row items-center justify-end py-2 px-3 gap-[16px] lg:mr-12 mr-1">
                    <img className="w-10 h-10 relative rounded-[50%]" alt="" src="/aisvarya-adeseye.jpeg" />
                    <b className="relative leading-[26px] capitalize">Aisvarya</b>
                </div>
            </div>

            <div className='mt-6 w-screen lg:w-1/2 h-96 rounded-md p-4' style={{ border: "1px solid gray" }}>
        <h1 className='flex items-center justify-center mb-4'>Peak Sharing</h1>

        <div className='flex items-center mb-4 justify-center'>
          <h3 className='flex mr-6'>Notification:</h3>
          <input 
            type="checkbox"
            checked={notificationChecked}
            onChange={() => setNotificationChecked(!notificationChecked)}
            className="ml-2 h-5 w-5"
          />
        </div>

        <div className='flex items-center mb-4 justify-center'>
          <h3 className='ml-10 mr-10'>Email:</h3>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 px-3 py-2 border border-gray-300 rounded-md mr-4 lg:mr-10"
          />
          <input 
            type="checkbox"
            checked={emailChecked}
            onChange={() => setEmailChecked(!emailChecked)}
            className="lg:ml-2 mr-6 h-8 w-8"
          />
        </div>

        <div className='flex items-center justify-center'>
          <h3 className='ml-10 mr-10'>Phone Number:</h3>
          <input 
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-96 px-3 py-2 border border-gray-300 rounded-md mr-10"
          />
          <input 
            type="checkbox"
            checked={phoneChecked}
            onChange={() => setPhoneChecked(!phoneChecked)}
            className="lg:ml-2 mr-6 h-10 w-10"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Settings
