// enum - store - constants; duplicate value is not allowed here
// enum types: numeric, string, heterogeneous

// numeric enum
enum RequestType {
    readData = 1,
    saveData = 3,
    deleteData
};
// value বলে দিলে সেটাই ধরে নিবে, এছাড়া ফ্রিকুয়ান্ট অনুযায়ী ডিফল্টভাবে নিবে।
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType['deleteData']);
// ইন্ডিভিজুয়াল ডাটা নিতে হলে এভাবে করা জেতে পারে।

// string enum
enum RequestType2 {
    readData = "Read_Data",
    saveData = "Save_Data",
    deleteData = "Delete_data"
};
// console.log(RequestType2.saveData);
// একই ওয়েতে console.log করা জেতে পারে।

// heterogeneous

enum RequestType3 {
    readData = "Read_Data",
    saveData = "Save_Data",
    deleteData = "Delete_data",
    ReadNumber = 10,
    id = 101
};
// console.log(RequestType3.id);
console.log(RequestType3['id']);

export{RequestType}