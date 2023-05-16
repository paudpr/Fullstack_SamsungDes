import { Address } from './direccion'
import { Mail } from './mail'
import { Phone } from './telefono'

export class Person {

	constructor(
		private _name: string, 
		private _surname: string, 
		private _age: number,
		private _id: string,
		private _birthday: Date,
		private _favColor: string,
		private _gender: string,
		private _address: Array<Address>,
		private _mail: Array<Mail>,
		private _phone: Array<Phone>,
		private _notes: string){
		}

	set_name(name: string){
		this._name = name;
	}
	get_name(): string{
		return this._name;
	}

	set_surname(surname: string){
		this._surname = surname;
	}
	get_surname(): string{
		return this._surname;
	}

	set_age(age: number){
		this._age = age;
	}
	get_age(): number{
		return this._age;
	}

	set_id(id: string){
		this._id = id;
	}
	get_id(): string{
		return this._id;
	}

	set_birthday(birthday: Date){
		this._birthday = birthday;
	}
	get_birthday(): Date{
		return this._birthday;
	}

	set_favColor(favColor: string){
		this._favColor = favColor;
	}
	get_favColor(): string{
		return this._favColor;
	}

	set_gender(gender: string){
		this._gender = gender;
	}
	get_gender(): string{
		return this._gender;
	}

	set_address(address: Array<Address>){
		this._address = address;
	}
	get_address(): Array<Address>{
		return this._address;
	}

	set_mail(mail: Array<Mail>){
		this._mail = mail;
	}
	get_mail(): Array<Mail>{
		return this._mail;
	}

	set_phone(phone: Array<Phone>){
		this._phone = phone;
	}
	get_phone(): Array<Phone>{
		return this._phone;
	}

	set_notes(notes: string){
		this._notes = notes;
	}
	get_notes(): string{
		return this._notes;
	}

	addAddress(newAddr: Address): void{
		this._address.push(newAddr);
	}
	setAddress(newAddr: Array<Address>): void{
		this._address = newAddr;
	}

	addPhone(newPhone: Phone): void{
		this._phone.push(newPhone);
	}
	setPhone(newPhone: Array<Phone>): void{
		this._phone = newPhone;
	}

	addMail(newMail: Mail): void{
		this._mail.push(newMail);
	}
	setMail(newMail: Array<Mail>): void{
		this._mail = newMail;
	}

	get_date(): string {
		let date = this._birthday;
		let formatBirthday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
		return formatBirthday;
	}

	showPersonInfo(): string {
		let all: string = `This is ${this._name} ${this._surname}'s personal information:
			Nombre: ${this._name}
			Apellidos: ${this._surname}
			Edad: ${this._age}
			DNI: ${this._id}
			Cumpleaños: ${this.get_date()}
			Color Favorito: ${this._favColor}
			Sexo: ${this._gender}
			Direcciones: ${this.get_address().map((newAddr)=>newAddr.printAddress())}
			Emails: ${this.get_mail().map((mail)=>mail.printMail())}
			Teléfonos: ${this.get_phone().map((phone)=>phone.printPhone())}
			Notas: ${this._notes}`;
		return all;
	}



}
