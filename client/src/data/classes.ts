export class Book {
  length: number;
  height: number;
  width: number;
  lip: number;
  unitSystem: 'metric' | 'imperial';
  units: 'in' | 'mm';

  constructor(
    length: number,
    height: number,
    width: number,
    lip: number,
    unitSystem: 'metric' | 'imperial'
  ) {
    this.length = length;
    this.height = height;
    this.width = width;
    this.lip = lip;
    this.unitSystem = unitSystem;
    this.units = unitSystem === 'metric' ? 'mm' : 'in';
  }
}
