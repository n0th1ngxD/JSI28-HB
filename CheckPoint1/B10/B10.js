let str = " High knowledge, high return";
let arr = [...str];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == " ") {
        console.log("adad");
        arr.splice(i, 1);
    }
}