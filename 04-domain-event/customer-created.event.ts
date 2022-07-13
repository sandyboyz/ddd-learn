import { IEvent } from "./IEvent";

export class CustomerCreatedEvent implements IEvent {
    public readonly name = "CustomerCreatedEvent";
}