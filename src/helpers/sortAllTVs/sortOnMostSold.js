// part 2
import {inventory} from "../../constants/inventory.js";

function sortOnMostSold() {
    console.log(inventory.sort((a, b) => b.sold - a.sold));
}

export default sortOnMostSold;