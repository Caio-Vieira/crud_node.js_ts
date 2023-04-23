
import UserModel from '../models/user'
import { IUserDto } from '../modules/dtos/userDto'

class UserRepository {

  private userModel: any
  constructor() {
    this.userModel = UserModel
 }

  async findByEmail(email: string) {
    try {
      const foundUser = await this.userModel.findOne({ email });
      return foundUser
    } catch (error) {
      throw error
    }
 }

  async findAll() {
    try {
      const userList = await this.userModel.find({});
      return userList
    } catch (error) {
      throw error
    }
  }

  async save(newuser:  IUserDto) {
    try {
      const createdUser = await this.userModel.create(newuser)
      return createdUser;
    } catch (error) {
      throw error
    }
  }
  async remove(userId:string) {
    try {
     return await this.userModel.deleteOne({_id:userId})
    } catch (error) {
      throw error
    }
  }
  async update( data:IUserDto ) {
    try {
     return await this.userModel.updateOne(data)
    } catch (error) {
      throw error
    }
  }
}

export { UserRepository }
