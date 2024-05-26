import React from 'react'
import SideBar from '../components/SideBar'
import Settings from '../components/Settings'

function SettingsPage() {
  return (
    <div className='flex'>
        <SideBar/>
       <Settings/>
    </div>
  )
}

export default SettingsPage
