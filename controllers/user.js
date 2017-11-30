
import DatabaseController from './database'


function handleSQLErr( err, query )
{
    if ( err )
    {
        console.log( "Query: " + query  );
        console.log( err );
        return;
    }
}

export default
{
    getAll: function ( params, callback )
    {
        const query =  "SELECT user.id, user.name as u_name, role.name as r_name FROM user Inner Join role On user.role = role.id";

        DatabaseController.runQuery( query, function ( err, result )
        {
            handleSQLErr(err, query);
            callback(null, result);
        } );
    },

    getById: function ( id, callback  )
    {
        const query =  "SELECT u.id, u.name, r.name as Role from Gallery.user u Inner Join Gallery.role as r On u.role = r.id where u.id = " + id;

        DatabaseController.runQuery( query, function ( err, result )
        {
            handleSQLErr(err, query);
            callback(null, result[0]);
        } );
    },

    //
    // Create the new post
    //

    createPost: function ( params, callback )
    {
        const query = "Insert into photo_post values ()";

        DatabaseController.runQuery( query, function ( err, result )
            {
                handleSQLErr(err, query);
                callback(null, result);
            }
        );
    },


    getByLogin: function ( login, callback  )
    {
        const query =  "SELECT id, login, mail, password, role " +
            "FROM " +
            "users " +
            "WHERE login = '" + login + "'";

        DatabaseController.runQuery( query, function ( err, rows )
        {
            handleSQLErr(err, query);
            callback( null, rows[0] );
        } );
    },

    getByRole: function ( role, callback )
    {
        let roles =
            {
                admins: 2,
                moders: 1,
                users: 0
            };

        const query =  "SELECT * FROM users WHERE role='" + roles[role] + "'";

        DatabaseController.runQuery( query, function ( err, result, fields )
        {
            handleSQLErr(err, query);
            callback(null, result);
        } );
    },

    updateById: function ( id, params, callback )
    {
        const query =  "UPDATE  users " +
            "SET " +
            "login = '" + params.login        + "'," +

            (    params.password == undefined || params.password == ""
                    ? ""
                    : "password ='" + hashPassword(params.password) + "',"
            ) +

            "mail ='" + params.mail          + "'," +
            "role ='" + params.role           + "'" +
            " WHERE( id='"+ params.id +"' )";

        DatabaseController.runQuery( query, function ( err, result, fields )
        {
            handleSQLErr(err, query);
            callback( null, result );
        } );

    },

    create: function ( params, callback )
    {
        const role = params.role == undefined?"0":params.role;

        //=======================================================

        if( params.login.lenght < 5 || params.password.length < 5
            || params.mail.length < 5 )
        {
            const err = "Invalid user information.";
            callback(  err ,null );

            return;
        }

        const preparedString = "'" + params.login.trim() + "'," +
            "'" + hashPassword(params.password) + "'," +
            "'" + params.mail.trim() + "'," +
            "'" + role + "'";

        const query =  "INSERT INTO users(login,password,mail,role) VALUES( " + preparedString + " )";

        DatabaseController.runQuery( query, function ( err, result )
        {
            handleSQLErr(err, query);
            callback( null, result );
        } );

    },

    delete: function ( id, callback  )
    {
        const query =  "DELETE FROM users WHERE id = " + id;

        DatabaseController.runQuery( query, function ( err, result, fields )
        {
            handleSQLErr(err, query);
            callback(null, result);
        } );

    }
};