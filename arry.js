// var teaLine =['kalam', 'salam','balM','talam','malam'];
// var part = teaLine.slice(2,4);
// console.log(part);
// console.log(teaLine);
// 
// 
// 01.Write a JavaScript function to check whether an 'input' is an array or not.
var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
// 02.Write a JavaScript function to clone an array.  
  
//   var array_Clone = function(arra1) {
//     return arra1.slice(3);
//        };
//    console.log(array_Clone([1, 2, 4, 0]));
//    console.log(array_Clone([1, 2, [4, 0]]));
   