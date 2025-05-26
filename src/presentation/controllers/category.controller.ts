import { Request, RequestHandler, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateCategoryDto } from "../dtos/category/create-category.dto";
import { CategoryService } from "../services/category.service";

import { Uuid } from "../../config/uuid";
import { UpdateCategoryDTO } from "../dtos/category/update-category.dto";
import { PaginationCategoryDTO } from "../dtos/category/pagination-category";

export class CategoryController {
  //DI ?
  constructor(private readonly categoryService: CategoryService) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public createCategory: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    try {
      const user = req.body.user;

      const dto = CreateCategoryDto.create(req.body);

      const { category } = await this.categoryService.createCategory(dto, user);

      return res.status(201).json({
        success: true,
        message: "Categoria registrada con éxito",
        data: category,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getCategoriesById = async (req: Request, res: Response) => {
    try {
      const dto = PaginationCategoryDTO.createDTO(req.query);

      const user = req.body.user;

      const categories = await this.categoryService.getCategoriesById(
        dto.page,
        dto.limit,
        user
      );

      return res.status(200).json({
        success: true,
        message: `categorias registradas del usuario ${user.email}`,
        ...dto,
        data: categories ?? [], //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public updateCategoryById = async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const id = req.params["id"];

      const user = req.body.user;

      const updateCategoryDTO = UpdateCategoryDTO.createDTO(data);

      console.log({ updateCategoryDTO });

      const category = await this.categoryService.updateCategoryById(
        id,
        updateCategoryDTO,
        user
      );
      return res.status(200).json({
        success: true,
        message: "Categoria actualizada",
        data: category, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public deleteCategoryrById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];
      const user = req.body.user;

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing category ID");
      }

      await this.categoryService.deleteCategoryById(id, user);
      return res.status(200).json({
        success: true,
        message: "Categoria eliminada",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getCategoryById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing category ID");
      }

      const user = req.body.user;

      const category = await this.categoryService.getCategoryById(id, user);
      return res.status(200).json({
        success: true,
        message: "Categoria encontrada",
        data: category, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
