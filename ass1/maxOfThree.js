function maxOfThree(a, b, c) {
    if (a > b) {
        b = a;
    }
    else {
        a = b;
    }

    if (c > a) {
        return c;
    }

    else {
        return a;
    }
}

console.log(maxOfThree(4, 5, 0));