
// 4.

// const cutString = (word,n) => {
//     return word.substring(0,n);
// }

// console.log(cutString('Gabriel Vidal',6));

//-----------------------------------------------------------------------------
// const capitalize = (word) => {
//     let arr = [];
//     arr = word.split(' ');
//     let names = arr.map((element)=>{
//         let firstLetter = element[0];
//         element = element.replace(firstLetter,firstLetter.toUpperCase());
//         return element;
//     });
//     return names;
// }

// console.log(capitalize('gabriel vidal'));

//---------------------------------------------------------------------------------
// const truncate = (word,pos,str) => {
//     if(typeof(pos) === 'undefined'){
//         pos = 0;
//     }
//     if(typeof(str) === 'undefined'){
//         str = '...';
//     }
//     return word.slice(0,pos) + str;
// }

// console.log(truncate('gabriel',2));
//----------------------------------------------------------------------------------
// const repeat = (word,number = 0) => {
//     if(typeof(number) === 'undefined' || number === 0) {
//         return 'Error in string or count';
//     } else {
//         return word.repeat(number);
//     }
// }

// console.log(repeat('teste'));


//----------------------------------------------------------------------------------
// const strip = (word) => {
//     return word.trim();
// }

// console.log(strip(' Teste              '));

//---------------------------------------------------------------------------------------
// const truncate = (word,num) => {
//     return word.split(' ').splice(0,num).join(' ');
// }
// console.log(truncate('my name is',2));

//----------------------------------------------------------------------------------------

// const alphabetize = (word) => {
//     return word.split('').sort().join('').trim();
// }
// console.log(alphabetize('Testando'));

//----------------------------------------------------------------------------------------
const remove = (word,ocurr) => {
    let index = word.indexOf(ocurr);
    
}