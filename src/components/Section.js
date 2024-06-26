import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

// Có 2 cách truyền tham số cho hàm
// function Section(props) {} >> <h1>{props.title}</h1>
// function Section({title, description}) {} >> <h1>{title}</h1>

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    // console.log("backgroundImg: ", backgroundImg)
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade direction="up">
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade direction="up">
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {/* if rightBtnText exists >> go ahead and showcase it*/}
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat;  
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    height:40px;
    width:256px;
    background-color: var(--bg-grey-button);
    color:var(--text-grey-button);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px
`
//this allows us to inherit all css of the left button
const RightButton = styled(LeftButton)`
background: var(--bg-white-button);
opacity: 0.65;
color:var(--text-white-button);
`

const DownArrow = styled.img`
    height:40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`