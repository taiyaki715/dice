import Image from "next/image";

interface Props {
  value: number;
}

export const Dice: React.FC<Props> = (props) => {
  return (
    <Image src={`/dice-${props.value}.svg`} width={16} height={16} alt="" className="w-32" />
  )
}
