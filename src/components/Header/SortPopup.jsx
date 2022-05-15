import React from "react";

function SortPopup() {
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setVisiblePopup(!visiblePopup)}>популярности</span>
            </div>
            {visiblePopup && (<div className="sort__popup">
                <ul>
                    <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default SortPopup;