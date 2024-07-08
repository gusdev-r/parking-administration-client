import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { AppThemeProvider } from "./shared/context";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
    </AppThemeProvider>
    );
}

export default App