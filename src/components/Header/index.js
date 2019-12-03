import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default function Header() {
  return (
    <div>
      <Navbar data-test="Header" color="light" light expand="md">
        <NavbarBrand data-test="Header-Brand" href="/">Weirdness Calculator</NavbarBrand>
      </Navbar>
    </div>
  )
};
