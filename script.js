function firstNonRepeatedChar(str) {
	const obj={};
	for(const s of str){
		obj[s]=(obj[s] || 0)+1;
	}

	for(const s of obj){
		if(obj[s]===1){
			return s;
		}
	}
	return null;	
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
