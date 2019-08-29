
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
// let greeting = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You are all I want for Christmas',
//                  'Get well soon'];
// greeting.forEach((Element) => {
//     if(Element.indexOf('Christmas') !== -1){
//         console.log(Element);
//     }
// });
//---------------------------------------------------
// let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
​
// cities.forEach((city)=>{
//     let lowCity = city.toLowerCase();
//     let firstLetter = lowCity[0].toUpperCase();
//     let final = lowCity.replace(lowCity[0],firstLetter);
//     console.log(final);
// })
// ----------------------------------------------------------------------------------
​
// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
​
// stations.forEach((station)=>{
//   let name = `${station.slice(0,3)}: ${station.slice(station.indexOf(';')+1,station.length-1)}`;
//   console.log(name);
​
// });
​
//---------------------------------------------------
// ----------- exercicios array
// let text = 'Underpants:6.99,Socks:5.99,T-shirt:14.99,Trousers:31.99,Shoes:23.99',
//     myarray = text.split(','),
//     products = myarray;
​
// products.forEach((arr)=>{
//     let str = arr.toString(),
//         nome =[],
//         preco = [];
//     nome.push(str.slice(0,str.indexOf(':')));
//     preco.push(Number(str.slice(str.indexOf(':')+1,str.length-1)));
​
//     console.log(nome);
//     console.log(preco);
​
// });
//------------------------------------------------------
// concat strings
// const concatStr = (str,times) => {
// 	let returnStr = '';
// 	for(let i = 0;i<times;i++) {
// 		returnStr = returnStr + str;
// 	}
// 	return returnStr;
// }
​
// console.log(concatStr('teste',2));
​
//---------------------------------------------------
// const parametrize = (word) => {
// 	return word.replace(' ','-');
// }
// console.log(parametrize('Testando 123'));
​
//--------------------------------------------
// const abreviate = (word) => {
// 	let secondName = word.substring(word.indexOf(' ')+1,word.length),
// 		abreviateName = word.replace(secondName,secondName[0]);
// 	return abreviateName;
// }
​
// console.log(abreviate('Gabriel Vidal'));
​
​
//--------------------------------------------
// const userEmail = (email) => {
// 	let arrEmail = email.split('@');
// 	let	firstPart = arrEmail[0];
// 	let	halfPart = firstPart.substring(firstPart.length/2,firstPart.length);
// 	firstPart = firstPart.replace(halfPart,'...');
// 	return `${firstPart}@${arrEmail[1]}`;
// }
​
// console.log(userEmail('gabriel_gondim@gmail.com'));
​
​
//--------------------------------------------------------------------------------
// const capitalize = (word) => {
//     let arr = [];
//     arr = word.split(' ');
//     let names = arr.map((element)=>{
//         let firstLetter = element[0];
//         element = element.replace(firstLetter,firstLetter.toUpperCase());
//         return element;
//     });
// 	word = names.join(' ');
// 	return word;
// }
​
// console.log(capitalize('gabriel vidal gondim'));
​
//-------------------------------------------------
​
//1 Forma
​
// const lowerToUpper = (word) => {
// 	let arr =[];
// 	arr = word.split('');
// 	let compare = arr.map((element) =>{
// 		if(element === element.toUpperCase() ){
// 			element = element.toLowerCase();
// 		}
// 		else if (element === element.toLowerCase()){
// 			element = element.toUpperCase();
// 		}
// 		return element;
// 	});
// 	return compare.join('');
// }
​
// console.log(lowerToUpper('GgHh'));
​
//2 Forma
​
// const lowerToUpper = (word) => {
// 	return word.replace(/([a-z]+)|([A-Z]+)/g,(match,chr) =>{
// 		return chr ? match.toUpperCase() : match.toLowerCase();
// 	});
// }
​
// console.log(lowerToUpper('AaGg'));
​
//---------------------------------------------------
​
// const insert = (word,insertStr,position) => {
// 	if(typeof(insertStr) === 'undefined'){
// 		insertStr = '';
// 	}
// 	if(typeof(position) === 'undefined'){
// 		position = 0;
// 	}
// 	return word.slice(0,position) + insertStr + word.slice(position);
	
// }
​
// console.log(insert('Good','name',3));
​
//-------------------------------------------------
// const numberToStr = (number) => {
// 	let str = number.toString();
	
// 	if(parseInt(str[str.length -1 ]) === 1){
// 		return str + 'st';
// 	} else {
// 		return str + 'th';
// 	}
// }
​
// console.log(numberToStr(110));
​
//------------------------------------------------------
​
// const formattedString = (word,addedStr,position = 'R') => {
// 	if(position === 'R' || typeof(position) === 'undefined') {
// 		return word.slice(0,word.length - addedStr.length) + addedStr;
// 	} else {
// 		return addedStr + word.slice(0,word.length - addedStr.length);
// 	}
// }
// console.log(formattedString('00000000','123','l'));
​
//-----------------------------------------------------------
// const subsAfterChar = (word,char) => {
// 	return word.slice(0,word.indexOf(char));
// }
​
// console.log(subsAfterChar('My name', 'm'));
​
//---------------------------------------------
// const strip = (word) => {
// 	return word.trim();
// }
//------------------------------------------------------------------
// const removeFirstOcurrance = (word,ocurr) => {
// 	return word.slice(0,word.indexOf(ocurr))+word.slice(word.indexOf(ocurr)+ocurr.length,word.length);
// }
// console.log(removeFirstOcurrance('The first part','first'));
​
//--------------------------------------------------------------
// const searchWord = (word,ocurr) => {
// 	let find = 0;
// 	word.split(' ').forEach(element => {
// 		if(element === ocurr){find++};
// 		return element;
// 	});
// 	return `${ocurr} was found ${find} times`;
// }
​
// console.log(searchWord('Testando testando testando','oi'));
​
//--------------------------------------------------------------
// const ends = (word,endWord) => {
// 	return word.endsWith(endWord);
// }
// console.log(ends('My name is','is'));​
//--------------------------------------------------------------
