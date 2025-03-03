import { Injectable } from '@nestjs/common';
import { CreateLevelInput, UpdateLevelInput } from './dto/inputs';
import { Level } from './entities/level.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LevelsService {

  constructor(
    @InjectRepository(Level)
    private readonly itemsRepository: Repository<Level>,
  ) {}

  async create(createLevelInput: CreateLevelInput): Promise<Level> {
    const newItem = this.itemsRepository.create(createLevelInput);
    return await this.itemsRepository.save(newItem);
  }

  findAll() {
    return 'Hola desde FindAll';
  }

  findOne(id: number) {
    return `This action returns a #${id} level`;
  }

  update(id: number, updateLevelInput: UpdateLevelInput) {
    return `This action updates a #${id} level`;
  }

  remove(id: number) {
    return `This action removes a #${id} level`;
  }
}
