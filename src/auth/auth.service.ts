import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { UnauthorizedError } from './errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(
    // private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'E-mail e/ou senha fornecidos estão incorretos.',
    );
  }
}
