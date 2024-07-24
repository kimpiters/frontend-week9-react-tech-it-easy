import getOriginalStock from "./getOriginalStock.js";
import getSoldTVs from "./getSoldTVs.js";

function getCurrentStock() {
    return (getOriginalStock() - getSoldTVs());
}

export default getCurrentStock;