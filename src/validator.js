const validator = require('xsd-schema-validator');
const path = require('path');

// Path to the test wrapper xsd
const xsdPath = path.join(__dirname, '../cross-country/test_wrapper.xsd');

/**
 * Validates a .gpx files XML content against the OpenRally XSD schema.
 * @param {string} gpxContent - The XML string content to validate.
 */
async function validateOpenRallyGPX(gpxContent) {

try {
    const result = await validator.validateXML(gpxContent, xsdPath);
    return result; 
  } catch (err) {
    // Construct an object containing only the relevant error information
    const validationError = {
      valid: err.valid,
      result: err.result,
      messages: err.messages,
    };
  
    // Return the object instead of the entire error
    return validationError;

  }

}

module.exports = validateOpenRallyGPX;
