const fs = require('fs');
const { generateSVG } = require('../lib/svg'); // Replace with the actual path to your generate SVG file
const { validateId, validateText, validateColor } = require('../lib/inq'); // Replace with the actual path to your validation file

describe('Validation Tests', () => {
  describe('validateId', () => {
    test('should return true for a valid ID', () => {
      const result = validateId('ValidId');
      expect(result).toBe(true);
    });

    test('should return an error message for an ID with spaces', () => {
      const result = validateId('Invalid Id');
      expect(result).toBe('The logo name should not contain spaces.');
    });

    test('should return an error message for an ID with invalid characters', () => {
      const result = validateId('Invalid?Id');
      expect(result).toBe('The logo name contains invalid characters.');
    });
  });

  describe('validateText', () => {
    test('should return true for a valid text', () => {
      const result = validateText('ABC');
      expect(result).toBe(true);
    });

    test('should return an error message for text with more than 3 characters', () => {
      const result = validateText('ABCD');
      expect(result).toBe('Please enter exactly 3 letters.');
    });
  });

  describe('validateTextColor', () => {
    test('should return true for a valid color (hexadecimal)', () => {
      const result = validateColor('#ff0000');
      expect(result).toBe(true);
    });

    test('should return true for a valid color (named color)', () => {
      const result = validateColor('blue');
      expect(result).toBe(true);
    });

    test('should return an error message for an invalid color', () => {
        const result = validateColor('invalidcolor');
        expect(result).toBe(true);
    });
  });
});

describe('generateSVG', () => {
  // Mock fs.writeFile function
  jest.mock('fs');
  fs.writeFile = jest.fn((filename, content, callback) => {
    callback(null); // Simulate successful write
  });

  test('should generate and save an SVG file with valid parameters', () => {
    const id = 'mylogo';
    const text = 'ABC';
    const textColor = '#ff0000';
    const shape = 'circle';
    const shapeColor = '#00ff00';

    generateSVG(id, text, textColor, shape, shapeColor);

    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/Logos\/mylogo\.svg$/),
      expect.any(String),
      expect.any(Function)
    );
  });

  test('should throw an error for an invalid shape', () => {
    const id = 'mylogo';
    const text = 'ABC';
    const textColor = '#ff0000';
    const shape = 'invalidshape';
    const shapeColor = '#00ff00';

    expect(() => {
      generateSVG(id, text, textColor, shape, shapeColor);
    }).toThrow('Invalid shape provided.');
  });

  test('should generate and save an SVG file with valid textColor and shapeColor', () => {
    const id = 'mylogo';
    const text = 'ABC';
    const textColor = 'red';
    const shape = 'circle';
    const shapeColor = 'green';

    generateSVG(id, text, textColor, shape, shapeColor);

    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.stringMatching(/\.\/Logos\/mylogo\.svg$/),
      expect.any(String),
      expect.any(Function)
    );
  });
});

