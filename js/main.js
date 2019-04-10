let xz = [1, 2, 3, 4, 5];
//let pr = fr.splice(myFunction);

function myFunction() {
    let x = xz;
    //fr[0] = 6;
    //fr[1] = 7;
    //return value * 2;
    x.splice(2, 2, 6, 7);
    //return fr;
    //console.log(ja);
}
console.log(myFunction(xz));