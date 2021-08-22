import {
  Controller,
  Get,
  Response,
  HttpStatus,
  Param,
  Body,
  Post,
  Request,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('/')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Get()
  public async getAllData(@Response() res) {
    const todos = await this.apiService.findAll();
    return res.status(HttpStatus.OK).json(todos);
  }
}
