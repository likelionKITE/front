import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "./style";
import Layout from './layout/body';
import Main from "./pages/main/body";
import Signin from "./pages/signin/body";
import Signup from "./pages/signup/body";
import Festival from "./pages/festival/body";
import Destination from "./pages/destination/body";
import Local from "./pages/local/body";
import TravelInfo from "./pages/travelInfo/body";
import FestiDetail from "./pages/festiDetail/body";
import DestiDetail from "./pages/destiDetail/body";


function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Layout>
                    <Routes>
                        <Route path={`/`} element={<Main />}></Route>
                        <Route path={`/signin`} element={<Signin />}></Route>
                        <Route path={`/signup`} element={<Signup />}></Route>
                        <Route path={`/festival`} element={<Festival />}></Route>
                        <Route path={`/destination`} element={<Destination />}></Route>
                        <Route path={`/local`} element={<Local />}></Route>
                        <Route path={`/travelInfo`} element={<TravelInfo />}></Route>
                        <Route path={`/festiDetail`} element={<FestiDetail />}></Route>
                        <Route path={`/destiDetail`} element={<DestiDetail />}></Route>
                    </Routes>
                </Layout>
            </Router>
        </>
    )
}

export default App;