import React from 'react'
import Nav from './Nav'

const Layout = props => (
    <div>
        <Nav/>
        <div>Default Header</div>
        {props.children}
        <div>Default Footer</div>
    </div>
)

export default Layout