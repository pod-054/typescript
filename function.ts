// TypeScript functions can be created both as a named function or as an anonymous function.
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result = buildName("Bob", "Adams");

console.log(result);