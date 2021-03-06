export class User {
  firstName: string;
  lastName: string;
  birthDate: number;
  email: string;
  street: string;
  housenumber: number;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.housenumber = obj ? obj.housenumber : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
      street: this.street,
      housenumber: this.housenumber,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
