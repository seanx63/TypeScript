import { isPalindrome, reverseToString } from "./reverse";
import { fibSeq, isLeapYear, isPrime } from "./number";





console.log(reverseToString("This is a reversed string."));
console.log(fibSeq(12));
console.log("is 1234 a palindrome?: "+isPalindrome(1234));
console.log("is 1221 a palindrome?: "+isPalindrome(1221));
console.log("is 'hello' a palindrome?: "+isPalindrome("hello"));
console.log("is 'racecar' a palindrome?: "+isPalindrome("racecar"));
console.log("is 12 a prime number?: "+isPrime(12));
console.log("is 13 a prime number?: "+isPrime(13));
console.log("is 2005 a leap year?: "+isLeapYear(2005));
console.log("is 2004 a leap year?: "+isLeapYear(2004));