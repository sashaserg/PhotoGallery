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
    getLast: function ( count, callback  )
    {
        const query =  "SELECT pp.id, pp.user_id, pp.date, pp.pic_url, pp.rating, u.avatar_url, u.nickname" +
            " FROM Gallery.photo_post as pp join Gallery.user as u on pp.user_id = u.id Order by date desc limit " + count;

        DatabaseController.runQuery( query, function ( err, result )
        {
            handleSQLErr(err, query);
            callback(null, result);
        } );
    }


}