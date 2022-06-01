import './App.css';
import avatarImg from './asset/illustator.png';
import Signup from './component/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img src={avatarImg} alt="" className='img-fluid w-100' />
        </div>
      </div>
    </div>
  );
}

export default App;