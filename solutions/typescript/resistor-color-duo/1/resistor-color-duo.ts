export function decodedValue(colors: string[]) {

  const first: number = COLORS.indexOf(colors[0])
  const second: number = COLORS.indexOf(colors[1])

  return first * 10 + second;
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