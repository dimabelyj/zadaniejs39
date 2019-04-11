let xz = [1, 2, 3, 4, 5];
//let x = xz.splice(myFunction);

function zmienElementy(x) {
    //let x = xz;
    //let xz[0] = 6;
    //let xz[1] = 7;
    //return value * 2;
    x.splice(0, 2, 6, 7);
    return x;
}
//console.log(myFunction(tabl));
console.log(zmienElementy(xz));