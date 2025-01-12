import { useContext } from "react";
import { State } from "../context/stateContext";
import signature from "../images/Signature.png";

export default function Footer() {
  const { name, email, website, phone, bankAccount, bankName } =
    useContext(State);

  return (
    <>
      {/* Signature Section */}
      <div className="flex justify-between items-center mb-2 px-5">
        {/* Receiver's Signature */}
        <div className="text-center mt-14">
          <span className="text-sm text-gray-600">Receiver's Signature</span>
        </div>

        {/* Signature Image and Text */}
        <div className="text-center">
          {/* Signature Image */}
          <img
            src={signature} // Replace with the actual path to your signature image
            alt="Signature"
            className="w-32 h-auto" // Adjust size as needed
          />
          {/* Signature Text */}
          <span className="text-sm text-gray-600 block">Signature</span>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Thank You! Visit Again</span>
          </li>
        </ul>
      </footer>

      {/* Optional Developer Credit */}
      {/* <p className="text-center px-5 mt-8 text-xs ">
        Invoicer is built by{" "}
        <a
          className="underline"
        >
          Srinath
        </a>
      </p> */}
    </>
  );
}
