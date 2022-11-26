import styled, {keyframes} from "styled-components";
import { Typography } from "@mui/material";

const TextAnimation = ({animationText}) => {
    // console.log(animationText)
    return (
        <Wrapper>
            <Typography 
                variant="h3" 
                margin={15}
            >
                {animationText}
            </Typography>
        </Wrapper>
    )
}

const animation = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
`

export default TextAnimation