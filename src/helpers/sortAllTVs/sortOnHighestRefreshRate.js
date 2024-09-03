import {inventory} from "../../constants/inventory.js";

function sortOnHighestRefreshRate() {
    console.log(inventory.sort((a, b) => b.refreshRate - a.refreshRate));
}

export default sortOnHighestRefreshRate;