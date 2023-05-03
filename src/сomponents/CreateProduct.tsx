import React, { useState} from "react";

export function CreateProduct() {
  const [inputValue, setValue] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>):void => {
    setValue(event.currentTarget.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={inputValue}
        onChange={()=>changeHandler}
      />

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
