import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'VENKAT P R',
        email : 'venkat@outlook.com',
        password : bcrypt.hashSync('12345678',12),
        isAdmin : true
    },
    {
        name : 'Srirangan K',
        email : 'srirangan@outlook.com',
        password : bcrypt.hashSync('12345678',12),
        isAdmin : true
    },
    {
        name : 'Admin-Envoi',
        email : 'admin@envoi.com',
        password : bcrypt.hashSync('admin@envoi',12),
        isAdmin : true
    },
    {
        name : 'envoiuser',
        email : 'envoiuser@gmail.com',
        password : bcrypt.hashSync('user@envoi',12),
        isAdmin : false
    }
    
]
export default Users