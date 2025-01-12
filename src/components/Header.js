import EicherLogo from "../images/Eicher-logo.png";
import MahindraLogo from "../images/Mahindra-Logo-2000.png";
import SwarajMazdaLogo from "../images/Swaraj-Mazda-Logo.png";
import BharatBenzLogo from "../images/BharatBenz-Logo.png";

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5">
        <div className="flex items-center space-x-4">
          <img
            src={EicherLogo}
            alt="Logo"
            className="w-13 h-12 object-contain"
          />

          <h1 className="font-bold uppercase tracking-wide text-4xl">
            Priyansh Automobiles
          </h1>
          <img
            src={SwarajMazdaLogo}
            alt="Logo"
            className="w-13 h-12 object-contain"
          />
        </div>
        <p className="mt-2 text-center">
          Plot No.43, Sy No. 355, Near Brundavan Hotel, Beside ORR, Pedda
          AmberPet, Hayathnagar, R.R.Dist
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-between w-full space-x-4">
            <img
              src={MahindraLogo}
              alt="Logo"
              className="w-13 h-12 object-contain"
            />
            <div className="text-center px-[110px]">
              <p className="font-bold text-lg">Prop: G.Shekar</p>
              <p className="text-sm">Ph: 9640600112, 966749900</p>
            </div>
            <img
              src={BharatBenzLogo}
              alt="Logo"
              className="w-13 h-12 object-contain"
            />
          </div>
        </div>
      </header>
    </>
  );
}
