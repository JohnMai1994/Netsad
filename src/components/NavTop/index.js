import React from 'react';
import StyleNavTop from "./style";
import PropTypes from 'prop-types';

function NavTop({children, ...rest }) {
    return (
        <StyleNavTop {...rest}>
            {children}
        </StyleNavTop>
    );
}


NavTop.propTypes = {
   children: PropTypes.any
};

export default NavTop;