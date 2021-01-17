export class Offer {
  private _id: number;
  private _title: string;
  private _author: string;
  private _description: string;
  private _price: string;
  private _createdAt: Date;

  constructor(title: string, author: string, description: string, price: string, createdAt?: Date, id?: number) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._description = description;
    this._price = price;
    this._createdAt = createdAt;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }
}
