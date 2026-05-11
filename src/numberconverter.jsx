import { useState } from 'react';
import { Header } from './app_header';

export default function NumberConverter() {
  const [decimal, setDecimal] = useState('');
  const [hex, setHex] = useState('');
  const [binary, setBinary] = useState('');

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);
    
    if (value === '' || value === '-') {
      setHex('');
      setBinary('');
    } else {
      const num = parseInt(value, 10);
      if (!isNaN(num)) {
        setHex(num.toString(16).toUpperCase());
        setBinary(num.toString(2));
      }
    }
  };

  const handleHexChange = (e) => {
    const value = e.target.value;
    setHex(value);
    
    if (value === '' || value === '-') {
      setDecimal('');
      setBinary('');
    } else {
      const num = parseInt(value, 16);
      if (!isNaN(num)) {
        setDecimal(num.toString(10));
        setBinary(num.toString(2));
      }
    }
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);
    
    if (value === '' || value === '-') {
      setDecimal('');
      setHex('');
    } else {
      const num = parseInt(value, 2);
      if (!isNaN(num)) {
        setDecimal(num.toString(10));
        setHex(num.toString(16).toUpperCase());
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Header />
        
      <h1>Number Format Converter</h1>
      
      <div style={{ marginBottom: '15px' }}>
        <label>
          Decimal:
          <input
            type="text"
            value={decimal}
            onChange={handleDecimalChange}
            placeholder="Enter decimal number"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>
          Hexadecimal:
          <input
            type="text"
            value={hex}
            onChange={handleHexChange}
            placeholder="Enter hex number"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          Binary:
          <input
            type="text"
            value={binary}
            onChange={handleBinaryChange}
            placeholder="Enter binary number"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
    </div>
  );
}
