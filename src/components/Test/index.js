import React from 'react';
import StyleTest from "./style";
import PropTypes from 'prop-types';

function Test({children, ...rest }) {
    return (
        <StyleTest {...rest}>
            {children}
        </StyleTest>
    );
}


Test.propTypes = {
   children: PropTypes.any
};

export default Test;