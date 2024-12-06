let word:string = "Hello word";
let num: number;
let totalType: string | number | boolean;

num = 10;
totalType = '101';
totalType = 101;
totalType = true;

// console.log(num)
// console.log(word);
// console.log(totalType);

function displayUserInfo(info: string | number | boolean){
    console.log(info);
};

displayUserInfo('101');
displayUserInfo(101);
displayUserInfo(true)

export{word}