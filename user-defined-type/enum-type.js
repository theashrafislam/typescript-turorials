"use strict";
// enum - store - constants; duplicate value is not allowed here
// enum types: numeric, string, heterogeneous
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestType = void 0;
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (exports.RequestType = RequestType = {}));
;
// value বলে দিলে সেটাই ধরে নিবে, এছাড়া ফ্রিকুয়ান্ট অনুযায়ী ডিফল্টভাবে নিবে।
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType['deleteData']);
// ইন্ডিভিজুয়াল ডাটা নিতে হলে এভাবে করা জেতে পারে।
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["saveData"] = "Save_Data";
    RequestType2["deleteData"] = "Delete_data";
})(RequestType2 || (RequestType2 = {}));
;
// console.log(RequestType2.saveData);
// একই ওয়েতে console.log করা জেতে পারে।
// heterogeneous
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["saveData"] = "Save_Data";
    RequestType3["deleteData"] = "Delete_data";
    RequestType3[RequestType3["ReadNumber"] = 10] = "ReadNumber";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
;
// console.log(RequestType3.id);
console.log(RequestType3['id']);
