import avatar from './asset/teach.jpg';
import Signup from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img src={avatar} alt="" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
}

export default App;
