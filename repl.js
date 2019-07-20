// for(const i=0;i<10;i++){
//   console.log(i)
// }

// var RegExp='hi';
// console.log(Window.RegExp)

// const Person={name:'tharika'}
// Person.name="sarita"
// this will work because we can change the value.
// const Person={name:'tharini'}
// this will not work because of binding in object 

// function outer(a){
//   function inner(b){
//     function more(c){
//       return a*b*c
//     }
//     return more
//   }
//     return inner
// }
// var x=outer(2)
// var y=x(3)
// console.log(y(1))


// var words = [10,9,8,7,6,5];

// const result = words.filter(word => word%2===1)

// console.log(result);


// var palindrome=function(word)
// {
//     for(var i=0;i<word.length/2;i++)
//         if(word.charAt(i)!=word.charAt(word.length-(i+1)))
//             return word+" is Not a Palindrome";
//     return word+" is Palindrome";
// }
// console.log(palindrome('sass'))


// var x=(String.fromCodePoint(134071))
// console.log(x.length)
// console.log(x.charCodeAt(0))
// console.log(x.codePointAt(0))
// console.log(x.charCodeAt(1))
// console.log(x.codePointAt(1))

// var isPlaindrome=function(x){
//   for(var i=0;i<x.length/2;i++)
//     if(x.charAt(i)!=x.charAt
//     (x.length-(i+1)))
//       return 'not palin';
//       return 'palin';
       
// }
// console.log(isPlaindrome(-1112111))

// function plain(str){
//   var re=/[^A-Za-z0-9]/g
  
//   var b=str.split('');
//   var str=str.toLowerCase().replace(re,'')
//   console.log(str.toLowerCase().replace(re,''))
//   var l = str.length;
//   console.log(l/2)
//   for(var i=0;i<l/2;i++){
//     if(str[i]!==str[l-1-i]){
//       return false;
//     }
//   } 
// }

// console.log(plain("SAS"))


// var re= /"abcthsgeh"/
// var regex= new RegExp('abc','g')
// console.log(regex.test(re))
// console.log(regex.exec(re))


// var check='shashi'
// console.log(check.includes('a'))
// console.log(check.indexOf('a'))


// var reverse = function(x) {
//     var result = 0;
//     var MAX_INT = Math.pow(2,32 - 1) - 1;
//     var MIN_INT = -Math.pow(2,32 - 1);

//     while(x !== 0){
//         result = result * 10 + x % 10;
//         x = (x / 10) | 0;
//     }
//     return (result > MAX_INT || result < MIN_INT) ? 0 : result;
// };
// console.log(reverse(-231))


// let x='harika';
// console.log(`name is ${x}`)

//  var re= /abcthsgeh/g
//  var se=re.toString()
//  var ve=se.lastIndexOf('/')
//  console.log(ve)
//  console.log(se.charAt(11))

// var a='abc\n\ xyz'
// console.log(a)
// console.log(String.raw`abc\n\ xyz`)

// function add(a,b){
//   return a+b
// }

// function add(a,b,c){
//   return a+b+c
// }

// console.log(add(1,2))
// console.log(add(1,2,3))



// function a(){
//   var a='test',
//   return function b(){
//     alert(a);
//     a='new test'
//   }
// }
// var func = a();
// func()
// func()
// var func2=a();
// func()
// func()



// const {
// 	a:aa,
// 	b:bb
// }={
// 	aa:'a',
// 	a:'test',
// 	b:'bb',
// 	bb:'b'
// }
// console.log(a);
// console.log(aa);
// console.log(b);
// console.log(bb);


// function romanize (num) {
//     if (isNaN(num))
//         return NaN;
//     var digits = String(+num).split(""),
//         key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                "","I","II","III","IV","V","VI","VII","VIII","IX"],
//         roman = "",
//         i = 3;
//     while (i--)
//         roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//     return Array(+digits.join("") + 1).join("M") + roman;
// }

// console.log(romanize(5))

// function convertToRoman(num) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   var str = '';

//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(num / roman[i]);
//     num -= q * roman[i];
//     str += i.repeat(q);
//   }
//   return str;
// }
// console.log(convertToRoman(2))


// var romanMatrix = [
//   [1000, 'M'],
//   [900, 'CM'],
//   [500, 'D'],
//   [400, 'CD'],
//   [100, 'C'],
//   [90, 'XC'],
//   [50, 'L'],
//   [40, 'XL'],
//   [10, 'X'],
//   [9, 'IX'],
//   [5, 'V'],
//   [4, 'IV'],
//   [1, 'I']
// ];

// function convertToRoman(num) {
//   if (num === 0) {
//     return '';
//   }
//   for (var i = 0; i < romanMatrix.length; i++) {
//     if (num >= romanMatrix[i][0]) {
//       return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
//     }
//   }
// }
// console.log(convertToRoman(6))


// var twoSum = function(nums, target) {
    
//     var temp=[]
//     for(var i=0;i<nums.length;i++){
//         for(var j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 temp.push(i)
//                 temp.push(j)
//             }
//         }
//     }
//     return temp
// };
// console.log(twoSum([2,7,11,15],9))

// function romanize(num) {
//   var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
//   for ( i in lookup ) {
//     while ( num >= lookup[i] ) {
//       roman += i;
//       num -= lookup[i];
//     }
//   }
//   return roman;
// }
// console.log(romanize(5))

// var romanToInt = function(s) {
//     var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
//     roman = '',
//     i;
//   for ( i in lookup ) {
//     // console.log(lookup[i])
//     while ( s >= lookup[i] ) {
//       roman += i;
//       // console.log(i)
//       s -= lookup[i];
//       console.log(roman)
//     }
//   }
//   return roman;
// };
// console.log(romanToInt('IX'))

// var romanToInt = function(s)
//  {
// var roman = "";

// var lookupObj = {
//    1000:"M",
//    900:"CM",
//    500:"D",
//    400:"CD",
//    100:"C",
//    90:"XC",
//    50:"L",
//    40:"XL",
//    10:"X",
//    9:"IX",   
//    4:"IV",
//    5:"V",
//    1:"I",
// };

// var arrayLen = Object.keys(lookupObj).length;

// while(s>0){

//  for (i=arrayLen-1 ; i>=0 ; i--){

//   if(s >= Object.keys(lookupObj)[i]){

//     roman = roman + lookupObj[Object.keys(lookupObj)[i]];        
//     s = s - Object.keys(lookupObj)[i];
//     break;

//   }
//  }
// }    

// return roman;

// }

// romanToInt("III");

// function longest_common_starting_substring(arr1){
//   const arr= arr1.concat().sort();
//   console.log(arr)
//   const a1= arr[0];
//   console.log(a1)
//   const a2= arr[arr.length-1];
//   console.log(a2)
//   const L= a1.length;
//   console.log(L)
//   let i= 0;
//   while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
//   return a1.substring(0, i);
// }

// console.log(longest_common_starting_substring(['goo', 'google'])); 

// function longest_common_starting_substring(arr) {
//     for (var i = 0; i < arr[0].length; i++) {
//         if (arr[0][i] !== arr[1][i]) {
//             return arr[0].slice(0, i);
            
//         }
//     }
 
//     return arr[0];

// }
// console.log(longest_common_starting_substring(['flower','flow','flight']));


// function longestCommonPrefix(strs) {
//     if(strs == null || strs.length == 0)
//         return "";
 
//     var minLen=999999999;
//     for(var i=0;i<strs.length;i++){
//         var str = strs[i];
//         if(minLen > str.length)
//             minLen = str.length;
//     }
//     if(minLen == 0) return "";
 
//     for(var j=0; j<minLen; j++){
//         var prev='0';
//         for(var i=0; i<strs.length ;i++){
//             if(i==0) {
//                 prev = strs[i].charAt(j);
//                 continue;
//             }
 
//             if(strs[i].charAt(j) != prev){
//                 return strs[i].substring(0, j);
//             }
//         }
//     }
 
//     return strs[0].substring(0,minLen);
// }
// console.log(longestCommonPrefix(['flower','flow','flight']));

// var isValid = function(s) {
//     if(s==="("||s===")"||s==="{"||s==="}"||s==="["||s==="]"||s==="()[]{}"){
//       return true
//     }
//     else{
//       return false
//     }
// };
// console.log(isValid("{[]}"))


// var isValid = function(s) {
//     while (s.length != 0 && s.includes("[]") || s.includes("()") || s.includes("{}")) {
//         s = s.replace("[]", "");
//         s = s.replace("()", "");
//         s = s.replace("{}", "");
//     }
//     return s.length < 1
// };


// console.log(isValid("([)]")); // True

// class linkedListData{
//   constructor(data){
//     this.data;
//     this.next;
//   }
// }
// var head = new linkedListData(12)
// head.next= new linkedListData(13)
// head.next.next= new linkedListData(14)

// let current=head

// while(current!==null){
//   console.log(current.data);
//   current=current.next
// }




// var removeDuplicates = function(nums) {
//     var sortedArray = nums.sort();
  
//     var len = sortedArray.length - 1;
    
//     var newArr = [];
   

//     if (len >= 0) {
//         for (var i = 0; i < len; i++) {
//             if (sortedArray[i] !== sortedArray[i + 1]) {
//                 newArr.push(sortedArray[i]);
//             }
//         }
//         newArr.push(sortedArray[len]);
//     }
//     return newArr

// }

// console.log(removeDuplicates([1,1,2]))



// class linkedList{
//   constructor(){
//     this.head=this.tail=null
//   }


// append(value){
//   //if the list is empty
//   if(!this.tail){
//     this.head=this.tail=new Node(value)
//   }
// else{
//   let oldTail=this.tail
//   this.tail=new Node(value)
//   oldTail.next=this.tail
//   this.tail.prev=oldTail
// }
// }
// prepend(value){
//   //if the list is empty
//   if(!this.head){
//     this.head=this.tail=new Node(value)
//   }
//   else{
//     let oldHead=this.head
//     this.head=new Node(value)
//     oldHead.prev=this.head
//     this.head.next=oldHead
//   }
  
// }
// deleteHead(){
//   //if list is empty
//   if(!this.head){
//     return null
//   }
// else{
//   let removedHead=this.head
//   if(this.head===this.tail){
//     this.head=this.tail=null
//   }
//   else{
//     this.head=this.head.next
//     this.head.prev=null
//   }
//   return removedHead.value
//   }
// }

// deleteTail(){
//   //if list is empty
//   if(!this.tail){
//     return null
//   }
// else{
//   let removedTail=this.tail
//   if(this.head===this.tail){
//     this.head=this.tail=null
//   }
//   else{
//     this.tail=this.tail.prev
//     this.tail.next=null
//   }
//   return removedTail.value
// }
// }

// search(value){
// let currentNode=this.head
// while(currentNode){
//   if(currentNode.value===value){
//     return currentNode
//   }
//   currentNode=currentNode.next
// }
// return null
// }
// }


// class Node{
//   constructor(value,prev,next){
//     this.value=value;
//     this.prev=prev||null;
//     this.next=next||null
//   }
// }

// let list=new linkedList()

// list.append(1)
// list.append(2)
// list.append(3)

// list.prepend(0)
// list.prepend(-1)

// list.search(1)

// list.deleteHead()
// list.deleteTail()

// list



// for(var i=10;i>=1;i--){
// 	console.log(i);
// }

// var n = 10;

// while (n > 1) {
//     n--
//     console.log(n)
//   }

// let url = "http://dummy.restapiexample.com/api/v1/employees"
  // function api_call(){
  //   return
  //     fetch('http://dummy.restapiexample.com/api/v1/employees')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data) 
  //     })
  //     .catch(error => console.error(error))
  // }

  // console.log(api_call())


//  let url = "http://dummy.restapiexample.com/api/v1/employees"
//   function a(){
//     return fetch(url)
//   }
//   console.log(a())

// const fetch = require("node-fetch");

// //let url = "http://dummy.restapiexample.com/api/v1/employees"
 
//       fetch('http://dummy.restapiexample.com/api/v1/employees')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data) 
//       })
//       .catch(error => console.error(error))
  
// class Node{
// 	constructor(data,next=null){
// 		this.data=data;
// 		this.next=next
// 	}
// }


// class LinkedList{
// 	constructor(){
// 		this.head=null;
// 		this.size=0;
// 	}

// //insert first Node
// 	insertFirst(data){
// 		this.head = new Node(data, this.head);	
// 		this.size++	
// 	}
// //insert last Node

// insertLast(data){
// 	let node= new Node(data);
// 	let current;
// 	//if empty,make head
// 	if(!this.head){
// 		this.head=node;
// 	}else{
// 		current=this.head;

// 		while(current.next){
// 			current=current.next;
// 		}
// 		current.next=node;
// 	}
// 	this.size++
// }
// //insert at index
// insertAt(data,index){
// 	//if index is out of range
// 	if(index>0&&index>this.size){
// 		return;
// 	}

// //if first index
// if(index===0){
// 	this.head=new Node(data, this.head);
// 	return;

// }
// const node= new Node(data);
// let current,previous;
// //set current to first
// current=this.head;
// let count=0;

// while(count<index){
// 	previous=current;//node before index
// 	count++;
// 	current=current.next; //node after index
// }
// node.next=current;
// previous.next=node;

// this.size++
// }
// //get at index
// getAt(index){
// 	let current=this.head;
// 	let count=0;
// 	while(current){
// 		if(count=index){
// 			console.log(current.data);
// 		}
// 		count++
// 		current=current.next;
// 	}
// 	return null;
// }

// //remove at index
// removeAt(index){
// 	if(index>0&&index>this.size){
// 		return;
// 	}
// 	let current=this.head;
// 	let previous;
// 	let count=0;

// 	//remove first
// 	if(index===0){
// 		this.head=current.next;
// 	}else{

// 		while(count<index){
// 			count++;
// 			previous=current;
// 			current=current.next
// 		}
// 		previous.next=current.next;
// 	}
// 	this.size--
// }
//clear list

// clearList(){
// 	this.head=null;
// 	this.size=0;
// }

// //print list data
// printListData(){
// 	let current=this.head;
// 	while(current){
// 		console.log(current.data);
// 		current=current.next;
// 	}
// }




// }

// const ll=new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// //ll.clearList();
// ll.insertAt(500,10)
//ll.removeAt(33)
// ll.printListData()
//ll.getAt(10)


// var a='hello world anisha elephant'
// b=a.split(' ')
// //console.log(b)
// let c=(b[b.length-1])
// console.log(c.length)


// function makeRequest(a,timeout=0){
//   return(
//   timeout=timeout||2000)
//   console.log(timeout)
  
// }
// console.log(makeRequest(30))


// function sumAll(...args) { 
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

//  sumAll(1, 2, 3,4,5,6,7,8,9) 


// let str = 'abcabbab'
// let p = 'a.'
// if (p.includes('.')){
//  var a = p.replace('.','b');
//  console.log(a)
// }

//    for (int i = text.length(); i >= 0; i--){
//             for (int j = pattern.length() - 1; j >= 0; j--){
//                 boolean first_match = (i < text.length() &&
//                                        (pattern.charAt(j) == text.charAt(i) ||
//                                         pattern.charAt(j) == '.'));
//                 if (j + 1 < pattern.length() && pattern.charAt(j+1) == '*'){
//                     dp[i][j] = dp[i][j+2] || first_match && dp[i+1][j];
//                 } else {
//                     dp[i][j] = first_match && dp[i+1][j+1];
//                 }
//             }
//         }
//         return dp[0][0];
//     }




// function add(first, second=4){
// console.log(first===arguments[0]);
// console.log(second===arguments[1]);

// first=5;
// second=6;

// console.log(first===arguments[0]);
// console.log(second===arguments[1]);
  
// }

// add(2)


// function fool(){
//   return {
//     bar:'Hello'
//   }
// }
 
// function fool2(){
//   return
//   {

// bar:'Hello'
//   }
// }
// fool()
//fool2()


//   var th = ['','thousand','million', 'billion','trillion'];
// var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
//  var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
//  var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

// function toWords(s) {
//     s = s.toString();
//     s = s.replace(/[\, ]/g,'');
//     if (s != parseFloat(s)) return 'not a number';
//     var x = s.indexOf('.');
//     if (x == -1)
//         x = s.length;
//     if (x > 15)
//         return 'too big';
//     var n = s.split(''); 
//     var str = '';
//     var sk = 0;
//     for (var i=0;   i < x;  i++) {
//         if ((x-i)%3==2) { 
//             if (n[i] == '1') {
//                 str += tn[Number(n[i+1])] + ' ';
//                 i++;
//                 sk=1;
//             } else if (n[i]!=0) {
//                 str += tw[n[i]-2] + ' ';
//                 sk=1;
//             }
//         } else if (n[i]!=0) { // 0235
//             str += dg[n[i]] +' ';
//             if ((x-i)%3==0) str += 'hundred ';
//             sk=1;
//         }
//         if ((x-i)%3==1) {
//             if (sk)
//                 str += th[(x-i-1)/3] + ' ';
//             sk=0;
//         }
//     }

//     if (x != s.length) {
//         var y = s.length;
//         str += 'point ';
//         for (var i=x+1; i<y; i++)
//             str += dg[n[i]] +' ';
//     }
//     return str.replace(/\s+/g,' ');
// }
// console.log(toWords(1112))



// let isMatchingBrackets = function (str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
        
//         else {
//             let last = stack.pop();

           
//             if (str[i] !== map[last]) {return false};
//         }
//     }
  
//         if (stack.length !== 0) {return false};

//     return true;
// }
// console.log(isMatchingBrackets('[]{})'))

// function isStrongPwd(password) {
 
//      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
//      var lowercase = "abcdefghijklmnopqrstuvwxyz";
 
//      var digits = "0123456789";
 
//     var splChars ="!@#$%&*()";
 
//      var ucaseFlag = contains(password, uppercase);
 
//      var lcaseFlag = contains(password, lowercase);
 
//      var digitsFlag = contains(password, digits);
 
//      var splCharsFlag = contains(password, splChars);
 
//      if(password.length>=8)
//            return true;
//      else
//            return false;
 
//   }
  

//   function contains(password, allowedChars) {
 
//     for (i = 0; i < password.length; i++) {
 
//             var char = password.charAt(i);
 
//              if (allowedChars.indexOf(char) >= 0) { return true; }
 
//          }
 
//      return false;
// }

// console.log(isStrongPwd('shasawA1@'))

// var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// var b=animals.lastIndexOf('Dodo')
// console.log(b)

// var array1 = [1, 4, 9, 16];
// var b=array1.map(function(x){
// console.log(x+2)})

// var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// plants.pop()
// console.log(plants)
// plants.push('orange')
//console.log(plants)
// plants.unshift('apple')
// console.log(plants)
// plants.shift()
// console.log(plants)
// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// animals.splice(2,0,'kukur')
// console.log(animals)


// var a={
//   a:1,
//   b:2
// }
// var b={
//   b:3,
//   c:4
// }

// var c=Object.assign(a,b)
// console.log(c)

// var a={}

// Object.defineProperties(a,{

// value:23,
// enumerable:true

// })

// console.log(a)
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(new Date())

// var regex = /hello/;
// console.log(regex)
// var str = 'hello world';
// var result = regex.test(str);
// console.log(result);

// var regexGlobal = /abc/g;
// console.log(regexGlobal.test('abc'));

// var regexInsensitive = new RegExp('abc','i')
// console.log(regexInsensitive.test('Abc'));


var plusOne = function(digits) {
  
    
};