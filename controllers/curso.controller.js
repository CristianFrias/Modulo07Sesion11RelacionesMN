const Curso = require("../models/Curso.entity.js");
const Estudiante = require("../models/Estudiante.entity.js");

const agregarCurso = (datosCurso) => {
    return new Promise(async(resolve, reject) => {
        try {
            const curso = await Curso.create(datosCurso);
            resolve(curso);
        } catch (error) {
            reject(error);
        }
    });
}

const asignarEstudiante = (idCurso, idEstudiante) => {
    return new Promise(async(resolve, reject) => {
        try {
            const curso = await Curso.findByPk(idCurso);
            if (!curso) {
                reject("El id de Curso no existe en los registros.");
            }
            const estudiante = await Estudiante.findByPk(idEstudiante);
            if (!estudiante) {
                reject("El id de Estudiante no existe en los registros.");
            }

            const asignacion = await curso.addEstudiante(estudiante);
            console.log(asignacion);
            resolve("Estudiante asignado con éxito.");  
        } catch (error) {
            reject(error);
        }
              
    });
}

const consultarCurso = (idCurso) => {
    try {
        return new Promise(async(resolve, reject) => {
            const curso = await Curso.findByPk(idCurso, {
                include: {
                    model: Estudiante,
                    as: "estudiantes"
                }
            });
            resolve(curso); 
        })
    } catch (error) {
        reject(error);
    }
}



module.exports = { agregarCurso, asignarEstudiante, consultarCurso }