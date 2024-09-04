// part 2
import {inventory} from "../constants/inventory.js";

function GenerateListBrands() {

    return inventory.map((tv) => {
        return <li key={tv.type}>{tv.brand}</li>;
    })
}

export default GenerateListBrands;