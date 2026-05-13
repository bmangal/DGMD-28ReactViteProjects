import { NumberFormats } from './numberformats.jsx';

const ValidChars = Object.freeze({
    Decimal: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    Hexadecimal: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'],
    Binary: ['0', '1']
});

const isValidNumber = (text, format) => {
  let validChars = ValidChars[format];
  
  if (!text)
    return false;

  text = text.trim();

  if (text.length === 0) { 
    return false;
  }
    
  for (let char of text) {
    if (!validChars.includes(char)) return false;
  }
  
  return true;
};

export { isValidNumber };