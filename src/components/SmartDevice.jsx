import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function SmartDevice() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Anytime Off');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [devices, setDevices] = useState([]);
    const [newDeviceName, setNewDeviceName] = useState('');
    const [newDeviceIP, setNewDeviceIP] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const handleAddDeviceClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleAddDevice = () => {
        if (newDeviceName && newDeviceIP) {
            setDevices([...devices, { name: newDeviceName, ip: newDeviceIP }]);
            setNewDeviceName('');
            setNewDeviceIP('');
            setIsModalOpen(false);
        }
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedDevices = Array.from(devices);
        const [removed] = reorderedDevices.splice(result.source.index, 1);
        reorderedDevices.splice(result.destination.index, 0, removed);

        setDevices(reorderedDevices);
    };

    return (
        <div className="w-full lg:ml-64 h-full">
            <div style={{ height: "70px", border: "1px solid gray", display: "flex", justifyContent: 'space-between', alignContent: "center", alignItems: "center" }}>
                <img className="w-[91px] h-[35.3px] ml-12" alt="" src="/group-10466.svg" />
                <div className="flex flex-row items-center justify-end py-2 px-3 gap-[16px] lg:mr-12 mr-1">
                    <img className="w-10 h-10 relative rounded-[50%]" alt="" src="/aisvarya-adeseye.jpeg" />
                    <b className="relative leading-[26px] capitalize">Aisvarya</b>
                </div>
            </div>

            <div className="w-full mt-4 lg:px-6 px-1">
                <div className="flex h-[40px] text-sm lg:ml-4 w-full justify-center">
                    <div className="p-2 items-center flex flex-1 text-[8px] lg:text-sm" style={{ border: "1px solid gray" }}>
                        <h2>Usage Priority</h2>
                    </div>
                    <div className="p-2 items-center flex flex-1 text-[8px] lg:text-sm" style={{ border: "1px solid gray" }}>
                        <h2>Device Name</h2>
                    </div>
                    <div className="p-2 items-center flex flex-1 text-[8px] lg:text-sm" style={{ border: "1px solid gray" }}>
                        <h2>IP Address</h2>
                    </div>
                    <div className="p-2 flex justify-between items-center flex-1 relative text-[10px] lg:text-sm" style={{ border: "1px solid gray" }}>
                        <h2>Usage</h2>
                        <MdOutlineArrowDropDown className="text-xl cursor-pointer" onClick={toggleDropdown} />
                        {isDropdownOpen && (
                            <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <ul className="py-1 list-none">
                                    {['Anytime Off', 'Storage Excess', 'Peak Sharing'].map((option) => (
                                        <li
                                            key={option}
                                            className={`px-4 py-2 cursor-pointer flex items-center ${selectedOption === option ? 'text-primary-color' : ''}`}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {selectedOption === option && <span className="mr-2">✓</span>}
                                            <span>{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center ml-4 lg:mr-16 mr-2 bg-slate-50 p-2 rounded-md cursor-pointer" style={{ border: "1px solid gray" }} onClick={handleAddDeviceClick}>
                        <FaPlus className="text-primary-color" />
                    </div>
                </div>

                {/* Device List with Drag-and-Drop */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="devices">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {devices.map((device, index) => (
                                    <Draggable key={index} draggableId={String(index)} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="flex h-[40px] lg:ml-4 w-full justify-center text-lg"
                                            >
                                                <div className="p-2 items-center flex flex-1 text-[12px] lg:text-lg" style={{ border: "1px solid gray" }}>
                                                    <p>Usage Priority</p>
                                                </div>
                                                <div className="p-2 items-center flex flex-1" style={{ border: "1px solid gray" }}>
                                                    <p>{device.name}</p>
                                                </div>
                                                <div className="p-2 items-center flex flex-1" style={{ border: "1px solid gray" }}>
                                                    <p>{device.ip}</p>
                                                </div>
                                                <div className="p-2 flex justify-between items-center flex-1 relative" style={{ border: "1px solid gray" }}>
                                                    <p>Usage</p>
                                                    <MdOutlineArrowDropDown className="text-xl cursor-pointer" onClick={toggleDropdown} />
                                                    {isDropdownOpen && (
                                                        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                                            <ul className="py-1 list-none">
                                                                {['Anytime Off', 'Storage Excess', 'Peak Sharing'].map((option) => (
                                                                    <li
                                                                        key={option}
                                                                        className={`px-4 py-2 cursor-pointer flex items-center ${selectedOption === option ? 'text-primary-color' : ''}`}
                                                                        onClick={() => handleOptionSelect(option)}
                                                                    >
                                                                        {selectedOption === option && <span className="mr-2">✓</span>}
                                                                        <span>{option}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ml-6 lg:ml-4 lg:mr-16 p-4"></div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-96">
                        <h2 className="text-xl mb-4 items-center justify-center flex">Add Device</h2>
                        <div className="mb-4">
                            <label className="block mb-2">Device Name</label>
                            <input
                                type="text"
                                value={newDeviceName}
                                onChange={(e) => setNewDeviceName(e.target.value)}
                                className="w-80 px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">IP Address</label>
                            <input
                                type="text"
                                value={newDeviceIP}
                                onChange={(e) => setNewDeviceIP(e.target.value)}
                                className="w-80 px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleModalClose}
                                className="px-4 py-2 bg-gray-100 rounded-md mr-2 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddDevice}
                                className="px-4 py-2 bg-primary-color text-white rounded-md cursor-pointer"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SmartDevice;
