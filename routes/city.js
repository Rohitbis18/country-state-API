import express from 'express';
const router = express.Router();

    


router.get('/', (req, res) => {
    console.log(city);

    res.send(city);
});

export default router;