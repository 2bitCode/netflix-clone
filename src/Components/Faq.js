import './Faq.css';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from "react";

function Faq({fq, description1, description2}) { 

    const [clicked, setClicked] = useState(false);

    function handleClicked() {
        if (clicked) {
            setClicked(false);
        }else{ 
            setClicked(true);
        }
    }

    return ( 
        <>
            <div className="whole">
                <div className="faq" onClick={handleClicked}>
                        {fq}
                        <div className={clicked ? "hidden" : "add"}> 
                            <AddIcon fontSize="large"/>
                        </div>
                        <div className={clicked ? "clear" : "hidden"}>
                            <ClearIcon fontSize="large"/>
                        </div>
                    </div>
                    <div className={clicked ? "about" : "hidden"}>
                        <p>{description1}</p>
                        <p>{description2}</p>
                </div>
            </div>
        </>
    )
}

export default Faq;