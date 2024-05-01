export class Report {
  "modified-part": string;
  "date": string;
  "status": string;

  constructor(modified_part: "", date="", status="") {
    this["modified-part"] = modified_part
    this.date = date
    this.status = status
  }
}
