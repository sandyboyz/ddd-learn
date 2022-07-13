import { v4 } from "uuid";

export interface AddressProps {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  detail?: string;
}

export class Address {
  private _id: string;
  private _street: string;
  private _city: string;
  private _state: string;
  private _zip: string;
  private _detail?: string;

  public get id(): string {
    return this._id;
  }

  public get street(): string {
    return this._street;
  }

  public get city(): string {
    return this._city;
  }

  public get state(): string {
    return this._state;
  }

  public get zip(): string {
    return this._zip;
  }

  public get detail(): string | undefined {
    return this._detail;
  }

  private constructor(props: AddressProps) {
    this._id = props.id;
    this._street = props.street;
    this._city = props.city;
    this._state = props.state;
    this._zip = props.zip;
    this._detail = props.detail;
  }

  public static create(props: Omit<AddressProps, "id">, id?: string): Address {
    return new Address({
      id: id ? id : v4(),
      ...props,
    });
  }
}
