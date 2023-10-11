const UsersModel = require('../models/users.js');

const getAllUsers = async(req, res) => {
  // jika ingin mengambil data dari DB usahakan pakai try-catch agar dapat menghandle error 
  try {
    const [data] = await  UsersModel.getAllUsers(); // karena pemanggilan data ke DB itu asyncronus
    res.json({
      message: 'GET all users success',
      data: data
    });  
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    })
  }
  
}

const createNewUser = async (req, res) => {
  const {body} = req;

  if(!body.name || !body.email || !body.address){
    return res.status(400).json({
      message: "Anda mengirim data yang salah",
      data: null,
    })
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: 'CREATE new user success',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    })
  }
  
}

const updateUser = async (req, res) => {
  const {idUser} = req.params;
  const {body} = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "Update user success",
      data: {
        id: idUser,
        ...body
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    })
  }
}

const deleteUser = async (req, res) => {
  const {idUser} = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "DELETE user success",
      data: null
    })
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    })
  }
  
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}