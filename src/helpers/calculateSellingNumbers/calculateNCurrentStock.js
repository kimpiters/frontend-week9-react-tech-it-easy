import calculateNOriginalStock from "./calculateNOriginalStock.js";
import calculateNSoldTVs from "./calculateNSoldTVs.js";

function calculateNCurrentStock() {
    return (calculateNOriginalStock() - calculateNSoldTVs());
}

export default calculateNCurrentStock;