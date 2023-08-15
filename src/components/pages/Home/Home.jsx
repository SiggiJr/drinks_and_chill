import { Link } from 'react-router-dom';

const Home = () => {
  return ( 
    <>
    <h1>Home</h1>
    <Link to="/alldrinkslist"><button>alldrinks</button></Link>
    </>
  );
}

export default Home;