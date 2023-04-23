import { UserRepository } from '../repositories/userRepository';
import { UserRepositoryInMemory} from '../repositories/userRepositoryInMemory';

class ShowUserUseCase {

    private userRepository: any
    constructor(){
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.userRepository =  new UserRepositoryInMemory()
      } else{
        this.userRepository =  new UserRepository()
      }
    }
    
  async run() {
    try {
      const userList = await this.userRepository.findAll();
      return userList
    } catch (error: any ) {
      throw error
    }
  }
}
export {ShowUserUseCase}

