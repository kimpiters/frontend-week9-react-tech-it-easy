// part 2
import checkIcon from "../../assets/check.png";
import notIcon from "../../assets/minus.png";

function GenerateListTvOptions(tv) {
    return tv.options.map((option) => {
        if (option.applicable === true) {
            return <li key={option}>
                <div className="icon-wrapper">
                    <img src={checkIcon} alt="Check icoon"/>
                </div>
                <div>{option.name}</div>
            </li>
        } else {
            return <li key={option}>
                <div className="icon-wrapper">
                    <img src={notIcon} alt="Minus icoon"/>
                </div>
                <div>{option.name}</div>
            </li>
        }
    })
}

export default GenerateListTvOptions;