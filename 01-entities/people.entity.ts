import { v4 } from "uuid";

interface PeopleProps {
  id: string;
  name: string;
  age: number;
  hairColor: string;
}

class People {
  private readonly _id: string;
  private _name: string;
  private _age: number;
  private _hairColor: string;

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

  public changeHairColor(newHairColor: string): void {
    this._hairColor = newHairColor;
  }

  private constructor(props: PeopleProps) {
    this._id = props.id;
    this._name = props.name;
    this._age = props.age;
    this._hairColor = props.hairColor;
  }

  public static create(props: Omit<PeopleProps, "id">, id?: string): People {
    if (props.age < 0){
        throw new Error('Age must be positive');
    }
    
    return new People({
        id: id ? id : v4(),
        ...props
    });
  }
}
