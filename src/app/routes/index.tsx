import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { Dashboard, Pagina } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        
        <Route path="/carlos" element={<Pagina />} /> 
        <Route path="/pagina-carlos" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/pagina-carlos" />} />
      </Switch>
    </BrowserRouter>
  );
}