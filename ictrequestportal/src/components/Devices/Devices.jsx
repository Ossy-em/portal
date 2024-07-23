import React, { useState } from 'react';
import './Devices.css';

const Devices = () => {
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [otherDevice, setOtherDevice] = useState('');

  const devices = [
    'Desktop',
    'Laptop',
    'Mouse',
    'Keyboard',
    'Scanner',
    'Printer'
  ];

  const handleCheckboxChange = (device) => {
    setSelectedDevices(prevState =>
      prevState.includes(device)
        ? prevState.filter(d => d !== device)
        : [...prevState, device]
    );
  };

  const handleOtherDeviceChange = (e) => {
    setOtherDevice(e.target.value);
  };

  return (
    <div className="devices">
      <h3 className="devices-title">What hardware items do you need?</h3>
      <div className="device-options">
        {devices.map((device, index) => (
          <div key={index} className="form-group">
            <label className="device-label">
              <input
                type="checkbox"
                className="device-checkbox"
                value={device}
                onChange={() => handleCheckboxChange(device)}
              />
              {device}
            </label>
          </div>
        ))}
        <div className="form-group">
          <label className="device-label">
            <input
              type="checkbox"
              className="device-checkbox"
              value="Other"
              onChange={() => handleCheckboxChange('Other')}
            />
            Other:
            <input
              type="text"
              className="device-input"
              value={otherDevice}
              onChange={handleOtherDeviceChange}
              placeholder="Specify other device"
              disabled={!selectedDevices.includes('Other')}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Devices;
