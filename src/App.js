import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginLeft: "50px" }}>
        <p style={{ fontSize: "50px", fontFamily: "-moz-initial" }}>Spurgeon.</p>

        <div style={{ marginLeft: "45%", marginTop: "-70px", display: "flex", flexDirection: "row", gap: "50px" }}>
          <button style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>Home</button>
          <button onClick={() => navigate('/styles')} style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>Styles</button>
          <button onClick={() => navigate('/about')} style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>About</button>
          <button onClick={() => navigate('/contact')} style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>Contact</button>
        </div>
        <div style={{ marginTop: "10%" }}>
          <p style={{ textAlign: "center", fontSize: "100px", fontFamily: "-moz-initial" }}>Learn More About Us.</p>
        </div>
        <div
          style={{ backgroundImage: "URL(https://themewagon.github.io/spurgeon/images/thumbs/about/about-2400.jpg)", backgroundSize: "cover", height: "42pc", width: "75pc", marginLeft: "16%" }}>
        </div>
        <div>
          <p style={{ fontSize: "26px", height: "350px", width: "59%", color: "Gray", marginLeft: "25%", marginTop: "4%" }}>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat
            dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat
            enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet
            magna cupidatat qui labore cillum cillum cupidatat fugiat nostrud.</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
        <div>
          <p style={{ width: "45%", marginTop: "-28%", fontSize: "20px", marginLeft: "69%" }}><b style={{ fontSize: "120px" }}>E</b><p style={{ marginLeft: "70px", marginTop: "-120px", width: "350px" }}>ligendi quam at quis. Sit vel neque</p>
            <p style={{ marginLeft: "70px", marginTop: "-15px", width: "300px" }}>quam consequuntur expedita</p>
            <p style={{ marginLeft: "70px", width: "400px", marginTop: "-11px" }}>quisquam. Incidunt quae qui error.</p>
            <p style={{ marginLeft: "8px", marginTop: "-10px", width: "130%" }}></p>
            <p style={{ marginLeft: "8px", width: "140%" }}>Rerum non facere mollitia ut magnam
              laboriosam. Quisquam neque quia ex eligendi
              repellat illum quibusdam aut. Architecto quam
              consequuntur totam ratione reprehenderit est
              praesentium impedit maiores incididunt
              adipisicing veniam velit. Duis ex ad cupidatat
              tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu
              exercitation incididunt.</p></p>
        </div>
        <div>
          <p style={{ width: "42%", fontSize: "20px", marginLeft: "18%", marginTop: "-20%" }}>
            Duis ex ad cupidatat tempor Excepteur cillum
            cupidatat fugiat nostrud cupidatat dolor sunt
            sint sit nisi est eu exercitation incididunt
            adipisicing veniam velit id fugiat enim mollit
            amet anim veniam dolor dolor irure velit
            commodo cillum sit nulla ullamco magna amet
            magna cupidatat qui labore cillum sit in tempor
            veniam consequat non laborum adipisicing
            aliqua ea nisi sint ut quis proident ullamco ut
            dolore culpa occaecat ut laboris in sit minim
            cupidatat ut dolor voluptate enim veniam
            consequat occaecat fugiat in adipisicing in
            amet.
          </p>
         
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
