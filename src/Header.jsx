import React from 'react'
import { BsFillBellFill, BsPersonCircle, BsSearch, BsJustify, BsFillEnvelopeFill } from 'react-icons/bs'
export default function Header() {
    return (
        <>
            <div className="header">
                <div className="menu-icon">
                    <BsJustify className="icon"  />
                </div>
                <div className="header-left">
                    <BsSearch className="icon" />
                </div>
                <div className="header-right">
                    <BsFillBellFill className="icon" />
                    <BsFillEnvelopeFill className="icon" />
                    <BsPersonCircle className="icon" />
                </div>
            </div>
        </>
    )
}
