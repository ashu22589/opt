import { ReactComponent as LogoSvg } from "./assets/images/opt/logo.svg";

function App() {
  return (
    <div className="opt-top-container">
      <div className="header">
        <div className="header-inner">
          <div className="logo-div">
            <LogoSvg className="logo" />
          </div>
          <div className="header-items">
            <h2>Outside Team Building</h2>
            <h2>Challenges</h2>
            <h2>Team Reports</h2>
            <h2>Invite</h2>
            <h2>CreightonCreighton</h2>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="bottom-inner">
          <h2 className="text-1">{`Activity Library > Outside Team Building`}</h2>
          <h2 className="text-2">Outside Team Building</h2>
          <h2 className="text-3">
            Record, manage, and track all of your team building activities.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
