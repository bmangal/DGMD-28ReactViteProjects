export const convertNumber = async (input, fromBase, toBase) => {
  try {
    const response = await fetch(
      `https://networkcalc.com/api/binary/${input}?from=${fromBase}&to=${toBase}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    if (result.status === 'OK') {
        let resultValue = result.converted.toString().toUpperCase();
    return resultValue;
    } else {
        throw new Error(`Conversion error: ${result.status}`);
    }
  } catch (error) {
    console.error('Conversion error:', error);
    throw error;
  }
};
