/* `Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos */

export default class Person {
  private _name : string;
  private _birthDate : Date;

  constructor(name:string, birthDate: string) {
    this._name = name;
    this._birthDate = new Date(birthDate);
  }

  get name(): string {
    return this._name;
  }

  set name(name:string) {
    if (name.length < 3) {
      throw new Error('name must have at least 3 characters');
    } this._name = name; 
  }

  get birthDate(): Date {    
    return this._birthDate;
  }

  set birthDate(birthDate:Date | string) {
    const newBirthDate = this.stringVerify(birthDate);
    const DateNow = new Date();
    const age = this.calculateAgeDiffence(newBirthDate);    
    if (DateNow < newBirthDate) {
      console.log('Date have some problem');
      return;
    } if (age >= 120) {
      console.log('A pessoa não pode possuir mais de 120 anos');
      return; 
    } this._birthDate = newBirthDate;
  }
  
  // eslint-disable-next-line class-methods-use-this
  calculateAgeDiffence(birthDate: Date): number {
    const diff = Date.now() - birthDate.getTime();
    const ageDt = new Date(diff);   
    const age = Math.abs(ageDt.getUTCFullYear() - 1970);
    return age;
  }

  // eslint-disable-next-line class-methods-use-this
  stringVerify(string: string | Date): Date {
    if (typeof string === 'string') { return new Date(string); }
    return string;
  }
}

const gabriel = new Person('gabriel Barbosa Lima Borges', '01/09/1995');

gabriel.birthDate = '03,05,1903';

console.log(gabriel.birthDate);