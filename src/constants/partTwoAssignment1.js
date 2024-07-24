//////// DEEL 2 OPDRACHT 1 ////////
// 1a
import {inventory} from "./inventory.js";

let tvTypes = [];
for (const tv of inventory) {
    tvTypes.push(tv.type);
}
console.log(tvTypes);

//1b
let soldOutTvs = [];
for (const tv of inventory) {
    if (tv.originalStock - tv.sold === 0) {
        soldOutTvs.push(tv);
    }
}
console.log(soldOutTvs);

//1c
for (let tv of inventory) {
    if (tv.type === "NH3216SMART") {
        console.log(tv);
    }
}

//1d
let sportTvs = [];
for (const tv of inventory) {
    let sportTv = {};
    sportTv.name = `${tv.brand} ${tv.name}`;
    sportTv.suitable = tv.refreshRate >= 100;
    sportTvs.push(sportTv);
}
console.log(sportTvs);

//1e
let tvsOver65 = [];
for (const tv of inventory) {
    for (const size of tv.availableSizes) {
        if (size >= 65) {
            tvsOver65.push(tv);
            break;
        }
    }
}
console.log(tvsOver65);

//1d
let tvsAmbiLight = [];
for (const tv of inventory) {
    for (const option of tv.options) {
        if (option.name === "ambiLight") {
            if (option.applicable === true) {
                tvsAmbiLight.push(tv);
            }
        }
    }
}
console.log(tvsAmbiLight);