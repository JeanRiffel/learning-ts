import express from 'express';

const Index = (req : express.Request, res : express.Response )=>{
    res.send('hi');
}

export default Index;
