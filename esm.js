import AdmZip from './adm-zip.js';
let zip = new AdmZip('./test/hpy.zip');
zip.extractAllTo('./test/hpy', true);
