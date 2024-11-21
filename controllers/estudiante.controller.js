const Estudiante = require("../models/Estudiante.entity.js");

const agregarEstudiante = (datosEstudiante) => {
    return new Promise(async(resolve, reject) => {
        try {
            const estudiante = await Estudiante.create(datosEstudiante);
            resolve(estudiante);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { agregarEstudiante }