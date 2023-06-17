import React from 'react'
export default function Navigation() {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <a className='active' href=' '>Home</a>
                    <a className='active' href='#news'>News</a>
                    <a className='active' href='#about'>About</a>
                    <a className='active' href='#contact'>Contact</a>
                </ul>
            </nav>
        </div>
    )
}