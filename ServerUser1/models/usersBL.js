const UsersModel = require('./usersModel');

const getUsers = () =>
{
    return new Promise((resolve, reject) =>
    {
        UsersModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        });
    })
}

const getUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        UsersModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        });
    })
}


const addUser = (obj) =>
{
    return new Promise((resolve, reject) =>
    {

        let user = new UsersModel({
            full_name : obj.full_name,
            email : obj.email,
            street: obj.street,
            city: obj.city,
            zipcode: obj.zipcode,
            todos: obj.todos,
            posts: obj.posts

        });

        user.save( function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Created");
            }
        });
    })
}




const updateUser = (id,obj) =>
{
    return new Promise((resolve, reject) =>
    {

        UsersModel.findByIdAndUpdate(id, {
            full_name : obj.full_name,
            email : obj.email,
            street: obj.street,
            city: obj.city,
            zipcode: obj.zipcode,
            todos: obj.todos,
            posts: obj.posts
        }, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Updated");
            }
        })

    })
}


const deleteUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {

      UsersModel.findByIdAndDelete(id, function(err)
      {
          if(err)
          {
              reject(err)
          }
          else
          {
              resolve('Deleted');
          }
      })
    })
}


module.exports =  {getUsers, getUser, addUser, deleteUser, updateUser};