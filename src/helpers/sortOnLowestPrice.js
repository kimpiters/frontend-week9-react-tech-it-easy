import {inventory} from "../constants/inventory.js";

function sortOnLowestPrice() {
    console.log(inventory.sort((a, b) => a.price - b.price));
}

export default sortOnLowestPrice;