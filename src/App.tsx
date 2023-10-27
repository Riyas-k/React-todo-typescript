import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import {ItemsList} from "./components/ItemsList";
import { type Items } from "./types/utils";



function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [values, setValues] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    if (values.length === 0) {
      return alert("Type something");
    }
    e.preventDefault();
    setItems((prev) => [...prev, { title: values, id: Date.now().toString() }]);
    setValues("");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[350px]">
        <form className="mb-10" onSubmit={handleSubmit}>
          <Input type="text" values={values} setValues={setValues} />
          <Button className="bg-gray-700 w-full p-2">Add</Button>
        </form>
        <div className="bg-red-800 h-52 overflow-y-auto">
           <ItemsList items={items} setItems={setItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
