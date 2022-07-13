import { v4 } from "uuid";
import { Address } from "./address.entity";

interface CustomerProps {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  address: Address[];
}

class Customer {
  private readonly _id: string;
  private _name: string;
  private _age: number;
  private _hairColor: string;
  private _addresses: Address[];

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  public get hairColor(): string {
    return this._hairColor;
  }

  public get addresses(): ReadonlyArray<Address> {
    return this._addresses;
  }

  public changeHairColor(newHairColor: string): void {
    this._hairColor = newHairColor;
  }

  private constructor(props: CustomerProps) {
    this._id = props.id;
    this._name = props.name;
    this._age = props.age;
    this._hairColor = props.hairColor;
    this._addresses = props.address;
  }

  public static create(
    props: Omit<CustomerProps, "id">,
    id?: string
  ): Customer {
    if (props.age < 0) {
      throw new Error("Age must be positive");
    }

    const address = props.address?.length > 0 ? props.address : [];

    return new Customer({
      ...props,
      id: id ? id : v4(),
      address,
    });
  }
}
