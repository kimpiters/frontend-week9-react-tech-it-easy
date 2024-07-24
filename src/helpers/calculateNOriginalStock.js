import {inventory} from "../constants/inventory.js";

function getOriginalStock() {
    let bought = 0;
    for (const tv of inventory) {
        bought += tv.originalStock;
    }
    return bought;
}

export default getOriginalStock;