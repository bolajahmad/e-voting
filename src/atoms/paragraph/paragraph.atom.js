import React from 'react'
import PropTypes from 'prop-types'

import { P } from './paragraph.styles'


const Paragraph = ({ children, align, size, weight, ...otherProps }) => {
    return (
        <P align={align} size={size} weight={weight} {...otherProps}>
            {children}
        </P>
    )
}

export default Paragraph


Paragraph.propTypes = {
    align: PropTypes.string,
    size: PropTypes.number,
    weight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}