export class Product {
  id: number;
  title: string;
  description: string;
  model: string;
  manufacturer: string;
  image: string;
  price: number;
  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.model = "";
    this.manufacturer = "";
    this.image = "";
    this.price = 0;
  }
}
