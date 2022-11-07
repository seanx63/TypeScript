export function fibSeq(n: number): number[] {
    let a: number = 0, b: number = 1, c: number, fib: number[] = [1, ];
    for (let i: number = 0; i < n - 1; i++) {
        c = a + b;
        fib.push(c);
        a = b;
        b = c;
    }
    return fib;
}
export function isPrime(n: number): boolean {
    for (let i: number = 2; i < n; i++) {
        let div: number = n/i;
        if (div == Number(div.toFixed(0))) {
            return false;
        }
    }
    return true;
}
export function isLeapYear(n: number): boolean {
    if ((0 == n % 4) && (0 != n % 100) || (0 == n % 400)) {
        return true;
    } else {
        return false;
    }
}