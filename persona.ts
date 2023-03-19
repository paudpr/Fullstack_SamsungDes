import { Address } from './direccion'
import { Mail } from './mail'
import { Phone } from './telefono'

export class Person {

	constructor(
		private _name:string, 
		private _surname:string, 
		private _age:number,
		private _id:string,
		private _birthday: Date,
		private _favColor: string,
		private _gender: string,
		private _address: Array<Address>,
		private _mail: Array<Mail>,
		private _phone: Array<Phone>,
		private _notes: string){}

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

	set address(address: Array<Address>){
		this._address = address;
	}
	get address(): Array<Address>{
		return this._address;
	}

	set mail(mail: Array<Mail>){
		this._mail = mail;
	}
	get mail(): Array<Mail>{
		return this._mail;
	}

	set phone(phone: Array<Phone>){
		this._phone = phone;
	}
	get phone(): Array<Phone>{
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
	showListMail(): string{		//esto va a estar mal
		let all: string = '';
		for(let i = 0; i < this._mail.length; i++){
			all = '${all}\n${i + 1}: ${this._mail[i].showMail()}';
		}
		return all;
	}

	showAllPerson(): string{
		let all: string = '';

		return all;
	}



}



