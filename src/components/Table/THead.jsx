import React from "react";

export const THead = ({ item }) => (
  <thead>
    <tr>
      {item &&
        item.map((item, index) => <th key={`${item}_${index}`}>{item}</th>)}
    </tr>
  </thead>
);
