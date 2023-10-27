import { ReactSetState } from "../types/utils";

type Input = {
  values: string;
  setValues:ReactSetState<string>;
  type:"text"|"color"|"checkbox"
};

const Input = ({type, values, setValues }:Input) => {
  return (
    <input
      type={type}
      className="w-full p-2 rounded-sm mb-2"
      value={values}
      onChange={(e) => setValues(e.target.value)}
    />
  );
};

export default Input;
