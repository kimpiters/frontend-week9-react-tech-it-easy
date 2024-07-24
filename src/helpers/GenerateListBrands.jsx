import {inventory} from "../constants/inventory.js";

function generateListBrands() {
    let listBrands = [];
    for (const tv of inventory) {
        listBrands.push(<li>{tv.brand}</li>);
    }
    return listBrands;
}

export default generateListBrands;