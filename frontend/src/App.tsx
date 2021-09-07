import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import DataTable from "components/DataTable/DataTable";

function App() {
  return (
    <div >
    <Navbar />
    <div className="container">
         <DataTable /> 
         <DataTable /> 
         <DataTable /> 
         <DataTable /> 
         <DataTable /> 
    </div>

    <Footer />
    </div>
  );
}

export default App;
