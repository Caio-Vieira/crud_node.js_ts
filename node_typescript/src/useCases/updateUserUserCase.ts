import {IUserDto} from '../modules/dtos/userDto'
import { UserRepository } from '../repositories/userRepository';
import { UserRepositoryInMemory} from '../repositories/userRepositoryInMemory';

class UpdateUserUseCase {

    private userRepository: any
    constructor() {
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.userRepository =  new UserRepositoryInMemory()
      } else{
        this.userRepository =  new UserRepository()
      }
    }
    
  async run(data: IUserDto) {
    try {
       const updatedUser = await this.userRepository.update(data);
       return updatedUser
    } catch (error: any ) {
      throw error
    }
  }
}
export {UpdateUserUseCase};

