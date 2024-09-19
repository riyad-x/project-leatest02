import './App.css';
import navCSS from './../Nav/Nav.module.css'
import logo from './../../assets/images/logo.png'

function App() {
  return (
    <>
      <div className={navCSS.nav}>
        <div className={navCSS.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </>
  )
}

export default App;

