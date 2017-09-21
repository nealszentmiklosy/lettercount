//count number of letters in a given string
let string = "alexander"
var letters = {}
for (i=0;i<string.length;i++){
	if(letters[string[i]]==undefined){
		letters[string[i]] = 1
	} else {
		letters[string[i]]++
	}
};
console.log(letters);
