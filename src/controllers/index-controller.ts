import express from 'express';
import getCustomers from '../models/getCustomers'

const Index = (req : express.Request, res : express.Response )=>{

    const value = getCustomers();    
    res.send(value);
}

export default Index;
