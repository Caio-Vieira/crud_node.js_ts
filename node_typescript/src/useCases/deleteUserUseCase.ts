import { UserRepository } from '../repositories/userRepository';
import { UserRepositoryInMemory} from '../repositories/userRepositoryInMemory';

class DeleteUserUseCase {

    private userRepository: any
    constructor() {
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.userRepository =  new UserRepositoryInMemory()
      } else{
        this.userRepository =  new UserRepository()
      }
    }
    
  async run(userId: string) {
    try {
      await this.userRepository.remove(userId);
    } catch (error: any ) {
      throw error
    }
  }
}
export {DeleteUserUseCase}
