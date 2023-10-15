import React from 'react'
import { BsCart3, BsFillArchiveFill, BsFillGearFill, BsGrid1X2Fill, BsGrid3X2GapFill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from 'react-icons/bs'

export default function Sidbar() {
    return (
        <>
            <aside id="sidbar" >
                <div className="sidbar-title">
                    <div className="sidbar-brand">
                        <BsCart3 className="icon_header" /> SHOP
                    </div>
                    <span className="icon close_icon">X</span>
                </div>
                <ul className="sidbar-list">
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsGrid1X2Fill className="icon_header" /> Dashboard
                        </a>
                    </li>
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsFillArchiveFill className="icon_header" /> Products
                        </a>
                    </li>
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsGrid3X2GapFill className="icon_header" /> Categories
                        </a>
                    </li>
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsPeopleFill className="icon_header" /> Customers
                        </a>
                    </li>
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsListCheck className="icon_header" /> Inventory
                        </a>
                    </li>
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsMenuButtonWideFill className="icon_header" /> Reports
                        </a>
                    </li>
                    <li className="sidbar-list-item">
                        <a href="">
                            <BsFillGearFill className="icon_header" /> Setting
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )
}
