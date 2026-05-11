import React, { useState } from 'react';
import './App.css';
import { Header } from './app_header';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

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

          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperator('+')} className="operator-btn">+</button>

          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperator('%')} className="operator-btn">%</button>

          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleEquals()} className="equals-btn">=</button>

          <button onClick={() => handleNumberClick('0')} className="zero-btn">0</button>
          <button onClick={() => handleNumberClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}
