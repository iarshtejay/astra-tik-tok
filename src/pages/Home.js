import FollowersColumn from '../components/FollowersColumn'

const Home = () => {
  return (
        <div className="container">
                <FollowersColumn />
                <div className="feed"> 
                    <h1>Home</h1>
                </div>
            <div className="suggested-box"></div>
        </div>
  );
}

export default Home