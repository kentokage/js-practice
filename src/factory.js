// factory
// literally just returns a new object
const createUser = ({ userName = "Anonymous", avatar = "test.png" } = {}) => ({
    userName,
    avatar,
});

const kenny = createUser({ userName: "Kenny", avatar: "kenny.png" });
console.log(kenny);

const unknown = createUser();
console.log(unknown);

const old = String.prototype.toUpperCase;
// const myToUpperCase = (str) => old(str + "worked!");
const myToUpperCase = function () {
    const newStr = this + "test";
    // return old.call(newStr);
    // return old.apply(newStr);
    return old.bind(newStr)();
};

String.prototype.toUpperCase = myToUpperCase;

console.log("Kenny".toUpperCase());
