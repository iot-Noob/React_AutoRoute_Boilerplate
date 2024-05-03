 import { Route,Routes } from "react-router-dom";
import { lazy,Suspense } from "react";
import Main from "./fixroute/Main";
 
 
 const PageLayout=lazy(()=>import('./container/PageLayout'))
function App() {
  return (
  <>
 
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
