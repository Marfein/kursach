import React from "react";
import PropTypes from "prop-types";

const SortPopup= React.memo(function SortPopup({items,activeSortType, onClickSortType}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();/* хук для получения актуальных данных */
    const activeLabel = items.find(obj=>obj.type===activeSortType).name;

    const toggleVisiblePopup = () => {/* переключатель состяния */
        setVisiblePopup(!visiblePopup);/* переключение состяния */
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

    const onSelectItem = (index) => {
        onClickSortType(index);
        setVisiblePopup(false);
    };

    React.useEffect(() => {/* отлавливает когда произошло внедрение */
        document.body.addEventListener('click', handleOutsideClick);

    }, [])

    return (
        <div ref={sortRef}
             className="sort">
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
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup && (/* проверка состяния попапа */
                <div className="sort__popup">
                    <ul>
                        {items &&
                        items.map((obj, index) => (
                            <li
                                onClick={() => onSelectItem(obj)}
                                className={activeSortType === obj ? 'active' : ''}
                                key={`${obj.type}_${index}`}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>)
            });

SortPopup.propTypes={//проверяет правильно ли указан формат
    activeSortType: PropTypes.string.isRequired,
    items:PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickSortType: PropTypes.func.isRequired
};

SortPopup.defaultProps ={
    items:[]
}

export default SortPopup;