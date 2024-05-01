export class Notifications {
  "type": string;
  "description": string;

  constructor(type: "", description="") {
    this.type = type
    this.description = description
  }
}
