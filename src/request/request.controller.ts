import { Controller, Delete, Get, Patch } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  //get all requests
  @Get('')
  async requests() {
    return await this.requestService.requests();
  }

  //get single request
  @Get(':id')
  async request(id: string) {
    return await this.requestService.request({ id });
  }
  //update single request
  @Patch(':id')
  async updateRequest(id: string, data: any) {
    return await this.requestService.updateRequest({ id }, data);
  }
  //delete single request
  @Delete(':id')
  async deleteRequest(id: string) {
    return await this.requestService.deleteRequest({ id });
  }
  //get all requests from a single user
  @Get('user/:id')
  async requestsFromUser(id: string) {
    return await this.requestService.requestsFromUser({ id });
  }
}
