// //задание 1
// const mass1 = [{
//     key:0
// }];
// const mass2 = [{
//     key:1
// }];
// const mass3 = [{
//     key:2
// }];
// const mass4 = [{
//     key:3
// }];
// const mass5 = [{
//     key:4
// }];
//
// const mass7 = [{...mass1, mass2, mass3, mass4, mass5}];
// console.log(mass7);
//
// //задание 2
// const obj = {
//     key1:1,
//     key2:2,
//     key3:3,
//     key4:4,
//     key5:5
// }
// const obj2 = {
//     ...obj,
//     key6:"first",
//     key7:"second",
//     key8:"third"
// }
// console.log(obj2);

// задание 3
document.querySelector('button').onclick = click;

function click() {
    let a = document.querySelector('.input').value;
    document.querySelector('.out').innerHTML = "Hello " + a;
}



