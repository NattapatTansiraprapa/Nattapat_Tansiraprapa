let json = '{"fname" : "sam" , "lanme":"smith"}';
let obj = JSON.parse(json);

//console.log(typeof(obj));

let obj2 = {
    fname : "Jack",
    lname : "Smith"
};
let json2 = JSON.stringify(obj2);
console.log(json2);