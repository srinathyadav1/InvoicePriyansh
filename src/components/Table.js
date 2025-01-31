import React, { useContext } from "react";
import { State } from "../context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);

  // Calculate GST (18%)
  const gst = total * 0.18;
  const totalWithGst = total + gst;

  return (
    <>
      <table width="100%" className="mb-10 border border-gray-300">
        <thead>
          <tr className="bg-gray-100 p-1 border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2 w-1/2">Item Name</td>
            <td className="font-bold border-r border-gray-300 p-2 w-1/6">Quantity</td>
            <td className="font-bold border-r border-gray-300 p-2 w-1/6">Price</td>
            <td className="font-bold p-2 w-1/6">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id} className="h-10 border-b border-gray-300">
              <td className="border-r border-gray-300 p-2">{description}</td>
              <td className="border-r border-gray-300 p-2">{quantity}</td>
              <td className="border-r border-gray-300 p-2">₹{price}.00</td>
              <td className="p-2">₹{amount}.00</td>
            </tr>
          ))}
          {/* Total Row */}
          <tr className="bg-gray-100 font-bold h-10">
            <td colSpan="3" className="text-right border-t border-gray-300 p-2">
              Total:
            </td>
            <td className="border-t border-gray-300 p-2">₹{total.toLocaleString()}.00</td>
          </tr>
          {/* GST Row */}
          <tr className="bg-gray-100 font-bold h-10">
            <td colSpan="3" className="text-right border-t border-gray-300 p-2">
              GST (18%):
            </td>
            <td className="border-t border-gray-300 p-2">₹{gst.toLocaleString()}.00</td>
          </tr>
          {/* Total with GST Row */}
          <tr className="bg-gray-100 font-bold h-10">
            <td colSpan="3" className="text-right border-t border-gray-300 p-2">
              Total with GST:
            </td>
            <td className="border-t border-gray-300 p-2">₹{totalWithGst.toLocaleString()}.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
