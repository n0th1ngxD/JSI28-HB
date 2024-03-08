let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
let mSquared = [];

for(let i = 0; i < m.length; i++) {
    // if(m[i] === Number(m[i])) {
    //     let temp = m[i] * m[i];
    //     mSquared.push(temp);
    // }

    if(typeof m[i] === 'number') {
        let temp = m[i] * m[i];
        mSquared.push(temp);
    }
}

console.log(mSquared);