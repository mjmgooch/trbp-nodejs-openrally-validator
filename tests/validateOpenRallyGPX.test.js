const fs = require('fs').promises;
const path = require('path');
const validateOpenRallyGPX = require('../src/validator');

describe('validate OpenRally format gpx file with example.gpx', () => {
    it('should validate the example.gpx file successfully', async () => {
        const gpxFilePath = path.join(__dirname,'../', 'cross-country', 'example.gpx'); // Ensure correct path resolution
        const gpxContent = await fs.readFile(gpxFilePath, 'utf8');
  
        await expect(validateOpenRallyGPX(gpxContent)).resolves.toEqual({
            valid: true,
            result: 'OK',
            messages: []
        });
    });
});
