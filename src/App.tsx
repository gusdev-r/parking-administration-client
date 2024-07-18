import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { AppThemeProvider } from "./shared/context";
import { SideMenu } from "./components/side-menu/SideMenu";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideMenu>
          <RoutesApp/>
        </SideMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;