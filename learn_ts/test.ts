let user = { name: "Alice", address: { city: "Wonderland" } };
console.log(user?.address?.city); // 如果 address 存在则输出 city，否则返回 undefined

let user2 = { name: "Alice", address: { city: null } };
console.log(user2?.address?.city); // 如果 address 存在则输出 city，否则返回 undefined

let value = null;
console.log(value ?? "default"); // 如果 value 为 null 或 undefined，则返回 "default"