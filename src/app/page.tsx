"use client";

import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="center">
          <NavbarBrand>
            <p className="text-2xl font-bold">DICE</p>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
      <Button>サイコロを振る</Button>
    </>
  );
}
