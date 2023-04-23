import  {users}  from '../infra/db/dada'
import {  IUserDto } from '../modules/dtos/userDto';

class UserRepositoryInMemory {

  findByEmail(email:string) {
    return users.find(user => user.email === email);
  }
  save(newUser : IUserDto) {
    try {
      const userSize = users.length
      const lastUser = users[userSize - 1]
      let nextId = lastUser.id
      if(!nextId){
        throw  new Error ('Missing user id')
      }
      users.push({ id: ++nextId, ...newUser })
      return users;
    } catch (error) {
      throw error
    }
  }
}

export { UserRepositoryInMemory };
