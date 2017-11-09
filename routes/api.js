import express from 'express'
const router = express.Router();
import controllers from "../controllers/index";


router.get('/user', (req, res, next) =>
{

    const controller = controllers[ "userController" ];

    controller.getAll( {}, ( err, results ) =>
    {
        res.json( results );
    } );

});

router.get('/user/:id', function(req, res, next)
{
    const controller = controllers[ "userController" ];

    controller.getById( req.params.id, ( err, results ) =>
    {
        res.json( results );
    } );


});

router.get('/role', (req, res, next) =>
{

    const controller = controllers[ "roleController" ];

    controller.getAll( {}, ( err, results ) =>
    {
        res.json( results );
    } );

});

router.get('/role/:id', (req, res, next) =>
{

    const controller = controllers[ "roleController" ];

    controller.getById( req.params.id, ( err, results ) =>
    {
        res.json( results );
    } );

});

router.get('/last/:count', function(req, res, next)
{
    const controller = controllers[ "postElementController" ];

    controller.getLast( req.params.count, ( err, results ) =>
    {
        res.json( results );
        console.log( results );
    } );


});

router.get('/best/:count', function(req, res, next)
{
    const controller = controllers[ "postElementController" ];

    controller.getBest( req.params.count, ( err, results ) =>
    {
        res.json( results );
        console.log( results );
    } );


});



module.exports = router;
