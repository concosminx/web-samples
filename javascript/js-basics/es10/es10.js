//flat
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(2))


//flat map
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')))


//flat infinity
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity))

//trim start/end
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimEnd().trimStart())

//entries
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)

//from entries
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)