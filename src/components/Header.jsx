import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ total, numberPacked }) {
  return (
    <header>
      <Logo />
      <Counter total={total} numberPacked={numberPacked} />
    </header>
  );
}
