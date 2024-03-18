import React, { Suspense } from "react";
import Website from "./pages/Website";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient,QueryClientProvider } from "react-query";
import {ToastContainer} from 'react-toastify'
import {ReactQueryDevtools} from 'react-query/devtools'

function App() {
   const queryClient = new QueryClient()

  return (
     <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties" element={<Properties />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen={false}/>
     </QueryClientProvider>
  );
}

export default App;
