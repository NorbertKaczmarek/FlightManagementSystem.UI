export enum PlaneType {
    Embraer,
    Boeing,
    Airbus,
  }
  
  export class Flight {
    public id?: number;
    public numerLotu: number;
    public dataWylotu: string; // Date
    public miejsceWylotu: string;
    public miejscePrzylotu: string;
    public typSamolotu: PlaneType;
  }
  