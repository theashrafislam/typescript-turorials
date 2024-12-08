let users: object[];
users = [];
// users = [
//     { userName: 'Ashraful Islam', userId: 10 },
//     { userName: 'Ariyan Islam', userId: 11 }
// ];
// console.log(users);
let user1: {userName: string, userId?: number};
// যদি কোনোটির ভ্যালু অপশনাল রাখতে চাই তাহলে {userId?: number} এভাবে রাখ্রা জায়।
user1 = {userName: 'Anis', userId: 101};
users.push(user1)
// console.log(users);
let user2: {userName: string, userId?: number};
user2 = {userName: 'Ariyan', userId: 102};
users.push(user2);
// console.log(users);
for (const key in users) {
    console.log(users[key]['userName']);
}