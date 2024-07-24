import './App.css';
import calculateNSoldTVs from "./helpers/calculateNSoldTVs.js";
import calculateNOriginalStock from "./helpers/calculateNOriginalStock.js";
import calculateNCurrentStock from "./helpers/calculateNCurrentStock.js";
import GenerateListBrands from "./helpers/GenerateListBrands.jsx";
import GenerateTvArticle from "./helpers/GenerateTvArticle.jsx";
import sortOnMostSold from "./helpers/sortOnMostSold.js";

import {bestSellingTv} from "./constants/inventory.js";
import GenerateAllTvs from "./helpers/GenerateAllTvs.jsx";
import sortOnLowestPrice from "./helpers/sortOnLowestPrice.js";
import sortOnHighestRefreshRate from "./helpers/sortOnHighestRefreshRate.js";
import sortOnHighestScreenSize from "./helpers/sortOnHighestScreenSize.js";

function App() {
    return (
        <>
            <section className="outer-container">
                <div className="inner-container">
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
                    <article className="tv-article">
                        {GenerateTvArticle(bestSellingTv)}
                    </article>

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

                    <section>
                        <GenerateAllTvs />
                    </section>

                </div>
            </section>
        </>
    )
}

export default App
