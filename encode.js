import * as fs from 'fs';

const logo1 = fs.readFileSync('public/logo.png');
const logo2 = fs.readFileSync('public/logo02.png');

const out = `
export const LOGO_BOTTOM = "data:image/png;base64,${logo1.toString('base64')}";
export const LOGO_TOP = "data:image/png;base64,${logo2.toString('base64')}";
`;

fs.writeFileSync('src/logos.ts', out);
