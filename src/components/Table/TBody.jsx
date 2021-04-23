import React from "react";
import dayjs from "dayjs";

const TBody = ({ items }) => {
  return (
    <tbody>
      {items &&
        items.map(({ id, value, type, date }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{value} руб</td>
            <td>{type}</td>
            <td>{dayjs(date).format("MMM D, YYYY h:mm A")}</td>
          </tr>
        ))}
    </tbody>
  );
};
export default TBody;
