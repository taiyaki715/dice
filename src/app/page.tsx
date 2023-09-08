"use client";

import { Dice } from "@/components/dice";
import { Button, Navbar, NavbarBrand, NavbarContent, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Home() {
  // ダイスの数
  const [numberOfDice, setNumberOfDice] = useState(1);
  useEffect(() => {
    setValue(new Array(numberOfDice).fill(1));
  }, [numberOfDice])

  // ダイスの目の値
  const [value, setValue] = useState([1]);

  // ダイスを振っているかどうか
  const [rolling, setRolling] = useState(false);

  // ダイスを振るボタンが押された時の処理
  const onRollClick = () => {
    // １秒間rollingをtrueにする
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
      let newValue: number[] = [];
      for (let i = 0; i < numberOfDice; i++) {
        newValue.push(Math.floor(Math.random() * 6) + 1);
      }
      setValue(newValue);
    }, 1000);

  }

  return (
    <div>
      <Navbar isBordered>
        <NavbarContent justify="center">
          <NavbarBrand>
            <p className="text-3xl font-extrabold tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600">
                Roll
              </span>{" "}
              it!
            </p>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
      <main className="flex flex-col justify-center items-center px-4">
        <div className="flex gap-4">
          {value.map((value, index) => (
            <Dice key={index} value={value} rolling={rolling} />
          ))}
        </div>
        <Select
          label="ダイスの数"
          defaultSelectedKeys={["1"]}
          onSelectionChange={(key: any) => {
            setNumberOfDice(Number(key["currentKey"]));
          }
          }
        >
          <SelectItem key={1} value={1}>
            1
          </SelectItem>
          <SelectItem key={2} value={2}>
            2
          </SelectItem>
          <SelectItem key={3} value={3}>
            3
          </SelectItem>
        </Select>
      </main>
      <Button
        color="primary"
        size="lg"
        className="absolute bottom-8 left-4 w-[calc(100vw-32px)]"
        onClick={onRollClick}
        isLoading={rolling}
      >
        ダイスを振る
      </Button>
    </div>
  );
}
