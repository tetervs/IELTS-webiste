import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="nav-left">
                <h2>IELTS Excellence</h2>
            </div>
            
            <ul className='nav-menu'>
                <li onClick={() => setMenu("home")}>
                    Home{menu === "home" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("courses")}>
                    Courses{menu === "courses" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("mocktest")}>
                    Mock Test{menu === "mocktest" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("about")}>
                    About{menu === "about" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("contact")}>
                    Contact{menu === "contact" ? <hr /> : <></>}
                </li>
            </ul>
            
            <button className='nav-btn'>Start Free Trial</button>
        </div>
    )
}

export default Navbar