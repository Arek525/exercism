export class Matrix {

  private ob: number[][];

  constructor(data: string) {
    this.ob = data.split('\n').map(e => e.split(' ').map(Number));
  }

  get rows(): number[][] {
    return this.ob;
  }

  get columns(): number[][] {
    return this.ob[0].map((_, colIdx) => this.ob.map(row => row[colIdx]))
  }
}