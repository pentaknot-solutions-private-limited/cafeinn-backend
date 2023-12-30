import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.schema';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CommonResponseDto<Category>> {
    try {
      const category = await this.categoryService.create(createCategoryDto);
      return {
        data: category,
        message: 'Category created successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to create category',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get()
  async findAll(): Promise<CommonResponseDto<Category[]>> {
    try {
      const categories = await this.categoryService.findAll();
      return {
        data: categories,
        message: 'Categories fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch categories',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Category | null>> {
    try {
      const category = await this.categoryService.findOne(id);
      if (!category) {
        return {
          data: null,
          message: 'Category not found',
          status: 'error',
          error: 'Category not found',
        };
      }
      return {
        data: category,
        message: 'Category fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch category',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<CommonResponseDto<Category | null>> {
    try {
      const category = await this.categoryService.update(id, updateCategoryDto);
      if (!category) {
        return {
          data: null,
          message: 'Category not found',
          status: 'error',
          error: 'Category not found',
        };
      }
      return {
        data: category,
        message: 'Category updated successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to update category',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Category | null>> {
    try {
      const category = await this.categoryService.delete(id);
      if (!category) {
        return {
          data: null,
          message: 'Category not found',
          status: 'error',
          error: 'Category not found',
        };
      }
      return {
        data: category,
        message: 'Category deleted successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to delete category',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }
}
