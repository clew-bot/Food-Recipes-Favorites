import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

import React from 'react'

const Category = () => {
  return (
    <List>

        <SLink to={`/cuisine/Italian`}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={`/cuisine/American`}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={`/cuisine/Thai`}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={`/cuisine/Japanese`}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>

    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  `

  const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;

    width: 6rem;
    height: 6rem;
    cursor: pointer;

    h4 {
      color: white;
      font-size: 0.8rem;
    }
    svg {
      color: black;
      font-size: 2rem;
    }

    @keyframes rotate {
      0% {
        transform: rotate(20deg);
      }

      10% {
        transform: rotate(10deg);
      }
      50% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(-5deg);
    }
    }


    &.active {
      /* background: linear-gradient(to right, #f27121, #e94057); */
      transition: all 0.3s ease-in-out;
      animation: rotate 0.5s ease-in-out;
      

      svg {
        /* color: white; */
      }
      h4 {
        color: orange;
      }
    }
  `
export default Category
