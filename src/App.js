import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Pagenotfound from './pages/Pagenotfound';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Pagenotfound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
