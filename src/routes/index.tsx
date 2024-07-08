import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from '../shared/context';

export function RoutesApp() {
  const { toggleTheme } = useAppThemeContext();
  return(
    <Routes>
      <Route path='/main' element={<Button variant='contained' color='primary' onClick={toggleTheme}>Theme</Button>}/>
      <Route path='*' element={<Navigate to='/main' /> } />
    </Routes>
  )
}
