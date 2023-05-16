import { Person } from './persona';
import { Address } from './direccion';
import { Mail } from './mail';
import { Phone } from './telefono';

function buildPhonebook(): Array<Person> {
	let phonebook: Array<Person> = [];

	const person_0: Address = new Address(
		'Calle Principal',
		123,
		4,
		'A',
		12345,
		'Localidad0',
		'Ciudad0'
	);
	const person0: Person = new Person(
		'Ana',
		'Rodriguez',
		32,
		'12345678R',
		new Date(1990, 7, 15),
		'Azul',
		'Mujer',
		[person_0],
		[new Mail('Personal', 'ana.rodriguez@example.com')],
		[new Phone('Personal', '555-123456')],
		'Soltera, ingeniero de software'
	);
	const person_1: Address = new Address(
		'Avenida del Sol',
		456,
		2,
		'B',
		54321,
		'Localidad1',
		'Ciudad1'
	);
	const person1: Person = new Person(
		'Javier',
		'López',
		45,
		'9865432B',
		new Date(198, 3, 10),
		'Verde',
		'Hombre',
		[person_1],
		[new Mail('Personal', 'j.lopez@example.com')],
		[new Phone('Trabajo', '555-98654')],
		'Profesor de historia, le gusta cocinar en su tiempo libre'
	);
	const person_2: Address = new Address(
		'Calle Luna',
		876,
		1,
		'C',
		67890,
		'Localidad2',
		'Ciudad2'
	);
	const person2: Person = new Person(
		'Maria',
		'Garcia',
		28,
		'54321098C',
		new Date(1995, 11, 2),
		'Rojo',
		'Mujer',
		[person_2],
		[new Mail('Trabajo', 'maria.garcia@example.com')],
		[new Phone('Trabajo', '555-543210')],
		'2008 Chevrolet'
	);
	phonebook.push(person0);
	phonebook.push(person1);
	phonebook.push(person2);
	return phonebook;
}

function showPhonebook(phonebook: Array<Person>): void {
	for (const person of phonebook) {
		console.log(person.showPersonInfo());
	}
}

let phonebook = buildPhonebook();
showPhonebook(phonebook);

const idPerson1: string = '12345678R';
const newperson_1: Address = new Address(
	'Calle Reyes',
	123,
	7,
	'H',
	5689,
	'Localidad_nueva',
	'Ciudad_nueva'
);
const newMailPerson1: Mail = new Mail('Personal', 'ali@armyspy.com');
const newPhonePerson1: Phone = new Phone('Personal', '555-06151');

function addData(
	phonebook: Array<Person>,
	idNumber: string,
	newAddress: Address,
	newMail: Mail,
	newPhone: Phone
): Person {
	let p = phonebook.filter(p_contact => p_contact.get_id() === idNumber)
	p[0].addAddress(newAddress)
	p[0].addPhone(newPhone)
	p[0].addMail(newMail)
	p[0].showPersonInfo()
	return p[0]
}

addData(phonebook, idPerson1, newperson_1, newMailPerson1, newPhonePerson1);
showPhonebook(phonebook);