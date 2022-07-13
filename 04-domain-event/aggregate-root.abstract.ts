import { eventBus } from "./event-emitter";
import { IEvent } from "./IEvent";

export abstract class AggregateRoot {
    protected readonly _id: string;
    protected _events: IEvent[];
    
    public get id(): string {
        return this._id;
    }
    
    protected constructor(id: string) {
        this._id = id;
        this._events = [];
    }

    protected addEvent(event: IEvent): void {
        this._events.push(event);
    }

    public commit(): void {
        this._events.forEach(event => {
            eventBus.emit(event.name, event);
        });

        this._events = [];
    }
}