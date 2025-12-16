

export function decodedResistorValue(tab: string[]): string {

  const firstNum = COLORS.indexOf(tab[0]);
  const secondNum = COLORS.indexOf(tab[1]);
  const zeroesNum = COLORS.indexOf(tab[2]);

  const finalNum = (firstNum * 10 + secondNum) * pow(10, zeroesNum);

  if (finalNum >= 1_000_000_000) return `${finalNum / 1_000_000_000} gigaohms`;
  if (finalNum >= 1_000_000)     return `${finalNum / 1_000_000} megaohms`;
  if (finalNum >= 1_000)         return `${finalNum / 1_000} kiloohms`;

  return `${finalNum} ohms`;
}



export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

const PREFIXES: string[] = [

]

const pow = (base: number, exp: number): number => {

  let res: number = 1;

  for (let i: number = 0; i < exp; i++){
    res *= base;
  }

  return res
}