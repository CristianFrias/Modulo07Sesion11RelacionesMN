const conexion = require("./conexion.js");
const Curso = require("./models/Curso.entity.js");
const Estudiante = require("./models/Estudiante.entity.js");
const { agregarCurso, asignarEstudiante, consultarCurso } = require("./controllers/curso.controller.js");
const { agregarEstudiante } = require("./controllers/estudiante.controller.js");

(async() => {
    try {
        await conexion.sync({ alter: true });
        // const listadoCursos = await Curso.findAll();
        // console.log({ listadoCursos });

        // const curso = await agregarCurso({ codigo: "0088VUE", nombre: "FrontEnd Vue 0088" });

        // const estudiante = await agregarEstudiante({ nombre: "Mauricio", apellido: "Suau" })
    
        // await asignarEstudiante(1, 1);
        // await asignarEstudiante(1, 6);
        // await asignarEstudiante(2, 1);
        // await asignarEstudiante(3, 2);
        // await asignarEstudiante(3, 4);
        // await asignarEstudiante(3, 5);

        const consulta = await consultarCurso(3);
        console.log(JSON.parse(JSON.stringify(consulta)));
        
        
        // const curso1 = await Curso.create({ codigo: "0086JS", nombre: "FullStack JavaScript 0086" });
        // const curso2 = await Curso.create({ codigo: "0087PYT", nombre: "FullStack Python 0087" });

        // const estudiante1 = await Estudiante.create({ nombre: "Cristián", apellido: "Frías" });
        // const estudiante2 = await Estudiante.create({ nombre: "Andrés", apellido: "García" });
        // const estudiante3 = await Estudiante.create({ nombre: "Elena", apellido: "García" });
        // const estudiante4 = await Estudiante.create({ nombre: "Ivanna", apellido: "Frías" });
        // const estudiante5 = await Estudiante.create({ nombre: "Jorge", apellido: "Frías" });

        console.log("Registros creados exitosamente");
        
    } catch (error) {
        console.log(error.message || "Ocurrió un error interno");

    }
    
})()