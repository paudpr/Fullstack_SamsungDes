export class Phone{

	private _type:string;
	private _phone_number:number;

	constructor(
		type:string,
		phone_number:number){
			this._type = type;
			this._phone_number = phone_number;
		}
	
	set type(type: string){
		this._type = type;
	}
	get type(): string{
		return this._type;
	}

	set phone_number(number: number){
		this._phone_number = number;
	}
	get phone_number(): number{
		return this._phone_number;
	}
}
