// console.log("welcome tto the array class");
// let fruits=["apple","Banana","Orange"];
// console.log(fruits[2]);

// // push(one name add)
// let names=["jaya","hemanth","teju"];
// names.push("loge");
// console.log(names);

// // pop(last name remove)

// names.pop();
// console.log(names);


// // unshift()(newly add 1st)
// let vege=["capsicum","tomato","potato"];
// vege.unshift("pumpkin");
// console.log(vege);

// // splice(add/delete) pink-0,yellow-1,violet-2

// let colors=["pink","yellow","violet"];
// colors.splice(3,1);
// console.log(colors);

// colors.splice(1,1,"darkblue");

// // o/p
// //  0-"pink"
// //  1-"darkblue"
// //  2-"violet"


// // reverse(all numbers are reverse)

// let nums=[1,2,3,4,5,6];
// nums.reverse();
// console.log(nums);
// // o/p  [6, 5, 4, 3, 2, 1]


// // join() convert array to string
// let letters=["a","b","c"];
// let result=letters.join("-");
// console.log(letters);
// //  double quot ans= ['a', 'b', 'c']


// // split() string to array

// let str="hello";
// let words=str.split("");
// console.log(words);
// // o/p ['hell', '']
// // 53 line split("")=o/p ['h', 'e', 'l', 'l', 'o']


// // merge2 array
// let arr1=[4,5];
// let arr2=[7,8];
// let merged=arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(merged);

// // o/p  [4, 5, 7, 8]



// named function

function demo()
{
    console.log("hello welcome");
}
demo();


// anonymous function

setTimeout(function(){
    console.log("Hello how are you!");},5000);

    // arrow function

    const arrowfunction=()=>{
        console.log("IOT JAVASCRIPT");
    }
    arrowfunction();

// IIFE
(function(){console.log("I run immediate");})();


// call back function

function greet(callback){
    callback();
}
greet(function(){
    console.log("hello the call back");
});



// ex

function demo(a,b)
{
    console.log(a+b);

}
demo(5,8);
function demo(callback){
    callback();
}
demo function(){
    console.log("call back function")};

