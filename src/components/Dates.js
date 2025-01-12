import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Dates() {
  const { invoiceNumber, invoiceDate, dueDate } = useContext(State);
  const { clientName, clientAddress } = useContext(State);
  const formattedDate = dueDate
  .split("-")
  .reverse()
  .join("-");
  return (
    <div className="flex justify-between items-start mb-6">
      {/* Left Section: Name and Address */}
      <div>
        <h2 className="text-xl mb-1">Customer Name: {clientName}</h2>
        <p>Ph: {clientAddress}</p>
      </div>

      {/* Right Section: Invoice Details */}
      <div className="text-right">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number:</span> {invoiceNumber}
          </li>
          <li className="p-1">
            <span className="font-bold">Date:</span> {formattedDate}
          </li>
        </ul>
      </div>
    </div>
  );
}
