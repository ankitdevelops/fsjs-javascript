// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// String

const stringType = "Hello There";
console.log(`Value: ${stringType}, DataType: ${typeof stringType}`);

// boolean

const booleanTypeTrue = true;
const booleanTypeFalse = false;

console.log(`Value: ${booleanTypeTrue}, DataType ${typeof booleanTypeTrue}`);
console.log(`Value: ${booleanTypeFalse}, DataType ${typeof booleanTypeFalse}`);

// undefined

const undefinedType = undefined;
let anotherUndefinedType;

console.log(`Value: ${undefinedType}, DataType ${typeof undefinedType}`);
console.log(
  `Value: ${anotherUndefinedType}, DataType ${typeof anotherUndefinedType}`
);

// null
const nullType = null;

console.log(`Value: ${nullType}, DataType ${typeof nullType}`); // DataType output will be object because datatype of null is Object
