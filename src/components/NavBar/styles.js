import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 21px;
  }
`;

export const DropdownStyles = styled.div`
.dropdown-option {
  padding: 20px 25px;
  outline: 0;
  color: #fff;
  font-size: 18px;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover,
  &:focus {
   opacity: 0.55;
  }
}

.dropdown-root {
  z-index:10;

  position: absolute;
}

.dropdown-arrow {
  position: relative;

  &::before { 
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    
    top: -8px;
    /* left: -8px */
    border-radius: 4px 0 0 0;

    transform: rotate(45deg);
  }
}

.dropdown-container {
  position: absolute;
  overflow: hidden;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
              0 30px 60px -30px rgba(0, 0, 0, 0.3),
              0 -18px 60px -10px rgba(0, 0, 0, 0.025);

  background: #fff;
  border-radius: 4px;

}

.dropdown-section {
  position: absolute;
}

.dropdown-background {
  position: absolute;
  bottom: 0;
  background: #f6f9fc;
  width: 100%;
}
`;

export const Main = styled.main`
  position: relative;
  overflow: hidden;
  display: block;
  z-index: -1;

  & .header {
    position: relative;
    display: block;
    height:600px;

  }

   #stripes {
    width: 100%;
    height: 100%;

    overflow: hidden;
    -webkit-transform: skewY(-12deg);
    transform: skewY(-12deg);
    -webkit-transform-origin: 0;
    transform-origin: 0;
    background: linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%);
  }
`;
