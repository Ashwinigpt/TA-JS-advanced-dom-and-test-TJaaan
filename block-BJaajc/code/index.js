function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}

function isPalinDrome(string){
    let name = string.split("");
    let reverse = name.reverse();
    let result = reverse.reduce((acc, cv) =>{
        acc += cv;
        return acc;
    }, '')
    return string === result;
}

function getCircumfrence(radius){
    return `The circumference is ${2 * 22/7 * radius}`;
}

function getArea(radius){
    return `The area is ${22/7 * radius * radius}`;
}

module.exports = {
    getFullName,
    isPalinDrome,
    getCircumfrence,
    getArea,
}
