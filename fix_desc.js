const fs = require('fs');

const content = fs.readFileSync('src/components/Description.jsx', 'utf-8');

let newContent = content;
let cropMap = {
  "// Paddy Diseases": "Paddy",
  "// Wheat Diseases": "Wheat",
  "// Chickpea Diseases": "Chickpea",
  "// Tomato Diseases": "Tomatoes",
  "// Chillies Diseases": "Chillies",
  "// Sugarcane Diseases": "Sugarcane",
  "// Sunflower Diseases": "Sunflower",
  "// Sorghum (Jowar) Diseases": "Sorghum (Jowar)",
  "// Pigeonpea (Tur) Diseases": "Pigeonpea (Tur)",
  "// Soybean Diseases": "Soybean",
  "// Cotton Diseases": "Cotton",
  "// Rabi Crop Diseases": "Rabi Crop",
  "//Linseed Diseases": "Linseed",
  "// Green Gram Diseases": "Green gram",
  "// Black Gram Diseases": "Black gram",
  "//Notable Crop": "Notable Crop",
  "// Orange": "Orange",
  "//  Traditional Crop": "Traditional Crop",
  "// Groundnut": "Groundnut",
  "// Moong (Green Gram)": "Moong (Green Gram)",
  "// Urd (Black Gram)": "Urd (Black Gram)",
  "// Sesamum": "Sesamum",
  "// Banana Diseases": "Bananas",
  "// Onion Diseases": "Onions"
};

let lines = newContent.split('\n');
let insideDiseaseInfo = false;
let currentCrop = null;
let outputLines = [];
let braceDepth = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  if (line.includes('const diseaseInfo = {')) {
    insideDiseaseInfo = true;
    outputLines.push(line);
    continue;
  }
  
  if (insideDiseaseInfo) {
    if (line.trim() === '};' && braceDepth === 0) {
      insideDiseaseInfo = false;
      if (currentCrop) {
        outputLines.push('    },');
      }
      outputLines.push(line);
      continue;
    }
    
    // Check for crop comment
    let isCropComment = false;
    for (let key in cropMap) {
      if (line.includes(key)) {
        isCropComment = true;
        if (currentCrop) {
          // close previous crop
          // wait, the previous disease just closed its brace. So it had a comma like `    },`
          // We need to inject `    },` for the previous crop, but the previous disease might have a comma.
          outputLines.push('    },');
        }
        currentCrop = cropMap[key];
        outputLines.push(line);
        outputLines.push(`    "${currentCrop}": {`);
        break;
      }
    }
    
    if (isCropComment) continue;
    
    // adjust braces for diseaseInfo object? We don't really need to track braceDepth of diseases if they are just 1 level deep.
    if (line.includes('{')) braceDepth++;
    if (line.includes('}')) braceDepth--;
    
    outputLines.push(line);
  } else {
    outputLines.push(line);
  }
}

let result = outputLines.join('\n');

// Now update the JSX to use diseaseInfo[crop]?.[disease]
result = result.replace(/diseaseInfo\[disease\]\?/g, 'diseaseInfo[crop]?.[disease]?');

fs.writeFileSync('src/components/Description.jsx', result);
console.log("File updated successfully.");
