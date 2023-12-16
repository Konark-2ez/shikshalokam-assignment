function subString(s){
    
    let res = []
    for(let i=0;i<s.length;i++){
       let substr = ""
       for(let j=i;j<s.length;j++){
        substr += s.charAt(j)
        res.push(substr)
       }
    }
    return res

}
function shortSub(substrings,x){
    let result = [];
    let minLength = Infinity;

    for (let i = 0; i < substrings.length; i++) {
        const substring = substrings[i];
        if (substring.length >= x && substring.charAt(0) === substring.charAt(substring.length - 1)) {
            if (substring.length < minLength) {
                result = [substring];
                minLength = substring.length;
            } else if (substring.length === minLength) {
                result.push(substring);
            }
        }
    }

    return result;
}

let s  = "abbabca"
let x = 3
console.log(shortSub((subString(s)),x).join(""))

