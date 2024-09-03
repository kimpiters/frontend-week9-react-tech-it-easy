import checkIcon from "../assets/check.png";
import notIcon from "../assets/minus.png";

function GenerateListTvOptions(tv) {
    let listTvOptions = [];
    let counter = 0;
    for (const option of tv.options) {
        if (option.applicable === true) {
            listTvOptions.push(<li key={counter}>
                <div className="icon-wrapper">
                    <img src={checkIcon} alt="Check icoon"/>
                </div>
                <div>{option.name}</div>
            </li>);
        } else if (option.applicable === false) {
            listTvOptions.push(<li key={counter}>
                <div className="icon-wrapper">
                    <img src={notIcon} alt="Minus icoon"/>
                </div>
                <div>{option.name}</div>
            </li>);
        }
        counter++;
    }
    return listTvOptions;
}

export default GenerateListTvOptions;