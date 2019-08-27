import React from 'react'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/scss/bootstrap.scss'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
                    h1 {
                        color: red;
                    }
                `}
            ></Global>
            <Header></Header>
            {children}
            <Footer
                css={css`
                    background-color: #333;
                    padding: 1.5rem 0;
                `}
            ></Footer>
        </>
    )
}

export default Layout
