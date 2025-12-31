import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import APIReferenceLayout from './components/APIReferenceLayout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Guides from './pages/Guides';
import APIReference from './pages/APIReference';
import Prerequisites from './pages/api-reference/Prerequisites';
import GetCountries from './pages/api-reference/GetCountries';
import CallbackURLs from './pages/api-reference/CallbackURLs';
import TransactionStatus from './pages/api-reference/TransactionStatus';
import Errors from './pages/api-reference/Errors';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main site routes with standard layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/guides" element={<Guides />} />
          
          {/* API Reference routes - nested under main layout, with additional sidebar */}
          <Route path="/api-reference" element={<APIReferenceLayout />}>
            <Route index element={<APIReference />} />
            <Route path="prerequisites" element={<Prerequisites />} />
            <Route path="callback-urls" element={<CallbackURLs />} />
            <Route path="transaction-status" element={<TransactionStatus />} />
            <Route path="errors" element={<Errors />} />
            <Route path="get-resources-countries" element={<GetCountries />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
