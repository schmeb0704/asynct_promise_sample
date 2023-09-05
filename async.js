
// some async practice
// change the wait times so that we can have the following order while keeping the code order intact

/*
1. firing up the forge
2. smelting iron bars
3. combining materials
4. shaping iron
5. iron longsword complete

*/
const craftingCompleteWait = 5000
const combiningMaterialsWait = 2000
const smeltingIronBarsWait = 1000
const shapingIronWait = 3000


setTimeout(()=>{console.log("Iron Longsword Complete!")}, craftingCompleteWait)
setTimeout(()=>{console.log("Combining Materials...")}, combiningMaterialsWait)
setTimeout(()=>{console.log("Smelting Iron Bars...")}, smeltingIronBarsWait)
setTimeout(()=>{console.log("Shaping up the iron...")}, shapingIronWait)

console.log("Firing up the forge...")