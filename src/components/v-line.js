import * as React from "react";

export const Vline = ({ width, color, indent }) => {
    color = color || 'white'
    width = width || 200
    indent = indent || 50

    return (
        <span className={'v-line-separator'} style={{
            borderColor: color,
            height: width + 'px',
            marginBottom: '-' + indent + 'px'}}/>
    )
}
