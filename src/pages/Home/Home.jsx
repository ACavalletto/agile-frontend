const Home = ({ setUser }) => {

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => { setUser(false) }}>Logout</button>
        </div>
    )
}

export default Home;