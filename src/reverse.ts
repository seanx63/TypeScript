export function reverseToString(msg: string|number): string {
    let reversedString: string = "";
    let msgString: string = msg.toString();
    for (let i: number = msgString.length - 1; i >= 0; i--) {
        reversedString += msgString[i];
    }
    return reversedString;
}
export function isPalindrome(msg: string|number): boolean {
    return msg == reverseToString(msg);
}