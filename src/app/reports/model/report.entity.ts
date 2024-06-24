export class Report {
  "modifiedPart": string;
  "date": string;
  "status": string;

  constructor(modified_part: "", date="", status="") {
    this.modifiedPart = modified_part
    this.date = date
    this.status = status
  }
}
