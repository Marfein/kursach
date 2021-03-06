import React from "react";
import PropTypes from 'prop-types';
import Button from "../Header/button/Button";

const Dish = ({id, name, imageUrl, price, onClickAddDish, cartCount}) => {

    const onAddDish = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price
        };
        onClickAddDish(obj);
    }

    return (
        <div className="pizza-block">
            <div className="pizza-block__pp">
                <img
                    className="pizza-block__pp__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <h4 className="pizza-block__title">{name}</h4>

            <div className="pizza-block__bottom">
                <Button onClick={onAddDish} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>{price} ₽</span>
                    {cartCount && <i>{cartCount}</i>}
                </Button>
            </div>
        </div>
    );
}

Dish.propTypes = {//проверяет правильно ли указан формат
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClickAddDish: PropTypes.func,
    cartCount: PropTypes.number
};

Dish.defaultProps = {
    name: 'Название',
    imageUrl: 'https://www.ikea.com/ru/ru/images/products/flitighet-tarelka-belyy__0713476_pe729547_s5.jpg',
    price: 0,

}

export default Dish;