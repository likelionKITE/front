import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "./style";
import { AuthProvider } from './pages/AuthContext';
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
import Mypage from "./layout/mypage/body";

function App() {
    return (
        <>
            <AuthProvider>
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
                            <Route path={`/festiDetail/:content_id`} element={<FestiDetail />}></Route>
                            <Route path={`/destiDetail/:content_id`} element={<DestiDetail />}></Route>
                            <Route path={`/mypage`} element={<Mypage />}></Route>
                        </Routes>
                    </Layout>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App;
