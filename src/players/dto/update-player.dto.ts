import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchDto } from './create-player.dto';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {}