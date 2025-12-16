export function toRna(dnaInput: string): string {

  return dnaInput
  .split('')
  .map(e => {
    if(!Object.keys(DNA_TO_RNA).includes(e)){
      throw new Error("Invalid input DNA.");
    } 
    return DNA_TO_RNA[e]
  })
  .join('');
}

const DNA_TO_RNA: {[dna: string]: string} = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}