import express from 'express';
import index_router  from  './routes/index-routes';
const app = express();


app.use(index_router);

app.listen( 3000 , ()=>{
    console.log('running....');
});
