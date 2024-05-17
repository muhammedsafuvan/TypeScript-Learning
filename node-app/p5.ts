//1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User{
    age: number;
    name: string;
}
function isLegal(user: User): boolean {
    if (user.age > 18){
        return true;
    }
    return false;
}