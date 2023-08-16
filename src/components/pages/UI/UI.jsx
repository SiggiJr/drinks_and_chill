import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";

const UI = () => {
  return ( 
    <>
    <Header/>
    <Outlet/>
    </>
  );
}

export default UI;