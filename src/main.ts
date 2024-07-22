import { createReadStream } from 'node:fs';
import { join } from 'node:path';

import { getMachineId } from './hardware';
import { findNumberIndex, readCommandLineArguments } from './utils';

// 假设文件名为 numbers.txt
const filePath = join(process.cwd(), 'numbers.txt');

// 流式读取文件并查找数字
function findNumberPosition(filePath: string, targetNumber: number): void {
  const machineId = getMachineId();
  if (machineId !== 'a910396f887cc5b07136f06772ccd1b388df85b6f87e8a6d7c705f931c85906b') {
    console.warn('Machine not authorized, your machine ID is:', machineId);
  }

  const stream = createReadStream(filePath, { encoding: 'utf8' });
  const numbers: number[] = [];

  stream.on('data', (chunk: string) => {
    const lines = chunk.split('\n');
    for (let i = 0; i < lines.length; i++) {
      numbers.push(parseInt(lines[i], 10));
    }
  });

  stream.on('end', () => {
    const index = findNumberIndex(numbers, targetNumber);
    if (index !== -1) {
      console.log(`Number ${targetNumber} found at position:${index + 1}`);
    } else {
      console.warn(`Number ${targetNumber} not found in the file.`);
    }
  });

  stream.on('error', (err) => {
    console.error('Error reading file:', err);
  });
}

// 测试
const numberToFind = readCommandLineArguments() || 769; // 你想查找的数字
findNumberPosition(filePath, numberToFind);
