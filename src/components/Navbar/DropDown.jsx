import React from 'react';
import styled from 'styled-components';
import { menuData } from '../../data/MenuData';
import { Button } from './NavbarButton';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropDawnContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #6a3fcd;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ dropDownIsOpen }) => (dropDownIsOpen ? '1' : '0')};
    top: ${({ dropDownIsOpen }) => (dropDownIsOpen ? '0' : '-100%')};
    `;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outlined: none;
    `;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    `;

const DropDawnWrapper = styled.div``;

const DropDawnMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);

    }
    `;

const DropDawnLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
    `;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;`;

const DropDown = ({ dropDownIsOpen, toggle }) => {
    return (
        <DropDawnContainer dropDownIsOpen={dropDownIsOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <DropDawnWrapper>
                <DropDawnMenu>
                    {menuData.map((item, index) => (
                        <DropDawnLink to={item.link} key={index}>
                            {item.title}
                        </DropDawnLink>
                    ))}
                </DropDawnMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropDawnWrapper>
        </DropDawnContainer>
    )
}

export default DropDown