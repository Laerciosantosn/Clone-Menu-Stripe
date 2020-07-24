import React from 'react';

import { Products, Developers, Company } from '../Content';
import { Container, DropdownStyles } from './styles';
import { DropdownOption, DropdownProvider } from '../Dropdown';

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          < ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={() => <h1>{Products}</h1>}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={() => <h1>{Developers}</h1>}
              />
            </li>
            <li>
              <DropdownOption
                name="Empresa"
                content={() => <h1>{Company}</h1>}
              />
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>
  )
}

export default NavBar;