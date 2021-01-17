export class User {
  private _id: number;
  private _fullName: string;
  private _mail: string;
  private _password: string;

  constructor(fullName: string, mail: string, password: string, id?: number) {
    this._id = id;
    this._fullName = fullName;
    this._mail = mail;
    this._password = password;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
