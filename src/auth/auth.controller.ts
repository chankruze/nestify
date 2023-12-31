import { Body, Controller, Post } from '@nestjs/common';
import { Public } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  signUp(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Public()
  @Post('login')
  logIn(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
