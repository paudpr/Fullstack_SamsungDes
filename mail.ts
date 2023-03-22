export class Mail{
	private _type:string;
	private _address:string;

	constructor(
		type:string,
		address:string){
			this._type = type;
			this._address = address;
		}
	
	set type(type: string){
		this._type = type;
	}
	get type(): string{
		return this._type;
	}

	set address(address: string){
		this._address = address;
	}
	get address(): string{
		return this._address;
	}
}
