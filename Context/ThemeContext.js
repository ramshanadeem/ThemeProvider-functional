import React, { createContext } from 'react'

export const ThemeContext = createContext();
class ThemeContextP extends React.Component {

    state = {
        isLight: true,
        light: { text: 'black', bg: 'white' },
        dark: { text: 'white', bg: 'black' }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={{ ...this.state }}>
                    {this.props.children}
                </ThemeContext.Provider>

            </div >
        )
    }
}
export default ThemeContextP;