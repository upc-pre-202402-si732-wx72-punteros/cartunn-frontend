export class ProductRefund {
  id: number;
  title: string;
  date: string;
  description: string;
  status: string;
  image: string;

  constructor(
    id = 0,
    title = "",
    date = "",
    description = "",
    status = "",
    image = "",
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.description = description;
    this.status = status;
    this.image = image;
  }
}
