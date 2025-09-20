function validationsFormEstudiantes({nombre, email}){
    let error = ""
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nombre || nombre.length < 3 ) return error="por favor ingrese un nombre verdadero"
    if(!email || !regex.test(email)) return error = "error email incorrecto"

    return error
}

export default validationsFormEstudiantes;