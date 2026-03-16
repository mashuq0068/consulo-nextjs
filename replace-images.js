const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");
const newDir = path.join(publicDir, "new");

let newImages = fs.readdirSync(newDir);

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== "new") {
        walk(fullPath);
      }
    } else {
      if (newImages.includes(file)) {
        const newImagePath = path.join(newDir, file);

        // replace file
        fs.copyFileSync(newImagePath, fullPath);

        // remove used file from new folder
        fs.unlinkSync(newImagePath);

        console.log(`Replaced: ${fullPath}`);
        console.log(`Removed from new/: ${file}`);

        // update memory list
        newImages = newImages.filter((img) => img !== file);
      }
    }
  }
}

walk(publicDir);

console.log("✅ Image replacement completed");