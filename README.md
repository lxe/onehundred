# 💯 - onehundred

![](https://img.shields.io/badge/no-bugs-brightgreen.svg) 
![](https://img.shields.io/badge/coverage-%F0%9F%92%AF-green.svg)

An optimistic code coverage tool.

![](https://i.imgur.com/8zIalnD.png)

Calculating how much of your code is tested is hard. Test coverage is an important number to put on your spreadhseets, just like other important engineering success and quality metrics, such as:

  - number of codes (slocs)
  - codes per person 
  - man-months per man
  - number of 9's
  - ratio of p's to 9's
  - conversion

The philosophy behind 💯 is that metrics should be actionable, relevant, and most importantly **positive**. With 💯, you can guarantee that when you calculate test coverage of your code, you (and your manager) will always be satisfied.

## Usage

Simply install it:

```
yarn add onehundred
```

Then, use it in your tests (alongside with a good test tool, such as [no-bugs](https://github.com/lxe/no-bugs)):

```
// package.json:
...
"scripts":
  "test": "no-bugs && onehundred"
}
```


