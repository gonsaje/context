import React from 'react'
import {useTheme, useThemeUpdate} from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? ' #333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '20px',
        margin: '20px'
    }

    return  (
        <>
            <button onClick={toggleTheme}>Toggle</button>
            <div style = {themeStyles}>Function</div>
        </>
    )
}

