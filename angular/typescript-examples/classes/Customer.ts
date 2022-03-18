export class Customer {
  // private _firstName: string;
  // private _lastName: string;

  // //class constructor
  // constructor(theFirst: string, theLast: string) {
  //   this._firstName = theFirst;
  //   this._lastName = theLast;
  // }

  //parameter properties
  constructor (private _firstName: string, private _lastName: string) {
  }

  //accessor
  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}