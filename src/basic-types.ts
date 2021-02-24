module BasicTypes {
  const name: string = 'Pepe Alcala';
  console.log(name);

  const age: number = 12;
  console.log(age);

  let isLoading: boolean = true;
  console.log(isLoading);
  isLoading = false;
  console.log(isLoading);

  const Person: any = { name: 'Pepe' };
  Person.name = 'Luis';
  console.log(isLoading);

  const OtherPerson: unknown = { name: 'Pepe' };
  // OtherPerson.name = 'Luis';
  console.log(OtherPerson);

  let nameUndefined: string;
  console.log(nameUndefined);
  
  let nameNull: string  = null;
  console.log(nameNull);
}