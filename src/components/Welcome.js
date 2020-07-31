import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// components
import Header from './Header';

const Content = styled.div`
    width: 700px;
    margin: 0 auto;
`

const About = styled.div`
font-size: 14px;
    margin-top: 8px;
    margin-bottom: 16px;
`

const Rules = styled.ol`
    margin: 4px 0 0 25px;

    li {
        padding: 8px;
    }
`

const URL = styled.a`
    color: #FF84E8;
`

const Highlight = styled.span`
    color: #FF84E8;
    font-weight: 600;
`

const ViewSim = styled(Link)`
    display: block;
    border: 3px solid #fff;
    border-radius: 8px;
    width: 400px;
    font-size: 36px;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px #FF84E8;
    margin: 40px auto;
    padding: 8px 0;
    text-decoration: none;
    transition: text-shadow .2s, color .2s, box-shadow .2s, border-color .2s;
    text-align: center;

    &:hover {
        color: #FF84E8;
        text-shadow: 2px 2px #fff;
        border-right-color: #FF84E8;
        border-bottom-color: #FF84E8;
    }
`

const Welcome = () => {
    return (
        <div>
            <Header />
            <Content>
                <h2>About the Game of Life: </h2>
                <About>
                    <p><URL href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">The Game of Life</URL> is a very well-known program devised by English mathematician <URL href="https://en.wikipedia.org/wiki/John_Horton_Conway" target="_blank">John Horton Conway</URL> in 1970. The Game of Life simulates a <URL href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank"></URL>cellular automaton, which is a program that consists of a grid of cells and a simple set of rules that describes how the state of each cell will change over time, usually as a result of its neighborhood (the set of cells surrounding it). Typically the set of rules do not change, and the rules are the same for every cell. Cellular automata have many applications, including but not limited to computer processors, cryptography and biological and chemical simulations. </p>
                    <br />
                    <p>A program is said to be <URL href="https://en.wikipedia.org/wiki/Turing_completeness" target="_blank">Turing complete</URL> (and a universal Turing machine) if anything that can be computed algorithmically can be computed by or within the system. The Game of Life is theoretically considered to be Turing complete, given a large enough grid and enough time.</p>
                    <br />
                    <p>The Game of Life is a zero-player game. To “play” the game, simply create an initial configuration (or select one of the preset patterns) and click Start to watch how it evolves. Over the years, several <URL href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns" target="_blank">common pattern types</URL> have emerged, including: <Highlight>still lifes</Highlight> (do not change from one generation to the next), <Highlight>spaceships</Highlight> (traverse the grid), <Highlight>oscillators</Highlight> (return to initial state after a finite number of generations) and <Highlight>Methuselahs</Highlight> (evolve for long periods of time before stabilizing). The preset patterns include an example of each of the above. </p>

                </About>
                <h2>The Rules: </h2>
                <Rules>
                    <li>Any live cell with <Highlight>fewer than 2 live neighbors</Highlight> dies, as if by underpopulation</li>
                    <li>Any live cell with <Highlight>2 or 3 live neighbors</Highlight> lives on to the next generation</li>
                    <li>Any live cell with <Highlight>more than 3 live neighbors</Highlight> dies, as if by overpopulation</li>
                    <li>Any dead cell with <Highlight>exactly 3 live neighbors</Highlight> becomes a live cell, as if by reproduction</li>
                </Rules>
            </Content>
            <ViewSim to='/game-of-life'>
                View Simulation
            </ViewSim>
        </div>
    )
}

export default Welcome;