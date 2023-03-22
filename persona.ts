import { Address } from './direccion'
import { Mail } from './mail'
import { Phone } from './telefono'

export class Person {

	// private _name: string;
	// private _surname: string;
	// private _age: number;
	// private _id: string;
	// private _birthday: Date;
	// private _favColor: string;
	// private _gender: string;
	// private _address: Address[];
	// private _mail: Mail[];
	// private _phone: Phone[];
	// private _notes: string;

	constructor(
		private _name: string, 
		private _surname: string, 
		private _age: number,
		private _id: string,
		private _birthday: Date,
		private _favColor: string,
		private _gender: string,
		private _address: Address[],
		private _mail: Mail[],
		private _phone: Phone[],
		private _notes: string){
		// name: string, 
		// surname: string, 
		// age: number,
		// id: string,
		// birthday: Date,
		// favColor: string,
		// gender: string,
		// address: Address[],
		// mail: Mail[],
		// phone: Phone[],
		// notes: string){
			// this._name = name;
			// this._surname  = surname;
			// this._age = age;
			// this._id = id;
			// this._birthday = birthday;
			// this._favColor = favColor;
			// this._gender = gender;
			// this._address = address;
			// this._mail = mail;
			// this._phone = phone;
			// this._notes = notes;
		}

	set name(name: string){
		this._name = name;
	}
	get name(): string{
		return this._name;
	}

	set surname(surname: string){
		this._surname = surname;
	}
	get surname(): string{
		return this._surname;
	}

	set age(age: number){
		this._age = age;
	}
	get age(): number{
		return this._age;
	}

	set id(id: string){
		this._id = id;
	}
	get id(): string{
		return this._id;
	}

	set birthday(birthday: Date){
		this._birthday = birthday;
	}
	get birthday(): Date{
		return this._birthday;
	}

	set favColor(favColor: string){
		this._favColor = favColor;
	}
	get favColor(): string{
		return this._favColor;
	}

	set gender(gender: string){
		this._gender = gender;
	}
	get gender(): string{
		return this._gender;
	}

	set address(address: Address[]){
		this._address = address;
	}
	get address(): Address[]{
		return this._address;
	}

	set mail(mail: Mail[]){
		this._mail = mail;
	}
	get mail(): Mail[]{
		return this._mail;
	}

	set phone(phone: Phone[]){
		this._phone = phone;
	}
	get phone(): Phone[]{
		return this._phone;
	}

	set notes(notes: string){
		this._notes = notes;
	}
	get notes(): string{
		return this._notes;
	}

	addAddress(newAddr: Address): void{
		this._address.push(newAddr);
	}
	setAddress(newAddr: Address): void{
		this._address = [newAddr];
	}
	showListAddress(): string{
		let all: string = '';
		for(let i = 0; i < this._address.length; i++){
			all = '${all}\n${i + 1}: ${this._address[i].showAddress()}';
		}
		return all;
	}

	addPhone(newPhone: Phone): void{
		this._phone.push(newPhone);
	}
	setPhone(newPhone: Phone): void{
		this._phone = [newPhone];
	}
	showListPhone(): string{		//esto va a estar mal
		let all: string = '';
		for(let i = 0; i < this._phone.length; i++){
			all = '${all}\n${i + 1}: ${this._phone[i].showPhone()}';
		}
		return all;
	}

	addMail(newMail: Mail): void{
		this._mail.push(newMail);
	}
	setMail(newMail: Mail): void{
		this._mail = [newMail];
	}
	showListMail(): void{		//esto va a estar mal
		console.log('Mails -> \n')
		this._mail.forEach((email) => {
			console.log('\tEmail type: $(email.type}\n\tEmail address: $(email.address}');
		});
	}

	showAllPerson(): string{
		let all: string = '';

		return all;
	}



}



