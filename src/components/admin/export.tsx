import { FaFileExport } from "react-icons/fa";

const Export = () => {
  return (
    <>
      <div className="export-btn">
        <FaFileExport size={25} className="text-primary" />
        <span>Export All</span>
      </div>
    </>
  )
}

export default Export