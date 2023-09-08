import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  value: number;
  rolling?: boolean;
}

export const Dice: React.FC<Props> = (props) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value])

  // rollingがtrueの時はランダムな値を0.1秒ごとにvalueにセットする
  useEffect(() => {
    if (props.rolling) {
      const interval = setInterval(() => {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setValue(newValue);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [props.rolling])

  return (
    <Image src={`/dice-${value}.svg`} width={16} height={16} alt="" className="w-32" />
  )
}
