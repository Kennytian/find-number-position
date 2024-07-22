import { writeFile } from 'node:fs';
import { join } from 'node:path';

import { generateNumbers, readCommandLineArguments, shuffleArray } from './utils';

// 文件路径
const filePath = join(process.cwd(), 'numbers.txt');

// 写入文件
function writeToFile(filePath: string) {
  const rankNumber = readCommandLineArguments();
  if (!rankNumber) {
    console.error('Please provide a number as a command line argument.');
    return;
  }

  // 生成一个包含0到1000的数组
  const numbers = generateNumbers(rankNumber);

  // 打乱数字数组
  shuffleArray(numbers);

  writeFile(filePath, numbers.join('\n'), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File has been created successfully.');
    }
  });
}

writeToFile(filePath);
