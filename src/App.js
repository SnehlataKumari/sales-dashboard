import "./App.css";
import SimpleCard from "./components/Rows/Rows";
import NavBar from "./components/NavBar/NavBar";
import LineChart from "./components/Chart/LineChart";
import DataGridDemo from "./components/AccessibleTable/AccessibleTable";

function App() {
  return (
    <>
      <NavBar />
      <SimpleCard />
      <div className="chart">
        <LineChart />
      </div>
      <div className="table">
        <DataGridDemo />
      </div>
    </>
  );
}

export default App;
