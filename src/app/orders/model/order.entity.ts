export class Order {
  id: number;
  title: string;
  description: string;
  entry: string;
  exit: string;
  image: string;
  status: string;
  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.entry = "";
    this.exit = "";
    this.image = "";
    this.status = "";
  }
}
