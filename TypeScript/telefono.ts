export class Phone{

	private _type:string;
	private _phone_number:string;

	constructor(
		type:string,
		phone_number:string){
			this._type = type;
			this._phone_number = phone_number;
		}
	
	set_type(type: string){
		this._type = type;
	}
	get_type(): string{
		return this._type;
	}

	set_phone_number(number: string){
		this._phone_number = number;
	}
	get_phone_number(): string{
		return this._phone_number;
	}

	printPhone(): string{
		const num = this._phone_number + ' (' + this._type + ')'
		return num
	}
}
