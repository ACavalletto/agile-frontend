import { Route, Routes } from 'react-router-dom';
import ProfilePage from '../Profile/ProfilePage';

const Home = () => {

    return (
        <div>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} />

                <Route path="/profile"
                    element={<ProfilePage/>} />
            </Routes>

        </div>
    )
}

export default Home;