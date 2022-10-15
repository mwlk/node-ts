import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const _router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`)
      .then((routerModule) => {
        console.log(`loading route ..... ${cleanName}`);
        _router.use(`/${cleanName}`, routerModule._router);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

export { _router };
