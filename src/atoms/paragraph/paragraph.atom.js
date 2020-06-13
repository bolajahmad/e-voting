import React from 'react'

import { P } from './paragraph.styles'


const Paragraph = ({ children, align, size, weight }) => {
    return (
        <P align={align} size={size} weight={weight}>
            {children}
        </P>
    )
}

export default Paragraph