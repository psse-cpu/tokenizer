### InfixTokenizer

Use this package if you find it hard to tokenize infix expressions.

#### :warning: :warning: Might contains bugs, not for production use.

### Getting started

##### Installing
`npm i @psse-cpu/tokenizer`

##### Using
```ts
let tokenizer = new InfixTokenizer('((33 - 7) / sin(    90/3 ) + 24.53 ^ 2) * ln(1)')
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // (
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // (
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // 33
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // -
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // 7

/* ...etc, until the last 5 tokens */
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // *
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // ln
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // (
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // 1
tokenizer.hasMoreTokens() // true
tokenizer.readToken() // )
tokenizer.hasMoreTokens() // false
tokenizer.readToken() // undefined
```
