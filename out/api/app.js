<<<<<<< HEAD
"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
function GET(request) {
  return __awaiter(this, void 0, void 0, function* () {
    const { searchParams } = new URL(request.url);
    const delay = searchParams.get("delay");
    if (delay) {
      yield new Promise((resolve) => setTimeout(resolve, Number(delay)));
    }
    const idProceso = searchParams.get("idProceso");
    if (idProceso) {
      const procesos = Procesos.find(
        (proceso) => proceso.idProceso.toString() === idProceso
      );
      return new Response(JSON.stringify(procesos), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
    }
    const llaveProceso = searchParams.get("llaveProceso");
    if (llaveProceso) {
      const procesos = Procesos.filter(
        (proceso) => proceso.llaveProceso === llaveProceso
      );
      return new Response(JSON.stringify(procesos), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
    }
    const procesos = Procesos.map((Proceso) => Proceso);
    return new Response(JSON.stringify(procesos), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  });
=======
'use strict';
var __awaiter = (this && this.__awaiter) || function (
  thisArg, _arguments, P, generator
) {
  function adopt(
    value
  ) {
    return value instanceof P
      ? value
      : new P(
        function (
          resolve
        ) {
          resolve(
            value
          ); 
        }
      ); 
  }
  return new (P || (P = Promise))(
    function (
      resolve, reject
    ) {
      function fulfilled(
        value
      ) {
        try {
          step(
            generator.next(
              value
            )
          ); 
        }
        catch (e) {
          reject(
            e
          ); 
        } 
      }
      function rejected(
        value
      ) {
        try {
          step(
            generator['throw'](
              value
            )
          ); 
        }
        catch (e) {
          reject(
            e
          ); 
        } 
      }
      function step(
        result
      ) {
        result.done
          ? resolve(
            result.value
          )
          : adopt(
            result.value
          ).then(
            fulfilled,
            rejected
          ); 
      }
      step(
        (generator = generator.apply(
          thisArg,
          _arguments || []
        )).next()
      );
    }
  );
};
Object.defineProperty(
  exports,
  '__esModule',
  { value: true }
);
exports.GET = void 0;
function GET(
  request
) {
  return __awaiter(
    this,
    void 0,
    void 0,
    function* () {
      const { searchParams } = new URL(
        request.url
      );
      const delay = searchParams.get(
        'delay'
      );
      if (delay) {
        yield new Promise(
          (
            resolve
          ) => setTimeout(
            resolve,
            Number(
              delay
            )
          )
        );
      }
      const idProceso = searchParams.get(
        'idProceso'
      );
      if (idProceso) {
        const procesos = Procesos.find(
          (
            proceso
          ) => proceso.idProceso.toString() === idProceso
        );
        return new Response(
          JSON.stringify(
            procesos
          ),
          {
            status: 200,
            headers: {
              'content-type': 'application/json',
            },
          }
        );
      }
      const llaveProceso = searchParams.get(
        'llaveProceso'
      );
      if (llaveProceso) {
        const procesos = Procesos.filter(
          (
            proceso
          ) => proceso.llaveProceso === llaveProceso
        );
        return new Response(
          JSON.stringify(
            procesos
          ),
          {
            status: 200,
            headers: {
              'content-type': 'application/json',
            },
          }
        );
      }
      const procesos = Procesos.map(
        (
          Proceso
        ) => Proceso
      );
      return new Response(
        JSON.stringify(
          procesos
        ),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
          },
        }
      );
    }
  );
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
}
exports.GET = GET;
const Procesos = [
  {
    idProceso: 50521480,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303420170083600",
    fechaProceso: "21 de junio de 2017",
    fechaUltimaActuacion: "27 de abril de 2023",
    despacho:
      "juzgado 012 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Luis Esneider Orduz Farfan",
=======
    llaveProceso: '11001400303420170083600',
    fechaProceso: '21 de junio de 2017',
    fechaUltimaActuacion: '27 de abril de 2023',
    despacho: 'juzgado 012 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Luis Esneider Orduz Farfan',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81728891,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400303420170083600",
    fechaProceso: "14 de septiembre de 2017",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 034 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Luis Esneider Orduz Farfan               ",
=======
    llaveProceso: '11001400303420170083600',
    fechaProceso: '14 de septiembre de 2017',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 034 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Luis Esneider Orduz Farfan               ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50468620,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300320170088400",
    fechaProceso: "26 de mayo de 2017",
    fechaUltimaActuacion: "17 de abril de 2023",
    despacho: "juzgado 003 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Yesid Albeiro Ramos",
=======
    llaveProceso: '11001400300320170088400',
    fechaProceso: '26 de mayo de 2017',
    fechaUltimaActuacion: '17 de abril de 2023',
    despacho: 'juzgado 003 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Yesid Albeiro Ramos',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 113956611,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400300320170088400",
    fechaProceso: "24 de mayo de 2017",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 003 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Yesid Albeiro Ramos         ",
=======
    llaveProceso: '11001400300320170088400',
    fechaProceso: '24 de mayo de 2017',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 003 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Yesid Albeiro Ramos         ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112048180,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302520170090300",
    fechaProceso: "29 de agosto de 2017",
    fechaUltimaActuacion: "30 de marzo de 2023",
    despacho:
      "juzgado 018 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Darnelly Hernandez Martinez",
=======
    llaveProceso: '11001400302520170090300',
    fechaProceso: '29 de agosto de 2017',
    fechaUltimaActuacion: '30 de marzo de 2023',
    despacho: 'juzgado 018 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Darnelly Hernandez Martinez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50621670,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300120170100100",
    fechaProceso: "9 de agosto de 2017",
    fechaUltimaActuacion: "28 de marzo de 2023",
    despacho:
      "juzgado 017 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Wilson Alfonso Jimenez Mendieta",
=======
    llaveProceso: '11001400300120170100100',
    fechaProceso: '9 de agosto de 2017',
    fechaUltimaActuacion: '28 de marzo de 2023',
    despacho: 'juzgado 017 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Wilson Alfonso Jimenez Mendieta',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50716620,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300820170113400",
    fechaProceso: "19 de septiembre de 2017",
    fechaUltimaActuacion: "1 de marzo de 2023",
    despacho:
      "juzgado 006 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Fanor Diaz Agudelo",
=======
    llaveProceso: '11001400300820170113400',
    fechaProceso: '19 de septiembre de 2017',
    fechaUltimaActuacion: '1 de marzo de 2023',
    despacho: 'juzgado 006 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Fanor Diaz Agudelo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112945420,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303720170139100",
    fechaProceso: "11 de octubre de 2017",
    fechaUltimaActuacion: "9 de marzo de 2022",
    despacho:
      "juzgado 011 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Noel Puerta Jaramillo      ",
=======
    llaveProceso: '11001400303720170139100',
    fechaProceso: '11 de octubre de 2017',
    fechaUltimaActuacion: '9 de marzo de 2022',
    despacho: 'juzgado 011 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Noel Puerta Jaramillo      ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50777890,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301520170139400",
    fechaProceso: "13 de octubre de 2017",
    fechaUltimaActuacion: "8 de noviembre de 2021",
    despacho:
      "juzgado 011 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Ana Lucia Aguilar  Demandado:       ",
=======
    llaveProceso: '11001400301520170139400',
    fechaProceso: '13 de octubre de 2017',
    fechaUltimaActuacion: '8 de noviembre de 2021',
    despacho: 'juzgado 011 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Ana Lucia Aguilar  Demandado:       ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50762570,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400304820170097400",
    fechaProceso: "9 de octubre de 2017",
    fechaUltimaActuacion: "1 de diciembre de 2022",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Anderson Revelo Santos",
=======
    llaveProceso: '11001400304820170097400',
    fechaProceso: '9 de octubre de 2017',
    fechaUltimaActuacion: '1 de diciembre de 2022',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Anderson Revelo Santos',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50769660,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302120170153200",
    fechaProceso: "11 de octubre de 2017",
    fechaUltimaActuacion: "14 de abril de 2023",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Libardo Alfonso Gonzalez Triviño",
=======
    llaveProceso: '11001400302120170153200',
    fechaProceso: '11 de octubre de 2017',
    fechaUltimaActuacion: '14 de abril de 2023',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Libardo Alfonso Gonzalez Triviño',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81620291,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400302120170153200",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 021 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400302120170153200',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 021 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 51042800,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305620180022100",
    fechaProceso: "1 de marzo de 2018",
    fechaUltimaActuacion: "11 de noviembre de 2022",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Creas Consultores ",
=======
    llaveProceso: '11001400305620180022100',
    fechaProceso: '1 de marzo de 2018',
    fechaUltimaActuacion: '11 de noviembre de 2022',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Creas Consultores ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51029180,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302120180023600",
    fechaProceso: "23 de febrero de 2018",
    fechaUltimaActuacion: "22 de marzo de 2023",
    despacho:
      "juzgado 013 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Arturo Lince Gomez",
=======
    llaveProceso: '11001400302120180023600',
    fechaProceso: '23 de febrero de 2018',
    fechaUltimaActuacion: '22 de marzo de 2023',
    despacho: 'juzgado 013 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Arturo Lince Gomez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51816100,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001418901420190065600",
    fechaProceso: "4 de abril de 2019",
    fechaUltimaActuacion: "12 de abril de 2023",
    despacho:
      "juzgado 014 de pequeñas causas  y competencia múltiple de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Leidy Yaneth Vidal Rodríguez",
=======
    llaveProceso: '11001418901420190065600',
    fechaProceso: '4 de abril de 2019',
    fechaUltimaActuacion: '12 de abril de 2023',
    despacho: 'juzgado 014 de pequeñas causas  y competencia múltiple de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Leidy Yaneth Vidal Rodríguez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 135801811,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001418901420190065600",
    fechaProceso: "3 de abril de 2019",
    fechaUltimaActuacion: "12 de septiembre de 2022",
    despacho:
      "juzgado 014 de pequeñas causas  y competencia múltiple de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Leidy Yaneth Vidal Rodriguez ",
=======
    llaveProceso: '11001418901420190065600',
    fechaProceso: '3 de abril de 2019',
    fechaUltimaActuacion: '12 de septiembre de 2022',
    despacho: 'juzgado 014 de pequeñas causas  y competencia múltiple de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Leidy Yaneth Vidal Rodriguez ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 87350810,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001418900820180078500",
    fechaProceso: "24 de marzo de 2021",
    fechaUltimaActuacion: "27 de febrero de 2023",
    despacho:
      "juzgado 005 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sandra Patricia Pacheco Ramirez",
=======
    llaveProceso: '11001418900820180078500',
    fechaProceso: '24 de marzo de 2021',
    fechaUltimaActuacion: '27 de febrero de 2023',
    despacho: 'juzgado 005 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sandra Patricia Pacheco Ramirez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 128164881,
    idConexion: 256,
<<<<<<< HEAD
    llaveProceso: "11001400304220200053500",
    fechaProceso: "16 de octubre de 2020",
    fechaUltimaActuacion: "13 de marzo de 2023",
    despacho: "juzgado 042 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Marco Tulio Sanchez Medina      ",
=======
    llaveProceso: '11001400304220200053500',
    fechaProceso: '16 de octubre de 2020',
    fechaUltimaActuacion: '13 de marzo de 2023',
    despacho: 'juzgado 042 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Marco Tulio Sanchez Medina      ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112628300,
    idConexion: 262,
<<<<<<< HEAD
    llaveProceso: "11001400306820200102100",
    fechaProceso: "9 de octubre de 2020",
    fechaUltimaActuacion: "23 de enero de 2023",
    despacho: "juzgado 068 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Dimoin Colombia ",
=======
    llaveProceso: '11001400306820200102100',
    fechaProceso: '9 de octubre de 2020',
    fechaUltimaActuacion: '23 de enero de 2023',
    despacho: 'juzgado 068 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Dimoin Colombia ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51935790,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400308520170084900",
    fechaProceso: "23 de mayo de 2019",
    fechaUltimaActuacion: "27 de abril de 2023",
    despacho:
      "juzgado 011 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Edwin Garces Ardila",
=======
    llaveProceso: '11001400308520170084900',
    fechaProceso: '23 de mayo de 2019',
    fechaUltimaActuacion: '27 de abril de 2023',
    despacho: 'juzgado 011 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Edwin Garces Ardila',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 80553011,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001310301120170033500",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 011 civil del circuito de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001310301120170033500',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 011 civil del circuito de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 1805257424,
    idConexion: 310,
<<<<<<< HEAD
    llaveProceso: "11001310301120170033500",
    fechaProceso: "31 de mayo de 2017",
    fechaUltimaActuacion: "10 de marzo de 2023",
    despacho:
      "juzgado 001 civil del circuito de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Omar Dario Zea Galvis",
=======
    llaveProceso: '11001310301120170033500',
    fechaProceso: '31 de mayo de 2017',
    fechaUltimaActuacion: '10 de marzo de 2023',
    despacho: 'juzgado 001 civil del circuito de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Omar Dario Zea Galvis',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 114256610,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400304320180038400",
    fechaProceso: "12 de abril de 2018",
    fechaUltimaActuacion: "27 de abril de 2023",
    despacho:
      "juzgado 018 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jhonatan Andres Bernal Parra",
=======
    llaveProceso: '11001400304320180038400',
    fechaProceso: '12 de abril de 2018',
    fechaUltimaActuacion: '27 de abril de 2023',
    despacho: 'juzgado 018 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jhonatan Andres Bernal Parra',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50477000,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302620170051100",
    fechaProceso: "31 de mayo de 2017",
    fechaUltimaActuacion: "13 de abril de 2023",
    despacho:
      "juzgado 003 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Luis Carlos Gutierrez Velandia     ",
=======
    llaveProceso: '11001400302620170051100',
    fechaProceso: '31 de mayo de 2017',
    fechaUltimaActuacion: '13 de abril de 2023',
    despacho: 'juzgado 003 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Luis Carlos Gutierrez Velandia     ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 86212261,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "25183400300120170010600",
    fechaProceso: "30 de mayo de 2017",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 001 civil municipal de chocontá ",
    departamento: "Cundinamarca",
    sujetosProcesales: "Alvaro  Rodriguez Alonso       ",
=======
    llaveProceso: '25183400300120170010600',
    fechaProceso: '30 de mayo de 2017',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 001 civil municipal de chocontá ',
    departamento: 'Cundinamarca',
    sujetosProcesales: 'Alvaro  Rodriguez Alonso       ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50521190,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300620170030200",
    fechaProceso: "21 de junio de 2017",
    fechaUltimaActuacion: "24 de abril de 2023",
    despacho:
      "juzgado 013 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Ana Rita Guzman Gomez",
=======
    llaveProceso: '11001400300620170030200',
    fechaProceso: '21 de junio de 2017',
    fechaUltimaActuacion: '24 de abril de 2023',
    despacho: 'juzgado 013 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Ana Rita Guzman Gomez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50593100,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300620170041900",
    fechaProceso: "26 de julio de 2017",
    fechaUltimaActuacion: "25 de abril de 2023",
    despacho:
      "juzgado 011 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Derly Catherine Castro Izquierdo",
=======
    llaveProceso: '11001400300620170041900',
    fechaProceso: '26 de julio de 2017',
    fechaUltimaActuacion: '25 de abril de 2023',
    despacho: 'juzgado 011 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Derly Catherine Castro Izquierdo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50517060,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400304220170076000",
    fechaProceso: "20 de junio de 2017",
    fechaUltimaActuacion: "10 de noviembre de 2022",
    despacho:
      "juzgado 010 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Uriel Paerez Perdomo",
=======
    llaveProceso: '11001400304220170076000',
    fechaProceso: '20 de junio de 2017',
    fechaUltimaActuacion: '10 de noviembre de 2022',
    despacho: 'juzgado 010 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Uriel Paerez Perdomo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 111939890,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302220170056700",
    fechaProceso: "15 de junio de 2017",
    fechaUltimaActuacion: "14 de febrero de 2023",
    despacho:
      "juzgado 002 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Rhonald Meza  Tarapues",
=======
    llaveProceso: '11001400302220170056700',
    fechaProceso: '15 de junio de 2017',
    fechaUltimaActuacion: '14 de febrero de 2023',
    despacho: 'juzgado 002 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Rhonald Meza  Tarapues',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51619370,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400308220170068000",
    fechaProceso: "29 de enero de 2019",
    fechaUltimaActuacion: "28 de abril de 2023",
    despacho:
      "juzgado 018 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Eduardo Enrique Arango Chacon",
=======
    llaveProceso: '11001400308220170068000',
    fechaProceso: '29 de enero de 2019',
    fechaUltimaActuacion: '28 de abril de 2023',
    despacho: 'juzgado 018 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Eduardo Enrique Arango Chacon',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81869501,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400308220170068000",
    fechaProceso: "16 de junio de 2017",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 082 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Eduardo Enrique Arango Chacon          ",
=======
    llaveProceso: '11001400308220170068000',
    fechaProceso: '16 de junio de 2017',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 082 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Eduardo Enrique Arango Chacon          ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50508870,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300420170057500",
    fechaProceso: "15 de junio de 2017",
    fechaUltimaActuacion: "26 de abril de 2023",
    despacho:
      "juzgado 018 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sonia Mazuera",
=======
    llaveProceso: '11001400300420170057500',
    fechaProceso: '15 de junio de 2017',
    fechaUltimaActuacion: '26 de abril de 2023',
    despacho: 'juzgado 018 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sonia Mazuera',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50514310,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305920170048300",
    fechaProceso: "20 de junio de 2017",
    fechaUltimaActuacion: "27 de febrero de 2023",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Daniel Hernandez Gonzalez",
=======
    llaveProceso: '11001400305920170048300',
    fechaProceso: '20 de junio de 2017',
    fechaUltimaActuacion: '27 de febrero de 2023',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Daniel Hernandez Gonzalez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 28937944,
    idConexion: 310,
<<<<<<< HEAD
    llaveProceso: "11001310302520170073600",
    fechaProceso: "3 de octubre de 2017",
    fechaUltimaActuacion: "15 de junio de 2022",
    despacho:
      "juzgado 002 civil del circuito de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Miguel Angel Huertas Valencia",
=======
    llaveProceso: '11001310302520170073600',
    fechaProceso: '3 de octubre de 2017',
    fechaUltimaActuacion: '15 de junio de 2022',
    despacho: 'juzgado 002 civil del circuito de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Miguel Angel Huertas Valencia',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50522530,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307020170056600",
    fechaProceso: "22 de junio de 2017",
    fechaUltimaActuacion: "13 de diciembre de 2021",
    despacho:
      "juzgado 014 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Nicolas Fernando Montoya",
=======
    llaveProceso: '11001400307020170056600',
    fechaProceso: '22 de junio de 2017',
    fechaUltimaActuacion: '13 de diciembre de 2021',
    despacho: 'juzgado 014 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Nicolas Fernando Montoya',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 97088411,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400304720170152000",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 047 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400304720170152000',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 047 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 109959053,
    idConexion: 261,
<<<<<<< HEAD
    llaveProceso: "11001400304720170152000",
    fechaProceso: "30 de agosto de 2017",
    fechaUltimaActuacion: "2 de septiembre de 2022",
    despacho: "juzgado 047 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Milciades Galindo Casteblanco  Demandado:    ",
=======
    llaveProceso: '11001400304720170152000',
    fechaProceso: '30 de agosto de 2017',
    fechaUltimaActuacion: '2 de septiembre de 2022',
    despacho: 'juzgado 047 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Milciades Galindo Casteblanco  Demandado:    ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50593640,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400304520170090500",
    fechaProceso: "26 de julio de 2017",
    fechaUltimaActuacion: "25 de febrero de 2022",
    despacho:
      "juzgado 002 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Uriel Ruiz Diaz",
=======
    llaveProceso: '11001400304520170090500',
    fechaProceso: '26 de julio de 2017',
    fechaUltimaActuacion: '25 de febrero de 2022',
    despacho: 'juzgado 002 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Uriel Ruiz Diaz',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51497380,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307620170063500",
    fechaProceso: "22 de noviembre de 2018",
    fechaUltimaActuacion: "5 de diciembre de 2022",
    despacho:
      "juzgado 004 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Fredy Meneses",
=======
    llaveProceso: '11001400307620170063500',
    fechaProceso: '22 de noviembre de 2018',
    fechaUltimaActuacion: '5 de diciembre de 2022',
    despacho: 'juzgado 004 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Fredy Meneses',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50598770,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300320170126400",
    fechaProceso: "27 de julio de 2017",
    fechaUltimaActuacion: "29 de marzo de 2023",
    despacho: "juzgado 003 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Nidia Dorancy Gomez Blanco",
=======
    llaveProceso: '11001400300320170126400',
    fechaProceso: '27 de julio de 2017',
    fechaUltimaActuacion: '29 de marzo de 2023',
    despacho: 'juzgado 003 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Nidia Dorancy Gomez Blanco',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50760030,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301120170108400",
    fechaProceso: "6 de octubre de 2017",
    fechaUltimaActuacion: "27 de abril de 2023",
    despacho:
      "juzgado 002 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Javier Gonzalez Tagua",
=======
    llaveProceso: '11001400301120170108400',
    fechaProceso: '6 de octubre de 2017',
    fechaUltimaActuacion: '27 de abril de 2023',
    despacho: 'juzgado 002 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Javier Gonzalez Tagua',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50623380,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302520170080700",
    fechaProceso: "9 de agosto de 2017",
    fechaUltimaActuacion: "24 de abril de 2023",
    despacho: "juzgado 025 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Juan Carlos Tovar Toledo",
=======
    llaveProceso: '11001400302520170080700',
    fechaProceso: '9 de agosto de 2017',
    fechaUltimaActuacion: '24 de abril de 2023',
    despacho: 'juzgado 025 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Juan Carlos Tovar Toledo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81652411,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400302520170080700",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 025 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400302520170080700',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 025 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 51357750,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307920170108200",
    fechaProceso: "9 de agosto de 2018",
    fechaUltimaActuacion: "19 de enero de 2023",
    despacho:
      "juzgado 001 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jhon Alexander Valencia Marquez",
=======
    llaveProceso: '11001400307920170108200',
    fechaProceso: '9 de agosto de 2018',
    fechaUltimaActuacion: '19 de enero de 2023',
    despacho: 'juzgado 001 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jhon Alexander Valencia Marquez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 110120573,
    idConexion: 261,
<<<<<<< HEAD
    llaveProceso: "11001400304520170106300",
    fechaProceso: "31 de agosto de 2017",
    fechaUltimaActuacion: "7 de marzo de 2023",
    despacho: "juzgado 045 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Flor Esperanza Gutierrez",
=======
    llaveProceso: '11001400304520170106300',
    fechaProceso: '31 de agosto de 2017',
    fechaUltimaActuacion: '7 de marzo de 2023',
    despacho: 'juzgado 045 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Flor Esperanza Gutierrez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50669130,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301220170097100",
    fechaProceso: "30 de agosto de 2017",
    fechaUltimaActuacion: "17 de marzo de 2022",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Fabio Alberto Rivera Mesa       ",
=======
    llaveProceso: '11001400301220170097100',
    fechaProceso: '30 de agosto de 2017',
    fechaUltimaActuacion: '17 de marzo de 2022',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Fabio Alberto Rivera Mesa       ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 86374941,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "25754400300220170026500",
    fechaProceso: "31 de agosto de 2017",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 002 civil municipal de soacha ",
    departamento: "Cundinamarca",
    sujetosProcesales: "Jeovany  Rojas Cruz       ",
=======
    llaveProceso: '25754400300220170026500',
    fechaProceso: '31 de agosto de 2017',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 002 civil municipal de soacha ',
    departamento: 'Cundinamarca',
    sujetosProcesales: 'Jeovany  Rojas Cruz       ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50672820,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400306420170119100",
    fechaProceso: "31 de agosto de 2017",
    fechaUltimaActuacion: "19 de noviembre de 2021",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Cesar Umaña Cañon",
=======
    llaveProceso: '11001400306420170119100',
    fechaProceso: '31 de agosto de 2017',
    fechaUltimaActuacion: '19 de noviembre de 2021',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Cesar Umaña Cañon',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51006610,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302120180016300",
    fechaProceso: "13 de febrero de 2018",
    fechaUltimaActuacion: "11 de enero de 2023",
    despacho: "juzgado 021 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Antonio Castillo Cortes",
=======
    llaveProceso: '11001400302120180016300',
    fechaProceso: '13 de febrero de 2018',
    fechaUltimaActuacion: '11 de enero de 2023',
    despacho: 'juzgado 021 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Antonio Castillo Cortes',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81643141,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400302120180016300",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 021 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400302120180016300',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 021 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 86524020,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305520170086000",
    fechaProceso: "4 de septiembre de 2017",
    fechaUltimaActuacion: "27 de marzo de 2023",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Gerardo Antonio Moncada Vega",
=======
    llaveProceso: '11001400305520170086000',
    fechaProceso: '4 de septiembre de 2017',
    fechaUltimaActuacion: '27 de marzo de 2023',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Gerardo Antonio Moncada Vega',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50685700,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302820170084900",
    fechaProceso: "5 de septiembre de 2017",
    fechaUltimaActuacion: "16 de junio de 2022",
    despacho:
      "juzgado 016 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Luis Torres Tamayo",
=======
    llaveProceso: '11001400302820170084900',
    fechaProceso: '5 de septiembre de 2017',
    fechaUltimaActuacion: '16 de junio de 2022',
    despacho: 'juzgado 016 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Luis Torres Tamayo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50675410,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400306920170084500",
    fechaProceso: "1 de septiembre de 2017",
    fechaUltimaActuacion: "18 de enero de 2023",
    despacho: "juzgado 025 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Maria Olga Castañeda Perugachi",
=======
    llaveProceso: '11001400306920170084500',
    fechaProceso: '1 de septiembre de 2017',
    fechaUltimaActuacion: '18 de enero de 2023',
    despacho: 'juzgado 025 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Maria Olga Castañeda Perugachi',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50687430,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301620170087500",
    fechaProceso: "6 de septiembre de 2017",
    fechaUltimaActuacion: "28 de abril de 2023",
    despacho:
      "juzgado 018 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jorge Alberto Martinez Bendeck",
=======
    llaveProceso: '11001400301620170087500',
    fechaProceso: '6 de septiembre de 2017',
    fechaUltimaActuacion: '28 de abril de 2023',
    despacho: 'juzgado 018 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jorge Alberto Martinez Bendeck',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50692590,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301320170117800",
    fechaProceso: "8 de septiembre de 2017",
    fechaUltimaActuacion: "17 de abril de 2023",
    despacho: "juzgado 013 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sol Judith Buitrago Duque",
=======
    llaveProceso: '11001400301320170117800',
    fechaProceso: '8 de septiembre de 2017',
    fechaUltimaActuacion: '17 de abril de 2023',
    despacho: 'juzgado 013 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sol Judith Buitrago Duque',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50685530,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301320170116200",
    fechaProceso: "5 de septiembre de 2017",
    fechaUltimaActuacion: "26 de abril de 2023",
    despacho:
      "juzgado 016 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Carlos Javier Becerra Benavides",
=======
    llaveProceso: '11001400301320170116200',
    fechaProceso: '5 de septiembre de 2017',
    fechaUltimaActuacion: '26 de abril de 2023',
    despacho: 'juzgado 016 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Carlos Javier Becerra Benavides',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112758450,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300820170105800",
    fechaProceso: "5 de septiembre de 2017",
    fechaUltimaActuacion: "21 de julio de 2022",
    despacho:
      "juzgado 001 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Andres Felipe Gutierrez Trujillo",
=======
    llaveProceso: '11001400300820170105800',
    fechaProceso: '5 de septiembre de 2017',
    fechaUltimaActuacion: '21 de julio de 2022',
    despacho: 'juzgado 001 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Andres Felipe Gutierrez Trujillo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50875780,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300920170127900",
    fechaProceso: "28 de noviembre de 2017",
    fechaUltimaActuacion: "26 de enero de 2022",
    despacho:
      "juzgado 018 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Hernando Sanchez Valbuena",
=======
    llaveProceso: '11001400300920170127900',
    fechaProceso: '28 de noviembre de 2017',
    fechaUltimaActuacion: '26 de enero de 2022',
    despacho: 'juzgado 018 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Hernando Sanchez Valbuena',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50721470,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301720170119500",
    fechaProceso: "20 de septiembre de 2017",
    fechaUltimaActuacion: "18 de abril de 2023",
    despacho: "juzgado 017 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Alirio Heredia Buitrago",
=======
    llaveProceso: '11001400301720170119500',
    fechaProceso: '20 de septiembre de 2017',
    fechaUltimaActuacion: '18 de abril de 2023',
    despacho: 'juzgado 017 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Alirio Heredia Buitrago',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 127748331,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400301720170119500",
    fechaProceso: "19 de septiembre de 2017",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 017 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Alirio  Heredia Buitrago        ",
=======
    llaveProceso: '11001400301720170119500',
    fechaProceso: '19 de septiembre de 2017',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 017 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Alirio  Heredia Buitrago        ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50711570,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301820170152200",
    fechaProceso: "18 de septiembre de 2017",
    fechaUltimaActuacion: "16 de septiembre de 2022",
    despacho:
      "juzgado 016 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Ahinsonjover Toro Vargas",
=======
    llaveProceso: '11001400301820170152200',
    fechaProceso: '18 de septiembre de 2017',
    fechaUltimaActuacion: '16 de septiembre de 2022',
    despacho: 'juzgado 016 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Ahinsonjover Toro Vargas',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 65700110,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400306320170092400",
    fechaProceso: "22 de septiembre de 2017",
    fechaUltimaActuacion: "27 de abril de 2023",
    despacho:
      "juzgado 001 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Hernando Pulecio Paredes",
=======
    llaveProceso: '11001400306320170092400',
    fechaProceso: '22 de septiembre de 2017',
    fechaUltimaActuacion: '27 de abril de 2023',
    despacho: 'juzgado 001 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Hernando Pulecio Paredes',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 110568033,
    idConexion: 261,
<<<<<<< HEAD
    llaveProceso: "11001400305120170111300",
    fechaProceso: "27 de septiembre de 2017",
    fechaUltimaActuacion: "27 de abril de 2023",
    despacho: "juzgado 051 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Rita Cecilia Fernandez Ibañez",
=======
    llaveProceso: '11001400305120170111300',
    fechaProceso: '27 de septiembre de 2017',
    fechaUltimaActuacion: '27 de abril de 2023',
    despacho: 'juzgado 051 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Rita Cecilia Fernandez Ibañez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50765770,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400306820170130600",
    fechaProceso: "10 de octubre de 2017",
    fechaUltimaActuacion: "27 de septiembre de 2022",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Nestor Julio Martinez Orjuela",
=======
    llaveProceso: '11001400306820170130600',
    fechaProceso: '10 de octubre de 2017',
    fechaUltimaActuacion: '27 de septiembre de 2022',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Nestor Julio Martinez Orjuela',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50763460,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303320170147400",
    fechaProceso: "9 de octubre de 2017",
    fechaUltimaActuacion: "7 de marzo de 2022",
    despacho:
      "juzgado 002 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Luis Augusto Sanchez Ortiz",
=======
    llaveProceso: '11001400303320170147400',
    fechaProceso: '9 de octubre de 2017',
    fechaUltimaActuacion: '7 de marzo de 2022',
    despacho: 'juzgado 002 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Luis Augusto Sanchez Ortiz',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50764880,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300120170130900",
    fechaProceso: "9 de octubre de 2017",
    fechaUltimaActuacion: "8 de marzo de 2023",
    despacho:
      "juzgado 010 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Ana Beatriz Corredor De Osorio",
=======
    llaveProceso: '11001400300120170130900',
    fechaProceso: '9 de octubre de 2017',
    fechaUltimaActuacion: '8 de marzo de 2023',
    despacho: 'juzgado 010 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Ana Beatriz Corredor De Osorio',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50762570,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400304820170097400",
    fechaProceso: "9 de octubre de 2017",
    fechaUltimaActuacion: "1 de diciembre de 2022",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Anderson Revelo Santos",
=======
    llaveProceso: '11001400304820170097400',
    fechaProceso: '9 de octubre de 2017',
    fechaUltimaActuacion: '1 de diciembre de 2022',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Anderson Revelo Santos',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51499790,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307620170101600",
    fechaProceso: "23 de noviembre de 2018",
    fechaUltimaActuacion: "30 de marzo de 2023",
    despacho:
      "juzgado 017 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Blanca Nubia Lopez Cifuentes       ",
=======
    llaveProceso: '11001400307620170101600',
    fechaProceso: '23 de noviembre de 2018',
    fechaUltimaActuacion: '30 de marzo de 2023',
    despacho: 'juzgado 017 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Blanca Nubia Lopez Cifuentes       ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81847081,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400307620170101600",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 076 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400307620170101600',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 076 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 51465090,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307820170097500",
    fechaProceso: "26 de octubre de 2018",
    fechaUltimaActuacion: "21 de abril de 2023",
    despacho:
      "juzgado 012 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jogli Joaquin Otero Vargas",
=======
    llaveProceso: '11001400307820170097500',
    fechaProceso: '26 de octubre de 2018',
    fechaUltimaActuacion: '21 de abril de 2023',
    despacho: 'juzgado 012 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jogli Joaquin Otero Vargas',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50782960,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301720170133600",
    fechaProceso: "18 de octubre de 2017",
    fechaUltimaActuacion: "28 de marzo de 2022",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Natalia Cuestas Mondragon",
=======
    llaveProceso: '11001400301720170133600',
    fechaProceso: '18 de octubre de 2017',
    fechaUltimaActuacion: '28 de marzo de 2022',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Natalia Cuestas Mondragon',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50817380,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302220170120800",
    fechaProceso: "1 de noviembre de 2017",
    fechaUltimaActuacion: "31 de enero de 2023",
    despacho:
      "juzgado 020 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Calzado Rivoli         ",
=======
    llaveProceso: '11001400302220170120800',
    fechaProceso: '1 de noviembre de 2017',
    fechaUltimaActuacion: '31 de enero de 2023',
    despacho: 'juzgado 020 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Calzado Rivoli         ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81647611,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400302220170120800",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 022 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400302220170120800',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 022 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 106185210,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305020170133600",
    fechaProceso: "21 de noviembre de 2017",
    fechaUltimaActuacion: "19 de enero de 2023",
    despacho:
      "juzgado 014 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Leonardo Sanabria Sanabra",
=======
    llaveProceso: '11001400305020170133600',
    fechaProceso: '21 de noviembre de 2017',
    fechaUltimaActuacion: '19 de enero de 2023',
    despacho: 'juzgado 014 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Leonardo Sanabria Sanabra',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50859050,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300420170126600",
    fechaProceso: "21 de noviembre de 2017",
    fechaUltimaActuacion: "4 de febrero de 2022",
    despacho:
      "juzgado 009 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Gilberto Jaime Betancourt",
=======
    llaveProceso: '11001400300420170126600',
    fechaProceso: '21 de noviembre de 2017',
    fechaUltimaActuacion: '4 de febrero de 2022',
    despacho: 'juzgado 009 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Gilberto Jaime Betancourt',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112730580,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400306420170162300",
    fechaProceso: "27 de noviembre de 2017",
    fechaUltimaActuacion: "13 de marzo de 2023",
    despacho:
      "juzgado 016 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Orlando Enrique Novoa Barreto",
=======
    llaveProceso: '11001400306420170162300',
    fechaProceso: '27 de noviembre de 2017',
    fechaUltimaActuacion: '13 de marzo de 2023',
    despacho: 'juzgado 016 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Orlando Enrique Novoa Barreto',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 64793050,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307120170125000",
    fechaProceso: "13 de diciembre de 2017",
    fechaUltimaActuacion: "10 de marzo de 2022",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Oscar Humberto Gomez Chuchin",
=======
    llaveProceso: '11001400307120170125000',
    fechaProceso: '13 de diciembre de 2017',
    fechaUltimaActuacion: '10 de marzo de 2022',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Oscar Humberto Gomez Chuchin',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51465700,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307820170116400",
    fechaProceso: "26 de octubre de 2018",
    fechaUltimaActuacion: "29 de marzo de 2022",
    despacho:
      "juzgado 016 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Nestor Alberto Cristancho Lopez",
=======
    llaveProceso: '11001400307820170116400',
    fechaProceso: '26 de octubre de 2018',
    fechaUltimaActuacion: '29 de marzo de 2022',
    despacho: 'juzgado 016 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Nestor Alberto Cristancho Lopez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 86157021,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "25126408900220180004800",
    fechaProceso: "2 de febrero de 2018",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 002 promiscuo municipal de cajicá ",
    departamento: "Cundinamarca",
    sujetosProcesales: "Juan Camilo Chingate Penagos        ",
=======
    llaveProceso: '25126408900220180004800',
    fechaProceso: '2 de febrero de 2018',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 002 promiscuo municipal de cajicá ',
    departamento: 'Cundinamarca',
    sujetosProcesales: 'Juan Camilo Chingate Penagos        ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51107470,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301420180040600",
    fechaProceso: "9 de abril de 2018",
    fechaUltimaActuacion: "26 de abril de 2018",
    despacho: "juzgado 014 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jorge Armando Perez Jimenez",
=======
    llaveProceso: '11001400301420180040600',
    fechaProceso: '9 de abril de 2018',
    fechaUltimaActuacion: '26 de abril de 2018',
    despacho: 'juzgado 014 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jorge Armando Perez Jimenez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50989890,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305920180009000",
    fechaProceso: "6 de febrero de 2018",
    fechaUltimaActuacion: "25 de marzo de 2022",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Maria Marin De Orozco",
=======
    llaveProceso: '11001400305920180009000',
    fechaProceso: '6 de febrero de 2018',
    fechaUltimaActuacion: '25 de marzo de 2022',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Maria Marin De Orozco',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50990920,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303720180011100",
    fechaProceso: "6 de febrero de 2018",
    fechaUltimaActuacion: "2 de febrero de 2023",
    despacho:
      "juzgado 008 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sandra Patricia Beltran  Oviedo",
=======
    llaveProceso: '11001400303720180011100',
    fechaProceso: '6 de febrero de 2018',
    fechaUltimaActuacion: '2 de febrero de 2023',
    despacho: 'juzgado 008 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sandra Patricia Beltran  Oviedo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50990370,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305220180011700",
    fechaProceso: "6 de febrero de 2018",
    fechaUltimaActuacion: "13 de abril de 2023",
    despacho:
      "juzgado 017 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Darley Julied Paez",
=======
    llaveProceso: '11001400305220180011700',
    fechaProceso: '6 de febrero de 2018',
    fechaUltimaActuacion: '13 de abril de 2023',
    despacho: 'juzgado 017 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Darley Julied Paez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51149410,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300420180047500",
    fechaProceso: "26 de abril de 2018",
    fechaUltimaActuacion: "27 de febrero de 2023",
    despacho:
      "juzgado 007 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Adolfo Leon Daza Fernandez",
=======
    llaveProceso: '11001400300420180047500',
    fechaProceso: '26 de abril de 2018',
    fechaUltimaActuacion: '27 de febrero de 2023',
    despacho: 'juzgado 007 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Adolfo Leon Daza Fernandez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 121826111,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "25307400300320210053900",
    fechaProceso: "27 de octubre de 2021",
    fechaUltimaActuacion: "10 de marzo de 2023",
    despacho: "juzgado 003 civil municipal de girardot ",
    departamento: "Cundinamarca",
    sujetosProcesales: "Adriana  Vanegas Peña       ",
=======
    llaveProceso: '25307400300320210053900',
    fechaProceso: '27 de octubre de 2021',
    fechaUltimaActuacion: '10 de marzo de 2023',
    despacho: 'juzgado 003 civil municipal de girardot ',
    departamento: 'Cundinamarca',
    sujetosProcesales: 'Adriana  Vanegas Peña       ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51154840,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300620180045400",
    fechaProceso: "30 de abril de 2018",
    fechaUltimaActuacion: "10 de abril de 2023",
    despacho:
      "juzgado 017 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Smartitech   Demandado: Edisson   ",
=======
    llaveProceso: '11001400300620180045400',
    fechaProceso: '30 de abril de 2018',
    fechaUltimaActuacion: '10 de abril de 2023',
    despacho: 'juzgado 017 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Smartitech   Demandado: Edisson   ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81649171,
    idConexion: 320,
<<<<<<< HEAD
    llaveProceso: "11001400300620180045400",
    fechaProceso: "no hay contenido",
    fechaUltimaActuacion: "no hay contenido",
    despacho: "juzgado 006 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "missing demandado",
=======
    llaveProceso: '11001400300620180045400',
    fechaProceso: 'no hay contenido',
    fechaUltimaActuacion: 'no hay contenido',
    despacho: 'juzgado 006 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'missing demandado',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 86958040,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001418901620190108500",
    fechaProceso: "12 de marzo de 2021",
    fechaUltimaActuacion: "28 de febrero de 2023",
    despacho:
      "juzgado 002 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Angelica Nathaly Rozo Franco",
=======
    llaveProceso: '11001418901620190108500',
    fechaProceso: '12 de marzo de 2021',
    fechaUltimaActuacion: '28 de febrero de 2023',
    despacho: 'juzgado 002 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Angelica Nathaly Rozo Franco',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51918470,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400308120180051400",
    fechaProceso: "17 de mayo de 2019",
    fechaUltimaActuacion: "14 de marzo de 2023",
    despacho:
      "juzgado 001 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Maria Clara Reyes Reyes",
=======
    llaveProceso: '11001400308120180051400',
    fechaProceso: '17 de mayo de 2019',
    fechaUltimaActuacion: '14 de marzo de 2023',
    despacho: 'juzgado 001 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Maria Clara Reyes Reyes',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 89137980,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400305120180085000",
    fechaProceso: "16 de julio de 2018",
    fechaUltimaActuacion: "25 de enero de 2023",
    despacho:
      "juzgado 004 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sandra Liliana Cruz Beltran",
=======
    llaveProceso: '11001400305120180085000',
    fechaProceso: '16 de julio de 2018',
    fechaUltimaActuacion: '25 de enero de 2023',
    despacho: 'juzgado 004 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sandra Liliana Cruz Beltran',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51306830,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303620180081800",
    fechaProceso: "13 de julio de 2018",
    fechaUltimaActuacion: "27 de marzo de 2023",
    despacho:
      "juzgado 015 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Adriana Lucia Mora Plata",
=======
    llaveProceso: '11001400303620180081800',
    fechaProceso: '13 de julio de 2018',
    fechaUltimaActuacion: '27 de marzo de 2023',
    despacho: 'juzgado 015 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Adriana Lucia Mora Plata',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51341610,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301420180092900",
    fechaProceso: "1 de agosto de 2018",
    fechaUltimaActuacion: "15 de marzo de 2023",
    despacho:
      "juzgado 009 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Rodrigo Garcia Quintero",
=======
    llaveProceso: '11001400301420180092900',
    fechaProceso: '1 de agosto de 2018',
    fechaUltimaActuacion: '15 de marzo de 2023',
    despacho: 'juzgado 009 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Rodrigo Garcia Quintero',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 52160520,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400308220180096400",
    fechaProceso: "15 de febrero de 2019",
    fechaUltimaActuacion: "24 de marzo de 2022",
    despacho:
      "juzgado 014 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jose Ramon Estrada Castillo",
=======
    llaveProceso: '11001400308220180096400',
    fechaProceso: '15 de febrero de 2019',
    fechaUltimaActuacion: '24 de marzo de 2022',
    despacho: 'juzgado 014 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jose Ramon Estrada Castillo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112967583,
    idConexion: 197,
<<<<<<< HEAD
    llaveProceso: "11001400308220180096400",
    fechaProceso: "11 de mayo de 2022",
    fechaUltimaActuacion: "25 de mayo de 2022",
    despacho: "juzgado 001 civil municipal de envigado ",
    departamento: "Antioquia",
    sujetosProcesales: "Jose Ramon Estrada Castillo",
=======
    llaveProceso: '11001400308220180096400',
    fechaProceso: '11 de mayo de 2022',
    fechaUltimaActuacion: '25 de mayo de 2022',
    despacho: 'juzgado 001 civil municipal de envigado ',
    departamento: 'Antioquia',
    sujetosProcesales: 'Jose Ramon Estrada Castillo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 71079290,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001418901220180064400",
    fechaProceso: "15 de noviembre de 2019",
    fechaUltimaActuacion: "28 de abril de 2023",
    despacho:
      "juzgado 017 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Bibiana Patricia Esguerra Vasquez",
=======
    llaveProceso: '11001418901220180064400',
    fechaProceso: '15 de noviembre de 2019',
    fechaUltimaActuacion: '28 de abril de 2023',
    despacho: 'juzgado 017 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Bibiana Patricia Esguerra Vasquez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 64673240,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001418901220180095100",
    fechaProceso: "28 de junio de 2019",
    fechaUltimaActuacion: "2 de mayo de 2022",
    despacho:
      "juzgado 011 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Rosalia Charry Sarmiento",
=======
    llaveProceso: '11001418901220180095100',
    fechaProceso: '28 de junio de 2019',
    fechaUltimaActuacion: '2 de mayo de 2022',
    despacho: 'juzgado 011 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Rosalia Charry Sarmiento',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50780430,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400300220170100200",
    fechaProceso: "17 de octubre de 2017",
    fechaUltimaActuacion: "14 de marzo de 2023",
    despacho:
      "juzgado 013 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Jogli Joaquin Otero Vargas",
=======
    llaveProceso: '11001400300220170100200',
    fechaProceso: '17 de octubre de 2017',
    fechaUltimaActuacion: '14 de marzo de 2023',
    despacho: 'juzgado 013 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Jogli Joaquin Otero Vargas',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 65701460,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400306320170129000",
    fechaProceso: "13 de diciembre de 2017",
    fechaUltimaActuacion: "16 de marzo de 2023",
    despacho:
      "juzgado 019 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Diana Patricia Barreto Osma",
=======
    llaveProceso: '11001400306320170129000',
    fechaProceso: '13 de diciembre de 2017',
    fechaUltimaActuacion: '16 de marzo de 2023',
    despacho: 'juzgado 019 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Diana Patricia Barreto Osma',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50517510,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302920170055700",
    fechaProceso: "20 de junio de 2017",
    fechaUltimaActuacion: "22 de febrero de 2018",
    despacho: "juzgado 029 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Rafael Ernesto Cadena Parga",
=======
    llaveProceso: '11001400302920170055700',
    fechaProceso: '20 de junio de 2017',
    fechaUltimaActuacion: '22 de febrero de 2018',
    despacho: 'juzgado 029 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Rafael Ernesto Cadena Parga',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 128433271,
    idConexion: 256,
<<<<<<< HEAD
    llaveProceso: "11001400307920170114200",
    fechaProceso: "2 de noviembre de 2018",
    fechaUltimaActuacion: "8 de marzo de 2023",
    despacho: "juzgado 040 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Piedad Maritza Olga Rocio Prieto ",
=======
    llaveProceso: '11001400307920170114200',
    fechaProceso: '2 de noviembre de 2018',
    fechaUltimaActuacion: '8 de marzo de 2023',
    despacho: 'juzgado 040 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Piedad Maritza Olga Rocio Prieto ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 45029250,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302020100050100",
    fechaProceso: "19 de abril de 2010",
    fechaUltimaActuacion: "2 de abril de 2014",
    despacho: "juzgado 020 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Hector Julian Sanchez Ramirez      ",
=======
    llaveProceso: '11001400302020100050100',
    fechaProceso: '19 de abril de 2010',
    fechaUltimaActuacion: '2 de abril de 2014',
    despacho: 'juzgado 020 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Hector Julian Sanchez Ramirez      ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 113353750,
    idConexion: 260,
<<<<<<< HEAD
    llaveProceso: "11001400306420180102900",
    fechaProceso: "28 de agosto de 2018",
    fechaUltimaActuacion: "7 de febrero de 2023",
    despacho: "juzgado 064 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sonia Marcela Molina Qimbayo",
=======
    llaveProceso: '11001400306420180102900',
    fechaProceso: '28 de agosto de 2018',
    fechaUltimaActuacion: '7 de febrero de 2023',
    despacho: 'juzgado 064 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sonia Marcela Molina Qimbayo',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50242270,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400301620170015700",
    fechaProceso: "8 de febrero de 2017",
    fechaUltimaActuacion: "11 de agosto de 2022",
    despacho:
      "juzgado 002 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Wilson Gonzalez",
=======
    llaveProceso: '11001400301620170015700',
    fechaProceso: '8 de febrero de 2017',
    fechaUltimaActuacion: '11 de agosto de 2022',
    despacho: 'juzgado 002 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Wilson Gonzalez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50508570,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303720170083900",
    fechaProceso: "15 de junio de 2017",
    fechaUltimaActuacion: "1 de febrero de 2019",
    despacho:
      "juzgado 014 civil municipal de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Javier Romero Reyes",
=======
    llaveProceso: '11001400303720170083900',
    fechaProceso: '15 de junio de 2017',
    fechaUltimaActuacion: '1 de febrero de 2019',
    despacho: 'juzgado 014 civil municipal de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Javier Romero Reyes',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50688820,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400303620170084100",
    fechaProceso: "6 de septiembre de 2017",
    fechaUltimaActuacion: "29 de septiembre de 2018",
    despacho: "juzgado 036 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Gabriel Eduardo Mejia Ladino      ",
=======
    llaveProceso: '11001400303620170084100',
    fechaProceso: '6 de septiembre de 2017',
    fechaUltimaActuacion: '29 de septiembre de 2018',
    despacho: 'juzgado 036 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Gabriel Eduardo Mejia Ladino      ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51315290,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001310303720170045300",
    fechaProceso: "18 de julio de 2018",
    fechaUltimaActuacion: "15 de enero de 2019",
    despacho: "juzgado 007 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Diana Vanessa Naranjo Hernandez",
=======
    llaveProceso: '11001310303720170045300',
    fechaProceso: '18 de julio de 2018',
    fechaUltimaActuacion: '15 de enero de 2019',
    despacho: 'juzgado 007 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Diana Vanessa Naranjo Hernandez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 57718874,
    idConexion: 310,
<<<<<<< HEAD
    llaveProceso: "11001310303720170045300",
    fechaProceso: "11 de septiembre de 2017",
    fechaUltimaActuacion: "20 de septiembre de 2019",
    despacho:
      "juzgado 003 civil del circuito de ejecución de sentencias de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Diana Vanessa Naranjo Hernandez",
=======
    llaveProceso: '11001310303720170045300',
    fechaProceso: '11 de septiembre de 2017',
    fechaUltimaActuacion: '20 de septiembre de 2019',
    despacho: 'juzgado 003 civil del circuito de ejecución de sentencias de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Diana Vanessa Naranjo Hernandez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51500810,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307620180005200",
    fechaProceso: "23 de noviembre de 2018",
    fechaUltimaActuacion: "23 de noviembre de 2018",
    despacho: "juzgado 076 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Doris Garzon Talero  Demandado:   ",
=======
    llaveProceso: '11001400307620180005200',
    fechaProceso: '23 de noviembre de 2018',
    fechaUltimaActuacion: '23 de noviembre de 2018',
    despacho: 'juzgado 076 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Doris Garzon Talero  Demandado:   ',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 9877803,
    idConexion: 261,
<<<<<<< HEAD
    llaveProceso: "11001400304520170116400",
    fechaProceso: "20 de septiembre de 2017",
    fechaUltimaActuacion: "23 de enero de 2023",
    despacho: "juzgado 045 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Nidia Jacqueline Riveros Araque",
=======
    llaveProceso: '11001400304520170116400',
    fechaProceso: '20 de septiembre de 2017',
    fechaUltimaActuacion: '23 de enero de 2023',
    despacho: 'juzgado 045 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Nidia Jacqueline Riveros Araque',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50801260,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400307320170141100",
    fechaProceso: "25 de octubre de 2017",
    fechaUltimaActuacion: "6 de noviembre de 2020",
    despacho: "juzgado 073 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Fernando Gonzalez Tellez",
=======
    llaveProceso: '11001400307320170141100',
    fechaProceso: '25 de octubre de 2017',
    fechaUltimaActuacion: '6 de noviembre de 2020',
    despacho: 'juzgado 073 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Fernando Gonzalez Tellez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50846930,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302620170129300",
    fechaProceso: "15 de noviembre de 2017",
    fechaUltimaActuacion: "2 de octubre de 2018",
    despacho: "juzgado 026 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Sandra Milena Barreto Bermudez",
=======
    llaveProceso: '11001400302620170129300',
    fechaProceso: '15 de noviembre de 2017',
    fechaUltimaActuacion: '2 de octubre de 2018',
    despacho: 'juzgado 026 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Sandra Milena Barreto Bermudez',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51002530,
    idConexion: 259,
<<<<<<< HEAD
    llaveProceso: "11001400302420180014300",
    fechaProceso: "12 de febrero de 2018",
    fechaUltimaActuacion: "27 de septiembre de 2019",
    despacho: "juzgado 024 civil municipal de bogotá ",
    departamento: "Bogotá",
    sujetosProcesales: "Martha Andrea Mora Collazos",
=======
    llaveProceso: '11001400302420180014300',
    fechaProceso: '12 de febrero de 2018',
    fechaUltimaActuacion: '27 de septiembre de 2019',
    despacho: 'juzgado 024 civil municipal de bogotá ',
    departamento: 'Bogotá',
    sujetosProcesales: 'Martha Andrea Mora Collazos',
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    esPrivado: false,
    cantFilas: -1,
  },
];
//# sourceMappingURL=app.js.map
