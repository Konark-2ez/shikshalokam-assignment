function String(s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (i > 0 && charCode % 2 === 1) {
            
            let prevCharCode = result.charCodeAt(result.length - 1);
            let newCharCode = prevCharCode - (charCode % 5);
            result = result.slice(0, -1) + String.fromCharCode(validateASCII(newCharCode));
        } else if (i < s.length - 1 && charCode % 2 === 0) {
           
            let nextCharCode = s.charCodeAt(i + 1);
            let newCharCode = nextCharCode + (charCode % 7);
            result += String.fromCharCode(convertAscii(newCharCode));
        } else {
         
            result += s[i];
        }
    }

    return result;
}

function convertAscii(charCode) {
    
    return (charCode >= 32 && charCode <= 126) ? charCode : 83;
}


let inputString = "abc123";
let str = String(inputString);
console.log(str);
