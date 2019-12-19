import React from 'react'
import Link from 'next/link'

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/[slug]" as="/blog/1">
                    <a>Post1</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/[slug]" as="/blog/2">
                    <a>Post-2</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav
