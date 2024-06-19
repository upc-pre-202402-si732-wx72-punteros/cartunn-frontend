export class Order {
  code: number;
  name: string;
  description: string;
  entryDate: string;
  exitDate: string;
  id: number;
  status: string;
  constructor() {
    this.code = 0;
    this.name = "";
    this.description = "";
    this.entryDate = "";
    this.exitDate = "";
    this.id = 0;
    this.status = "";
  }
}
