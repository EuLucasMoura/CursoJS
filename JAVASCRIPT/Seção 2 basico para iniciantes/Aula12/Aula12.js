let varA = "A"; /* B */
let varB = "B"; /* C */
let varC = "C"; /* A */

/* [varA, varB, varC] = [varB, varC, varA] */
const varAtemp = varA
varA = varB
varB = varC
varC = varAtemp

console.log(varA, varB, varC)
