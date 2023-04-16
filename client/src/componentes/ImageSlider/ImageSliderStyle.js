import styled from "styled-components";


export const SliderStyles = styled.div`
  height: 100%;
  position: relative;

.dotsContainerStyles{
    display: flex;
    justify-content: center;
}

.leftArrowStyles{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 32px;
    font-size: 45px;
    color: #ffffff76;
    z-index: -1;
    cursor: pointer;
}

.rightArrowStyles{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 32px;
    font-size: 45px;
    color: #ffffff76;
    z-index: -1;
    cursor: pointer;
}
.dotsContainerStyles{
    display: flex;
    justify-content: center;
}
.dotStyle{
    margin: 0 3px;
    cursor: pointer;
    font-size: 20px;
    color: #30303076;
}
`;





