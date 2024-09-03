import {bestSellingTv, inventory} from "../../constants/inventory.js";

function calculateNOriginalStock() {
    let bought = 0;
    for (const tv of inventory) {
        bought += tv.originalStock;
    }
    return bought + bestSellingTv.originalStock;
}

export default calculateNOriginalStock;