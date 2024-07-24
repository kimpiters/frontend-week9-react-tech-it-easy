import {inventory} from "../constants/inventory.js";

function GenerateListBrands() {
    let listBrands = [];
    let counter = 0;
    for (const tv of inventory) {
        if (listBrands.length === 0) {
            listBrands.push(<li key={counter}>{tv.brand}</li>);
            counter++;
        } else {
            listBrands.push(<li key={counter}>{tv.brand}</li>);
            counter++;
        }
    }
    return listBrands;
}

export default GenerateListBrands;