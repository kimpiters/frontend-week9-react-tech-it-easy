import generateNameTV from "./generateNameTV.js";
import generatePriceTV from "./generatePriceTV.js";
import generateStringScreenSizes from "./generateStringScreenSizes.js";
import GenerateListTvOptions from "../GenerateListTvOptions.jsx";

import outOfStock from "../../assets/out-of-stock.png";

function GenerateTvArticle(tv) {
    if (tv.originalStock === tv.sold) {
        return <>
            <div className="img-wrapper-tv">
                <img src={outOfStock} alt="Out of stock" />
            </div>
            <div className="tv-props">
                <h3>{generateNameTV(tv)}</h3>
                <p className="tv-price">{generatePriceTV(tv.price)}</p>
                <p>{generateStringScreenSizes(tv.availableSizes)}</p>
                <ul className="tv-options">{GenerateListTvOptions(tv)}</ul>
            </div>
        </>
    } else {
        return <>
            <div className="img-wrapper-tv">
                <img src={tv.sourceImg} alt={`${tv.brand} ${tv.name}`}/>
            </div>
            <div className="tv-props">
                <h3>{generateNameTV(tv)}</h3>
                <p className="tv-price">{generatePriceTV(tv.price)}</p>
                <p>{generateStringScreenSizes(tv.availableSizes)}</p>
                <ul className="tv-options">{GenerateListTvOptions(tv)}</ul>
            </div>
        </>
    }
}

export default GenerateTvArticle;