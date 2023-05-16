export class Mail{
	private _type:string;
	private _mail:string;

	constructor(
		type:string,
		mail:string){
			this._type = type;
			this._mail = mail;
		}
	
	setType(type: string){
		this._type = type;
	}
	getType(): string{
		return this._type;
	}

	setMail(mail: string){
		this._mail = mail;
	}
	getMail(): string{
		return this._mail;
	}

	printMail(): string{
		let addr = this.getMail() + ' (' + this.getType() + ')'
		return addr
	}
}
