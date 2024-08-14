import AppRoute from "./routes";
import { AuthProvider } from "./content/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}

export default App;