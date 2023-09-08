"use client";

import { Dice } from "@/components/dice";
import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const onRollClick = () => {
    // １秒間rollingをtrueにする
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
      const newValue = Math.floor(Math.random() * 6) + 1;
      setValue(newValue);
    }, 1000);

  }

  return (
    <div>
      <Navbar isBordered>
        <NavbarContent justify="center">
          <NavbarBrand>
            <p className="text-2xl font-bold">DICE</p>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
      <Dice value={value} rolling={rolling} />
      <Button color="primary" size="lg" className="absolute bottom-8 left-4 w-[calc(100vw-32px)]" onClick={onRollClick}>ダイスを振る</Button>
    </ div>
  );
}
