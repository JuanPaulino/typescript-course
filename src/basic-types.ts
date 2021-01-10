const LINE_BREAK = '\n'
module BasicTypes {
  console.log('1. String type:');
  let userName: string = 'Juan Paulino';
  console.log('- My name is '+userName);
  console.log("- My name is "+userName);
  console.log(`- My name is ${userName}`);

  console.log(`2. Number type:`);
  let numberOfSubscribers: number = 1000;
  console.log(`- numberOfSubscribers: ${numberOfSubscribers}`);

  console.log('3. Boolean type:');
  let isCompleted: boolean = true;
  console.log(`- isCompleted: ${isCompleted}`);
  let isIncompleted: boolean = false;
  console.log(`- isIncompleted: ${isIncompleted}`);

  console.log('4. Array type:');
  let users: string[] = ['Luis', 'Maria', 'Eduardo'];
  console.log(users);
  console.log(`- users: ${users}`);

  console.log('5. Tuple type:');
  let answers: [string, boolean] = ['¿Soy programador?', false];
  console.log(answers);
  console.log(`- answers: ${answers}`);

  console.log('6. Dictionary type:');
  let questions: { [key: string]: boolean } = {
    '¿Soy Programador?': true,
    '¿Vivo en Sevilla?': false,
  };
  console.log(questions);
  console.log(`- questions: ${questions}`);

  console.log('7. Unknown type:');
  let notSure: unknown = true;
  // NotSure.example = 2;
  console.log(notSure);
  console.log(`- notSure: ${notSure}`);

  console.log('8. Any type:');
  let isAnyType: any = false;
  // IsAnyType.example = 2;
  console.log(isAnyType);
  console.log(`- isAnyType: ${isAnyType}`);

  console.log('9. Undefined type:');
  let undefinedData: string = undefined;
  console.log(undefinedData);
  console.log(`- undefinedData: ${undefinedData}`);

  console.log('10. Null type:');
  let nullData: string = null;
  console.log(nullData);
  console.log(`13. nullData: ${nullData}`);
}