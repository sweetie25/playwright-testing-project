import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

function App() {
  const [printMode, setPrintMode] = useState(true);
  const [vehicleForm, setVehicleForm] = useState({
    driver: "",
    vehicleReg: "",
    date: "",
    code: "",
  });
  const togglePrintMode = () => {
    setPrintMode(!printMode);
  };

  const options = {
    filename: `${vehicleForm.date.split("-").reverse().join("-")}_${
      vehicleForm.driver
    }.pdf`,
    method: "save",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.MEDIUM,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      // margin: Margin.NONE,
      margin: Margin.SMALL,
      // default is 'A4'
      format: "A4",
      // default is 'portrait'
      orientation: "landscape",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/jpeg",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };

  const getTargetElement = () => document.getElementById("mainContent");
  const downloadPdf = () => generatePDF(getTargetElement, options);

  return (
    <div id="mainContent" className={`${printMode && "dark"} h-screen`}>
      <div className="dark:text-dark-secondary dark:bg-dark-primary  bg-light-primary text-light-secondary h-full">
        <Header
          printMode={printMode}
          downloadPdf={downloadPdf}
          vehicleForm={vehicleForm}
        />

        <Content
          togglePrintMode={togglePrintMode}
          printMode={printMode}
          vehicleForm={vehicleForm}
          setVehicleForm={setVehicleForm}
        />
      </div>
    </div>
  );
}

export default App;
