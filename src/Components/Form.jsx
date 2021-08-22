import React from 'react'

function Form() {
    return (
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                   <input
                    type="text"
                     className="form-control form-control-lg"
                     placeholder="Busca una Imagen, ejemplo: futbol"
                     />
                </div>
                <div className="form-group col-md-4">
                   <input
                    type="submit"
                    className="btn btn-block btn-lg btn-info btn-block"
                    value="Buscar" />
                </div>
            </div>
        </form>
    )
}

export default Form
