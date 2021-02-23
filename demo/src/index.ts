import "./index.scss";

import Cookies from "../../src/Cookies";

const test_0 = {
    test_0_1: 1,
    test_0_2: 2,
    test_0_3: 3,
};

const test_1 = {
    test_1_1: true,
    test_1_2: false,
    test_1_3: [1, 2, 3, 4, 5],
};

const test_2 = "I hope you find this information useful!";

Cookies.set("test_0", test_0, {expires: 7});
Cookies.set("test_1", test_1, {expires: 7});
Cookies.set("test_2", test_2, {expires: 7});

function printResult(name: string): void {
    let string = Cookies.get(name);
    let json = Cookies.getJSON(name);

    console.log(`(string) ${typeof string}:`, string);
    console.log(`(json) ${typeof json}:`, json);

    console.log(`(string) all:`, Cookies.get());
    console.log(`(json) all:`, Cookies.getJSON());
}

console.group("Set");
{
    console.group("test_0");
    printResult("test_0");
    console.groupEnd();

    console.group("test_1");
    printResult("test_1");
    console.groupEnd();

    console.group("test_2");
    printResult("test_2");
    console.groupEnd();
}
console.groupEnd();


console.group("Remove");
{
    console.group("test_0");
    Cookies.remove("test_0");
    printResult("test_0");
    console.groupEnd();

    console.group("test_1");
    Cookies.remove("test_1");
    printResult("test_1");
    console.groupEnd();

    console.group("test_2");
    Cookies.remove("test_2");
    printResult("test_2");
    console.groupEnd();
}
console.groupEnd();
