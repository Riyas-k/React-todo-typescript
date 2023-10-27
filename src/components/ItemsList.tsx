import { Items, ReactSetState } from "../types/utils";
import Button from "./Button";

type ItemList = {
  items: Items[];
  setItems:ReactSetState<Items[]>
};

export const ItemsList = ({ items, setItems }: ItemList) => {
  const handleDelete = (item: string) => {
    setItems((prev) => prev.filter((data) => data.id !== item));
  };

  return (
    <div className="">
      <div className="w-[350px]">
        {items.map((item) => (
          <div
            className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
            key={item.id}
          >
            <p>{item.title}</p>
            <Button className="" onClick={() => handleDelete(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
