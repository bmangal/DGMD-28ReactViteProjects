import { useState } from 'react';
import { Header } from './app_header';
import { NumberFormats, NumberBases, getNumberBase, FormatSelector } from './numberformats';
import { convertNumber } from './converterapi';
import './App.css';

function NumberConverter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [sourceFormat, setSourceFormat] = useState(NumberFormats.Decimal);
  const [destinationFormat, setDestinationFormat] = useState(NumberFormats.Decimal);

  const handleConvert = () => {
    const trimmedInput = inputValue.trim();
    const sourceBase = getNumberBase(sourceFormat);
    const destinationBase = getNumberBase(destinationFormat);
    const num = parseInt(trimmedInput, sourceBase);

    if (!isNaN(num)) {
        setOutputValue(num.toString(destinationBase).toUpperCase());
    }

    console.log(`Converted ${inputValue} from ${sourceFormat} to ${outputValue} in ${destinationFormat}`);
  };

  const handleConvertAsync = async () => {
    const trimmedInput = inputValue.trim();
    const sourceBase = getNumberBase(sourceFormat);
    const destinationBase = getNumberBase(destinationFormat);

    try {
      const result = await convertNumber(trimmedInput, sourceBase, destinationBase);
      if (result) {
        setOutputValue(result);
        console.log(`Converted ${trimmedInput} from ${sourceFormat} to ${result} in ${destinationFormat}`);
      }
    } catch (error) {
      console.error('Conversion error:', error);
    }
  };

  return (
    <div className="containerStyle">
      <Header />
      <h2>Number Format Converter</h2>

      <div className="rowStyle">
        <div>
          <label>From:
            <FormatSelector 
                className="selectStyle" 
                value={sourceFormat}
                onChange={(e) => setSourceFormat(e.target.value)} 
                />
          </label>
        </div>
        <div >
          <input
            type="text"
            placeholder="Enter number to convert"
            className="inputStyle"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>

      <div className="rowStyle">
        <div>
          <label>To:
            <FormatSelector 
                className="selectStyle" 
                value={destinationFormat} 
                onChange={(e) => setDestinationFormat(e.target.value)} 
            />
          </label>
        </div>
        <button onClick={handleConvertAsync} className="buttonStyle">Go</button>
        <div>
          <input
            type="text"
            placeholder="Converted result"
            className="inputStyle"
            value={outputValue}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export { NumberConverter };