import { DataBase } from '../models/database'


export default
{
    connectToDatabase: function ()
    {

        if( DataBase.state === 'disconnected')
        {
            DataBase.connect( function ( err )
            {
                if(err)
                    throw err;

                console.log("Connected!");
                return true;
            });
        }

    },

    reconnectToDatabase: function ()
    {
        if( DataBase.state === 'disconnected' )
        {
            return this.connectToDatabase()
        }
        else
        {
            return true;
        }
    },

    checkConnection: function ()
    {
        if( DataBase.state === 'disconnected' )
        {
            return false;
        }
        else
        {
            return true;
        }
    },

    runQuery: function ( query, callback )
    {
        DataBase.query( query, callback );
    }
}