// part 2
import {inventory} from "./inventory.js";

//////////////// View in terminal: ///////////////
//  node ./src/constants/partTwoAssignment1.js  //
//////////////////////////////////////////////////

//////// DEEL 2 OPDRACHT 1 ////////

// 1a
console.log("---------------- 1a ----------------");

const tvTypes = inventory.map((tv) => {
    return tv.type;
});

console.log(tvTypes);
console.log();

// 1b
console.log("---------------- 1b ----------------");

const soldOutTvs = inventory.filter((tv) => {
    return (tv.originalStock - tv.sold === 0);
});

console.log(soldOutTvs);
console.log();

// 1c
console.log("---------------- 1c ----------------");

const chosenTV = inventory.find((tv) => {
    return (tv.type === "NH3216SMART")
})

console.log(chosenTV);
console.log();

// 1d
console.log("---------------- 1d ----------------");

const sportTVs = inventory.map((tv) => {
    return {
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100
    }
})

console.log(sportTVs);
console.log();

// 1e
console.log("---------------- 1e ----------------");

const tvsOver65 = inventory.filter((tv) => {
    return (tv.availableSizes.find((size) => {
        return (size >= 65);
    }))
})

console.log(tvsOver65);
console.log();

// 1f
console.log("---------------- 1f ----------------");

const tvsAmbiLight = inventory.filter((tv) => {
    return (tv.options.find((option) => {
        return (option.name === "ambiLight" && option.applicable === true)
    }))
});

console.log(tvsAmbiLight);
console.log();