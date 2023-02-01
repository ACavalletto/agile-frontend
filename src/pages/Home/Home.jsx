import { Route, Routes } from 'react-router-dom';

const Home = ({user}) => {

    return (
        <div>
            {console.log(user.uid)}
            Home
        </div>
    )
}

export default Home;