import './App.css';
import { useState } from 'react';

function App() {
  const [note, setNote] = useState('')
  const [newNote, setNewNote] = useState([])

  const handleChange = (event) => {
    event.preventDefault()
    setNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    note && setNewNote(newNote.concat(note))
    setNote('')
  }

  const reset = (event) => {
    console.log(event.target)
    console.log(event.target.lenght)
  }



  return (
    <div className="app">
      <div className="pt-5">
        <form className="container p-5 border border-2 border-light-subtle rounded-3"
          style={{ width: "30rem" }}
          onSubmit={handleSubmit}
          onReset={reset}
        >
          <h1 className="text-center">Lista de tareas <i className="bi-alarm icono" ></i></h1>

          <div className="d-flex flex-column mb-5">

            <div className="input-group flex-nowrap mt-5 mb-3 ">
              <input type="text" className="form-control "
                value={note}
                onChange={handleChange}

              />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-light" style={{ width: "6rem" }}
              // type="submit" el ultimo boton de un form es submit or defecto
              // onClick={handleClick}cambiamos el evento on click del boton por onSubmit del form
              >Guardar </button>
            </div>

          </div>

          {newNote &&
            newNote.map((note) =>
              <ul className="list-group">
                <li className="input-group flex-nowrap my-1">

                  <div className=" p-2 pt-2 rounded-1  border-3" style={{ backgroundColor: "#05d8" }}><input className="form-check-input" type="checkbox" id="flexCheckDefault" /></div>
                  <input type="text" className="form-control " disabled value={note} />
                  <span className="input-group-text " id="addon-wrapping">
                    <div class="form-check ">
                      <label className="form-check-label" for="flexCheckDefault">
                      </label>

                      <i className="bi bi-trash3 btn p-0"
                        onClick={reset}
                      ></i>
                    </div>
                  </span>
                </li>
              </ul>
            )
          }

        </form>
      </div>
    </div>
  );
}

export default App;
