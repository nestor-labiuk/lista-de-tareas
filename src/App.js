import './App.css';

function App() {
  return (
    <div className="app">
      <div className="pt-5">
        <div className="container p-5 border border-2 border-light-subtle rounded-3"    style={{ width: "30rem" }}  >
          <h1 className="text-center">Lista de tareas <i className="bi-alarm icono" ></i></h1>
          <div className="d-flex flex-column mb-5">
            <div className="input-group flex-nowrap mt-5 mb-3 ">
              <input type="text" class="form-control " placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
        
            <div className="d-flex justify-content-center">
              <buton className="btn btn-light " style={{ width: "6rem" }}>Guardar</buton>
            </div>
          </div>

          <ul class="list-group">
            <li className="input-group flex-nowrap my-1">
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
              <span className="input-group-text" id="addon-wrapping"><i className="bi bi-pen btn p-0"></i></span>
              <span className="input-group-text" id="addon-wrapping"><i className="bi bi-trash3 btn p-0" ></i></span>
            </li>
          </ul>

        </div>
            </div>
      </div>
  );
}

export default App;
