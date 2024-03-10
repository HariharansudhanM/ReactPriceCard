import "./App.css";
import ProfileComponent from "./components/ProfileComponent";
import ChangeProfileName from "./components/ChangeProfileName";
import ProfileProvider from "./context/ProfileProvider";

function App() {
  return (
    <ProfileProvider>
      <ProfileComponent />
      <ChangeProfileName />
    </ProfileProvider>
  );
}

export default App;
