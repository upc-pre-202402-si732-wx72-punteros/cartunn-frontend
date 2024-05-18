export class ProductRefund {
  title: string;
  date: string;
  description: string;
  status: string;
  image: string;

  constructor(
    title = "",
    date = "",
    description = "",
    status = "",
    image = "",
  ) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.status = status;
    this.image = image;
  }
}
