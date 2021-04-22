import React from "react";
import { useDispatch } from "react-redux";
import { addFilterItems, deleteFilterItems } from "../../redux/actions";

export const Filter = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      {/* <label htmlFor="all">Все</label>
      <input
        type="checkbox"
        id="all"
        defaultChecked={true}
        onChange={(e) => {
          e.target.checked
            ? dispatch(addFilterItems("all"))
            : dispatch(deleteFilterItems("all"));
        }}
      /> */}
      {items.map((item) => (
        <React.Fragment>
          <label htmlFor={item.type}>{item.name}</label>
          <input
            type="checkbox"
            id={item.type}
            onChange={(e) => {
              e.target.checked
                ? dispatch(addFilterItems(item.type))
                : dispatch(deleteFilterItems(item.type));
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
