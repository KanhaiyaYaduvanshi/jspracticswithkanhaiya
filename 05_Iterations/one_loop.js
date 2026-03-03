// for loop

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 is best number");
        
//     }
//     console.log(element);
    
// }

/*for (let i = 1; i <= 25; i++) {
    console.log(`outer loop values ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop values ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
}*/
/*let myArray = ["ram","krishna","shiv"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}*/

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break //break control flow completely
    }
    console.log(`Value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue //paush and continue skip one time
    }
    console.log(`Value of i is ${index}`);
    
}