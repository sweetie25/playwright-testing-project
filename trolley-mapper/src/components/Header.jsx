import { GoogleMapsLogo } from "./GoogleMapsLogo.jsx";
import { Logo } from "./logo.jsx";
import { PdfLogo } from "./PdfLogo.jsx";

function Header({ printMode, targetRef, downloadPdf, vehicleForm }) {
  return (
    <div
      ref={targetRef}
      className=" flex justify-between items-center border-b-2 lg:mb-4 text-2xl h-16 "
    >
      <div className="flex justify-center ml-4 items-center">
        <a href="https://lgrv-alt.github.io/trolley-mapper/">
          <Logo />
        </a>
        <h1
          className=""
          onClick={() => {
            console.log("clicked");
          }}
        >
          Trolley Mapper
        </h1>
        {printMode ? null : <p>/{vehicleForm.code}</p>}
      </div>

      <div className="lg:mr-5 mr-2 flex gap-2">
        {printMode ? (
          <a href="https://www.google.com/maps" target="blank">
            <GoogleMapsLogo />
          </a>
        ) : (
          <button>
            <div className="cursor-pointer" onClick={() => downloadPdf()}>
              <PdfLogo />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
