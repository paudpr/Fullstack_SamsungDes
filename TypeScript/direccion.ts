export class Address {
	constructor(
		private _street: string,
		private _number: number,
		private _story: number,
		private _letter: string,
		private _zipCode: number,
		private _town: string,
		private _city: string
	) { }

	set_street(street: string) {
		this._street = street;
	}
	get_street(): string {
		return this._street;
	}
	
	set_number(number: number) {
		this._number = number;
	}
	get_number(): number {
		return this._number;
	}
	
	set_story(story: number) {
		this._story = story;
	}
	get_story(): number {
		return this._story;
	}

	set_letter(letter: string) {
		this._letter = letter;
	}
	get_letter(): string {
		return this._letter;
	}

	set_zipCode(zipCode: number) {
		this._zipCode = zipCode;
	}
	get_zipCode(): number {
		return this._zipCode;
	}

	set_town(town: string) {
		this._town = town;
	}
	get_town(): string {
		return this._town;
	}

	set_city(city: string) {
		this._city = city;
	}
	get_city(): string {
		return this._city;
	}

	printAddress(): string{
		let addr: string = this._street + ', ' + this._number + ', ' +
							this._story + 'º' + this._letter + ', ' +
							this._zipCode + ', ' + this._town + '(' + 
							this._city + ')';
		return addr;
	}
}
