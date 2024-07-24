import {inventory} from "../constants/inventory.js";

function getSoldTVs() {
    let sold = 0;
    for (const tv of inventory) {
        sold += tv.sold;
    }
    return sold;
}

export default getSoldTVs;