import fs from 'fs';
import path from 'path';

try {
  const logoPath = path.join(process.cwd(), 'public', 'logo.png');
  const buffer = fs.readFileSync(logoPath);
  console.log('Local logo loaded, size:', buffer.length);
  // Let's just print the first few bytes to see if it's a valid PNG
  console.log(buffer.slice(0, 20));
} catch (error) {
  console.error('Error reading local logo:', error);
}
