import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:2rem;
    flex-flow:wrap;
`
const handleColorType = color => {
    switch (color) {
        case 'green':
            return "color:#FFF; background: #61dea4";
        case 'red':
            return "color:#FFF; background: #f45e6d";
        case 'yellow':
            return "color:#252a31; background: #ffe761";
        default:
            return "color:#252a31; background: #ebeff5";
    }
}
export const BlockItem = styled.div`
    ${({color}) => handleColorType(color)};
    width:49.5%;
    height:200px;
    border-radius:5px;
    position:relative;
    margin-top:1%;
    a{
        text-decoration:none;
        position:absolute;
        top:100px;
        right:40px;
    }
`
export const Title = styled.div`
    position:absolute;
    top:50px;
    left:20px;
    font-size:36px;
`
export const SeccondTitle = styled.div`
    position:absolute;
    top:100px;
    left:20px;
`