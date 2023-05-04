import * as fs from "fs/promises";
import rows from "./rows.fetchProcesos.json" assert { type: "json" };
const missingProcesos = [];
const nonMissingProcesos = [];
export const getProcesosfromRadicados = rows.map((radicado) => {
  return radicado.procesos;
});
export const polishProcesos = getProcesosfromRadicados.map((procesos, index, array) => {
  if (array.length === 0) {
    missingProcesos.push(index);
    fs.writeFile("src/middleware/missingProcesos.fixProcesos.json", JSON.stringify(missingProcesos));
    return console.log(JSON.stringify(missingProcesos));
  }
  return procesos.forEach((proceso) => {
    nonMissingProcesos.push(proceso);
    fs.writeFile("src/middleware/cleanProcesos.fixProcesos.json", JSON.stringify(nonMissingProcesos));
  });
});
