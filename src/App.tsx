import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const colors = ["red", "blue", "green"];

function App() {
  const [color, setColor] = useState("red");
  return (
    <div className="m-8">
      <RadioGroup value={color} onChange={setColor}>
        <RadioGroup.Label className="text-lg font-semibold">
          Select color
        </RadioGroup.Label>
        <div className="grid place-content-stretch gap-6 grid-cols-4">
          {colors.map((c) => (
            <RadioGroup.Option key={c} value={c}>
              {({ active, checked }) => (
                <RadioGroup.Description
                  as="div"
                  className="border border-black"
                >
                  <p>checked: {checked ? "true" : "false"}</p>
                  <p>active: {active ? "true" : "false"}</p>
                </RadioGroup.Description>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default App;
