//unique letters from string
function getUnique(str) {
    return Array.from(new Set(str)).join("");
    //return [...new Set(str)].join("");
}

console.log(getUnique("abracadabra"));
//abc