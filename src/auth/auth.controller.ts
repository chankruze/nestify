import { Body, Controller, HttpCode, Ip, Post } from '@nestjs/common';
import { Public } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @HttpCode(201)
  signUp(@Body() registerUserDto: RegisterUserDto, @Ip() ip: string) {
    return this.authService.register(registerUserDto, ip);
  }

  @Public()
  @Post('login')
  @HttpCode(200)
  logIn(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
