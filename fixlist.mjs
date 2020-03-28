import { promisify } from 'util';
import { readFile, writeFile } from 'fs';
import leftpad from './leftpad'

const read = promisify(readFile);
const write = promisify(writeFile);

const reconcile = async () => {
  const raw = await read('./zips.csv', 'utf8');
  const split = raw.split('\n');
  const correct = split.map(line=>{
    return line.split(',')[0].length === 5 ? line : line.split(',').map((item, idx) => {
      return idx === 0 ? leftpad(item, 5) : item
    }).join(',')
  }).join('\n');
  await write('./correczips.csv', correct, 'utf8');
};
reconcile();
process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
