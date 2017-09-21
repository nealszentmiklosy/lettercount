//count number of letters in a given string
//string to be checked
// function (string,check,count){
// 	for(k=0;k<count.length;k++){
// 		if(check==string[k])
// 	}
// }
let string = "alexander"
var letters = {}
for (i=0;i<string.length;i++){
	if(letters[string[i]]==false){
		letters[string[i]] = string[i]
	} else {
		letters[string[i]]++
	}
}
console.log(letters);
