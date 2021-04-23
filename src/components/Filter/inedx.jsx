import React from "react";
import { useDispatch } from "react-redux";
import { addFilterItems, deleteFilterItems } from "../../redux/actions";

export const Filter = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      {items.map((item) => (
        <div className="filter__item" key={item.id}>
          <input
            type="checkbox"
            id={item.type}
            onChange={(e) => {
              e.target.checked
                ? dispatch(addFilterItems(item.type))
                : dispatch(deleteFilterItems(item.type));
            }}
          />
          <label htmlFor={item.type}>{item.name}</label>
        </div>
      ))}
    </div>
  );
};
