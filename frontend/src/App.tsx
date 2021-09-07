import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import DataTable from "components/DataTable/DataTable";
import Barchart from "components/Barchart/Barchart";
import DonutChart from "components/DonutChart/DonutChart";

function App() {
  return (
    <div >
    <Navbar />
    <div className="container">
        <h1 className="text-primary"> Dashbord de Vendas</h1>
        <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                <Barchart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                <DonutChart />
            </div>
        </div>
        <div>
           <h1 className="text-primary"> Todas Vendas</h1>
        </div>
         <DataTable /> 

    </div>

    <Footer />
    </div>
  );
}

export default App;
