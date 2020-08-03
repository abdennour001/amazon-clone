export const initialState = {
    user: null,
    basket: [
        {
            id: "1",
            title: "Garmin Forerunner 235, GPS Running Watch, Black/Gray",
            price: 162.04,
            rating: 4,
            image:
                "https://images-na.ssl-images-amazon.com/images/I/81bnBG8g7VL._AC_SL1500_.jpg"
        },
        {
            id: "2",
            title: "Garmin Forerunner 235, GPS Running Watch, Black/Gray",
            price: 162.04,
            rating: 4,
            image:
                "https://images-na.ssl-images-amazon.com/images/I/81bnBG8g7VL._AC_SL1500_.jpg"
        }
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter(
                    product => product.id !== action.item.id
                )
            };

        default:
            return state;
    }
};

export default reducer;
