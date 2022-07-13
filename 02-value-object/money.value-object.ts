class Money {
    private _amount: number;
    private _currency: string;

    private constructor(amount: number, currency: string) {
        this._amount = amount;
        this._currency = currency;
    }

    public get amount(): number {
        return this._amount;
    }

    public get currency(): string {
        return this._currency;
    }

    public equals(other: Money): boolean {
        return this._amount === other._amount && this._currency === other._currency;
    }

    public add(other: Money): Money {
        if (this._currency !== other._currency) {
            throw new Error('Currency mismatch');
        }

        return new Money(this._amount + other._amount, this._currency);
    }

    public static create(amount: number, currency: string): Money {
        if (amount < 0) throw new Error('Amount must be positive');

        return new Money(amount, currency);
    }
}

