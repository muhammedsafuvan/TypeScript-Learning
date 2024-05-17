// Array in TS

// 1. Given an array of positive integers as input, return the maximum value in the array

function findMax(numbers: number[]){
    let ans = 0;
    for(let i=0; i< numbers.length; i++){
        if (numbers[i] > ans) {
            ans = numbers[i]
        }
    }
    return ans;
}

console.log(findMax([1, 2,3]));



//  2. Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
	firstName: string;
	lastName: string;
	age: number;
}


function filteredUsers(users: User[]){
   let  arr: User[] = []
    for(let i=0; i < users.length; i++){
        if (users[i].age > 18){
            arr.push(users[i]);
        }

    }
    return arr;

}

console.log(filteredUsers([{
    firstName: "M", lastName: "S", age: 20,
},{firstName: "A", lastName: "B", age: 2}]));
