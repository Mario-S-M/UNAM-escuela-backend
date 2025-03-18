import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<Level[]> {
    return await this.itemsRepository.find();
  }

  async findOne(id: string): Promise<Level> {
    const level = await this.itemsRepository.findOneBy({id});
    if (!level) throw new NotFoundException(`Nivel no encontrado`);

    return level;
  }

  async update(id: string, updateLevelInput: UpdateLevelInput): Promise<Level> {
    const level = await this.findOne(id);
    if (updateLevelInput.name) level.name = updateLevelInput.name;
    if (updateLevelInput.description) level.description = updateLevelInput.description;
    return await this.itemsRepository.save(level);
  }

  async remove(id: string) {
    const level = await this.findOne(id);
    await this.itemsRepository.remove(level);
    return { ...level, id };
  }
}
