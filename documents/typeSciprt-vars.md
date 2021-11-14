＃TypeScriptの型の記述サンプル
```js
//boolean
let bool: boolean = true;

// number
let num: number = 1;

// String
let str: string = "A";

// Array
let arr1: Array<number> = [0, 2, 1];
let arr2: number[] = [9, 8, 7];

// tuple
let tuple: [number, string] = [111, "aaa"];

// any
let any1: any = false;

// void
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// objet
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "aa" };

```