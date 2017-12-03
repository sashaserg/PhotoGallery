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
    },
    getBest: function ( count, callback )
    {
        const query =  "SELECT pp.id, pp.user_id, pp.date, pp.pic_url, pp.rating, u.avatar_url, u.nickname" +
            " FROM Gallery.photo_post as pp join Gallery.user as u on pp.user_id = u.id Order by rating desc limit " + count;

        DatabaseController.runQuery( query, function ( err, result )
        {
            handleSQLErr(err, query);
            callback(null, result);
        } );

    },
    getCommentByPostId: function ( id, callback )
    {
      const query = "SELECT com.id_post, com.text, us.name, com.id_user FROM Gallery.comment com join Gallery.user us on com.id_user = us.id where com.id_post =" + id;

      DatabaseController.runQuery( query, function ( err, result )
          {

              handleSQLErr( err, query );
              callback( null, result );
          }
      );
    }


}