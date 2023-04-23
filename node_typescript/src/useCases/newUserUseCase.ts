import {  IUserDto } from '../modules/dtos/userDto';
import { UserRepository } from '../repositories/userRepository';
import { UserRepositoryInMemory } from '../repositories/userRepositoryInMemory';

class NewUserUseCase {

    private userRepository: any
    constructor(){
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.userRepository =  new UserRepositoryInMemory()
      } else{
        this.userRepository =  new UserRepository()

      }
    }
    
  async  run ({name, email, bank, balance}: IUserDto) {

    try {
      const foundUser = await this.userRepository.findByEmail(email);
      if (foundUser) {
        console.log('This email already exists')
        throw ('This email already exists')
      }
      return await this.userRepository.save({ name, email, bank, balance })
    } catch (error: any ) {
      throw error
    }
  }
}
export { NewUserUseCase }
