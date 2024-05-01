 import { Route,Routes } from "react-router-dom";
import { lazy,Suspense } from "react";
import Main from "./fixroute/Main";
import Navbar from "./component/Navbar";
 
 const PageLayout=lazy(()=>import('./container/PageLayout'))
function App() {
  return (
  <>
 
  <Navbar/>
  <Suspense fallback={<div className="text-center text-lg">Loading page....</div>}>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/*" element={<PageLayout/>}/>
    </Routes>
  </Suspense>
 
  </>
  );
}

export default App;
