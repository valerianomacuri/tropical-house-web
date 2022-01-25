import { BottomTab } from "components/BottomTab";
import { Home } from "pages/Home";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
      <HashRouter>
          <Routes>
            <Route path="/playlists" element={ <h1>bjadb</h1>}/>
            <Route path="/" element={ <Home /> } />
            <Route path="/*" element={ <Navigate to="/" replace /> }/>
          </Routes>
          <BottomTab />
      </HashRouter>
  )
};
