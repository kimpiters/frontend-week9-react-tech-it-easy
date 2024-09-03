import {bestSellingTv, inventory} from "../constants/inventory.js";

function calculateNSoldTVs() {
    let sold = 0;
    for (const tv of inventory) {
        sold += tv.sold;
    }
    return sold + bestSellingTv.sold;
}

export default calculateNSoldTVs;