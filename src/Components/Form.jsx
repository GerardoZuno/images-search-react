import React, {useState} from 'react'
import Error from './Error'

function Form({setSearch}) {

    const [termino, setTermino] = useState("")
    const [error, setError] = useState(false)




    const handleChange = (e) => {
        setTermino(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!termino.trim()) {
            setError(true)
            return 
        }
        setError(false)
        setSearch(termino)

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                   <input
                    type="text"
                     className="form-control form-control-lg"
                     placeholder="Busca una Imagen, ejemplo: futbol"
                     onChange={handleChange}/>
                </div>
                <div className="form-group col-md-4">
                   <input
                    type="submit"
                    className="btn btn-block btn-lg btn-info btn-block"
                    value="Buscar" />
                </div>
            </div>

            {error ? <Error message="Datos vacios"/> : null}
        </form>
    )
}

export default Form
