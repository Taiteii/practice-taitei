import type { NextPage } from "next";
import { ButtonPanel } from "src/components/ButtonPanel";
import { Display } from "src/components/Display";

const Calculator: NextPage = () => {
  return (
    <div>
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default Calculator;
