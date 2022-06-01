import './App.css';
import avatarImg from './asset/illustator.png';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          SignUp
        </div>
        <div className="col-md-7">
          <img src={avatarImg} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  );
}

export default App;