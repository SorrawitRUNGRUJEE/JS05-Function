บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // * => alert Execute modal => alert is afunction expression in global scope
```

```js
const showModal = alert();
showModal("Execute modal"); // ** error =>  alert has not been defined as ffunction as this point so sending a parameter to the showModal would result in error
```
