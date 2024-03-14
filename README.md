
# TRBP NodeJS OpenRally Validator

## Introduction

A Node.js validator designed to validate gpx files against the OpenRally.org community standard. It provides a way to ensure OpenRally format gpx files adhere to the OpenRally standards. I wanted to build this to facilitate easier validation of gpx files for https://theroadbookproject.com. Feel free to use it in your projects. Contributions are welcome! 

## Pre-requisites

The validator relies on the `node-xsd-schema-validator`, which in turn requires Java to be installed on your system. This dependency is necessary for the schema validation process. Ensure you have Java installed by following these steps:

1.  **Check Java Installation**: Open a terminal and type `java -version`. If Java is installed, you'll see the version number. If not, you'll need to install it.
2.  **Install Java**:
    -   **Windows/Mac**: Download the installer from the official Java website and follow the installation instructions.
    -   **Linux**: Use your distribution's package manager to install Java. For example, on Ubuntu, you can run `sudo apt-get install default-jdk`.

For more detailed instructions, please refer to the [`node-xsd-schema-validator` documentation](https://github.com/nikku/node-xsd-schema-validator/tree/main).

## Installation

To integrate this validator into your Node.js project, follow these steps:

1.  **Ensure Java is Installed**: Follow the pre-requisites section to install Java, if not already done.

2.  **Install the Validator**: Navigate to your project directory in the terminal and run:
    
    `npm install trbp-nodejs-openrally-validator` 
    

## Usage

To use this validator, first, ensure you have your gpx files contents ready as a string or have the gpx file path accessible. Here's an example of how to call the library:


### Basic Usage

```javascript
    const validateOpenRallyGPX = require('trbp-nodejs-openrally-validator');

    const gpxContent = '<openrally-gpx-file-contents>';
    
    const validationResult = await validateOpenRallyGPX(gpxContent);

    console.log(validationResult);
```

### Basic Example
   
```javascript
    const validateOpenRallyGPX = require('trbp-nodejs-openrally-validator');
    const fs = require('fs').promises;
    
    async function validate() {
        try {
            const gpxFilePath = '<path-to-your-openrally-gpx-file>'; // Replace with the actual gpx file path
            const gpxContent = await fs.readFile(gpxFilePath, 'utf8');
            const validationResult = await validateOpenrallyGPX(gpxContent);
            
            // Handle the validation result
            if (validationResult.valid) {
                console.log("Validation successful! The GPX file meets the OpenRally standards.");
            } else {
                console.error("Validation failed. Issues found:");
                validationResult.messages.forEach((msg, index) => console.error(`${index + 1}: ${msg}`));
            }
        } catch (error) {
            console.error('Validation error:', error);
        }
    }
    
    validate();
```

### Validation

If the gpx file provided is valid:

```javascript
    { valid: true, result: 'OK', messages: [] }
```
    
If the provided gpx file is not valid:

```javascript

     {
      valid: false,
      result: 'FATAL_ERROR',
      messages: [
        '[fatal] The prefix "openradlly" for element "openradlly:units" is not bound. (11:25)',
        '[fatal] The prefix "openradlly" for element "openradlly:units" is not bound.'
      ]
    }
```


## Use of OpenRally

This project is designed to support the OpenRally standard, a set of specifications for creating and sharing rally navigation data. For more information about OpenRally, its objectives, and how to adhere to its standards, visit the [OpenRally GitHub repository](https://github.com/openrally/openrally/tree/master).