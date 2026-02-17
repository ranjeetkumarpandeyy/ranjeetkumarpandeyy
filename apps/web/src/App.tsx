import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AdminDashboard = () => <h1>Admin Panel</h1>;
const HRDashboard = () => <h1>HR Panel</h1>;
const EmployeeDashboard = () => <h1>Employee Panel</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="*" element={<Navigate to="/employee" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
