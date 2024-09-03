import {inventory} from "../../constants/inventory.js";

function sortOnHighestScreenSize() {
    console.log(inventory.sort((a, b) => b.availableSizes[b.availableSizes.length - 1] - a.availableSizes[a.availableSizes.length - 1]));
}

export default sortOnHighestScreenSize;