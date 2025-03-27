import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import style from './style/Header.module.css'

const items = [
    {
        label: (
            <NavLink to="/" className={style.links}> Главная</NavLink>
        ),
        key: '0',
    },
    {
        label: (
            <NavLink to="/Экскурсии" className={style.links}>Экскурсии</NavLink>
        ),
        key: '1',
    },
    {
        label: (
            <NavLink to="/Личный-кабинет" className={style.links}>Личный кабинет</NavLink>
        ),
        key: '2',
    }

];
function Links({ }) {
    return (
        <Dropdown menu={{ items }} trigger={['click']}  >
            <a onClick={e => e.preventDefault()} className={style.antdA} >
                <Space className={style.iconMenu}>
                <FaEllipsisV style={{margin: '0 0', width: '2rem', height: '2rem' }}/>
                    {/* <DownOutlined /> */}
                </Space>
            </a>
        </Dropdown>
    )
}

export default Links;
// style={{color: 'white', cursor: 'pointer' }}