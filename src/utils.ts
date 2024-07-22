// 读取命令行参数的函数
export function readCommandLineArguments() {
  const [arg] = process.argv.slice(2);
  if (!arg) {
    return 0;
  }
  return parseInt(arg, 10);
}

// 生成数字的函数
export function generateNumbers(length: number) {
  return Array.from({ length }, (_, i) => i);
}

// 打乱数组顺序的函数
export function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 查找数字在数组中的索引的函数
export function findNumberIndex(numbers: number[], target: number): number {
  const indexMap = new Map<number, number>();

  numbers.forEach((num, index) => {
    indexMap.set(num, index);
  });

  const index = indexMap.get(target);

  return index !== undefined ? index : -1;
}
