import React, { useState } from 'react';
import './App.css';
import { Header } from './app_header';
import { NumberFormats } from './numberformats';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  
  const [selectedFormat, setSelectedFormat] = useState(NumberFormats.Decimal);
  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperator = (op) => {
    if (input) {
      setResult(parseFloat(input));
      setInput('');
    }
    setInput(input + op);
  };

  const handleEquals = () => {
    try {
      const evaluation = eval(input);
      setResult(evaluation);
      setInput(evaluation.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const decimalValue = input ? parseFloat(input) : result;
  const hexValue = Math.floor(decimalValue).toString(16).toUpperCase();
  const binaryValue = Math.floor(decimalValue).toString(2);

  return (
    <div className="calculator-container">
        <Header />
        <h1>Calculator</h1>
      
      <div className="calculator">
        <div className="display">
          <div className="format-selector">
            <label htmlFor="format-dropdown">Format:</label>
            <select 
              id="format-dropdown"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
            >
              <option value={NumberFormats.Decimal}>{NumberFormats.Decimal}</option>
              <option value={NumberFormats.Hexadecimal}>{NumberFormats.Hexadecimal}</option>
              <option value={NumberFormats.Binary}>{NumberFormats.Binary}</option>
            </select>
          </div>

          <input
            type="text"
            value={input}
            readOnly
            className="input-display"
            placeholder="0"
          />
          <div className="number-formats">
            <div className="format-box">
              <label>Decimal:</label>
              <span>{decimalValue}</span>
            </div>
            <div className="format-box">
              <label>Hexadecimal:</label>
              <span>0x{hexValue || '0'}</span>
            </div>
            <div className="format-box">
              <label>Binary:</label>
              <span>0b{binaryValue || '0'}</span>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleClear} className="clear-btn">C</button>

          <button onClick={() => handleOperator('/')} className="operator-btn">/</button>
          <button onClick={() => handleOperator('*')} className="operator-btn">*</button>
          <button onClick={() => handleOperator('-')} className="operator-btn">-</button>
          <button onClick={() => handleOperator('+')} className="operator-btn">+</button>

        </div>
      </div>
    </div>
  );
}

export { Calculator };