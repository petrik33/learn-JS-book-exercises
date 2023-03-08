# Deposit calculator

Create an interface that allows to enter a sum of bank deposit and percentage, then calculates how much it will be after given periods of time.

Any input change should be processed immediately.

The formula is:

```js
// initial: the initial money sum
// interest: e.g. 0.05 means 5% per year
// years: how many years to wait
let result = Math.round(initial * (1 + interest) ** years);
```
