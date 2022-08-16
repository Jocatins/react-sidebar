import React from 'react'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaArrowDown,
    FaArrowUp
}from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon : <FaTh/>,
        iconOpen : <FaArrowDown/>,
        iconClose : <FaArrowUp/>,

        subNav : [
            {
                title : 'Users',
                path: '/dashboard/users',
                icon: <FaTh/>
            },
            {
                title : 'Comments',
                path: '/dashboard/comments',
                icon: <FaTh/>
            }
        ]
    },
    {
        title: 'About',
        path : '/about',
        icon : <FaBars/>,
        iconOpen : <FaArrowDown/>,
        iconClose : <FaArrowUp/>,

        subNav : [
            {
                title : 'users',
                path: '/dashboard/users',
                icon: <FaTh/>
            },
            {
                title : 'comments',
                path: '/dashboard/comments',
                icon: <FaTh/>
            }
        ]
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon : <FaUserAlt/>,
    }
]
