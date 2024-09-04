// Updated for part 2
import './App.css';
import calculateNSoldTVs from "./helpers/calculateSellingNumbers/calculateNSoldTVs.js";
import calculateNOriginalStock from "./helpers/calculateSellingNumbers/calculateNOriginalStock.js";
import calculateNCurrentStock from "./helpers/calculateSellingNumbers/calculateNCurrentStock.js";
import GenerateListBrands from "./helpers/GenerateListBrands.jsx";
import GenerateTvArticle from "./helpers/generateTVArticle/GenerateTvArticle.jsx";
import sortOnMostSold from "./helpers/sortAllTVs/sortOnMostSold.js";

import {bestSellingTv} from "./constants/inventory.js";
import GenerateAllTvs from "./helpers/GenerateAllTvs.jsx";
import sortOnLowestPrice from "./helpers/sortAllTVs/sortOnLowestPrice.js";
import sortOnHighestRefreshRate from "./helpers/sortAllTVs/sortOnHighestRefreshRate.js";
import sortOnHighestScreenSize from "./helpers/sortAllTVs/sortOnHighestScreenSize.js";

function App() {
    return (
        <>
            <div className="outer-container">
                <section className="inner-container">
                    <h1>Tech it easy dashboard</h1>

                    <h2>Verkoopoverzicht</h2>
                    <div className="block-wrapper">
                        <div className="block sold-tvs">
                            <h3>Aantal verkochte producten</h3>
                            <p className="number-statistics">{calculateNSoldTVs()}</p>
                        </div>
                        <div className="block original-stock">
                            <h3>Aantal ingekochte producten</h3>
                            <p className="number-statistics">{calculateNOriginalStock()}</p>
                        </div>
                        <div className="block current-stock">
                            <h3>Aantal te verkopen producten</h3>
                            <p className="number-statistics">{calculateNCurrentStock()}</p>
                        </div>
                    </div>

                    <h2>Best verkochte tv</h2>
                    <article className="tv-article tv-article-best-selling">
                        {GenerateTvArticle(bestSellingTv)}
                    </article>
                </section>
            </div>

            <div className="outer-container">
                <section className="inner-container">
                    <h2>Alle tv&apos;s</h2>
                    <ul className="list-brands"><GenerateListBrands /></ul>

                    <div className="button-wrapper">
                        <button type="button" id="button-most-sold-first" onClick={sortOnMostSold}>Meest verkocht eerst
                        </button>
                        <button type="button" id="button-cheapest-first" onClick={sortOnLowestPrice}>Goedkoopste eerst
                        </button>
                        <button type="button" id="button-sports-first" onClick={sortOnHighestRefreshRate}>Meest geschikt voor sport
                            eerst
                        </button>
                        <button type="button" id="button-highest-screen-size-first" onClick={sortOnHighestScreenSize}>Grootste schermgroottes eerst</button>
                    </div>

                    <div>
                        <GenerateAllTvs />
                    </div>

                </section>
            </div>
        </>
    )
}

export default App
