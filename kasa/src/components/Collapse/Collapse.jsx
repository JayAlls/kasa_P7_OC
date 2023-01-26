import { useState } from "react";
import "./style.scss";

const Collapse = ({title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="col-container">
            <div onClick={() => setIsOpen(!isOpen)} className="collapse">
                <h5>
                    {title}
                </h5>
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.6635 0.859488L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859488L12.4605 10.6572L2.6635 0.859488V0.859488Z" fill="white"/>
                    </svg>
            </div>
            {isOpen && 
                <p className="transition">
                    {description}
                </p>
            }
        </div>
    )
}

export default Collapse;