import { Router  } from "express";
import Index from "../controllers/index-controller";

const index_router = Router();

index_router.get('/',  Index );


export default index_router;
