import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Button = ({
    btnText = '',
    disabled = true,
    loader,
    onClick = () => { }
}) => {
    const btnName = "hey";

    // if (loader) {
    //     return <p>Loading...</p>
    // }
    return <button
        disabled={disabled}
        onClick={() => console.log(btnName)}
    >
        {btnText}
        {loader ? <> Loading...</> : <> false</>}
    </button>
};

export const ButtonAnother = () => {
    const btnName = "hey"
    return <button>{btnName} offer</button>
};

Button.propTypes = {
    btnText: PropTypes.string,
    disabled: PropTypes.bool,
    loader: PropTypes.bool
};

export default Button;