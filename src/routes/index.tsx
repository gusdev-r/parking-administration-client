import { Routes, Route, Navigate } from "react-router-dom";

export function RoutesApp() {
  return(
    <Routes>
      <Route path='main' element={<p> Initial Page </p>}></Route>
      <Route path='*' element={<Navigate to='/main'/>}></Route>
    </Routes>
  )
}
