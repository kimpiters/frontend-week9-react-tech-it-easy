import {inventory} from "../constants/inventory.js";
import GenerateTvArticle from "./GenerateTvArticle.jsx";

function GenerateAllTvs() {
    let allTvs = [];
    for (const tv of inventory) {
        allTvs.push(<article className="tv-article" key={tv.type}>{GenerateTvArticle(tv)}</article>);
    }
    return allTvs;
}

export default GenerateAllTvs;