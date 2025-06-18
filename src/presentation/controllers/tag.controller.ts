import { Request, RequestHandler, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";

import { PaginationTagDTO } from "../dtos/tags/pagination-tag";
import { CreateTagDto } from "../dtos/tags/create-tag.dto";
import { UpdateTagDTO } from "../dtos/tags/update-tag.dto";
import { TagService } from "../../application/services/tags.service";
import { Uuid } from "../../shared/adapters.ts/uuid";

export class TagController {
  //DI ?
  constructor(private readonly tagService: TagService) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public createTag: RequestHandler = async (req: Request, res: Response) => {
    try {
      const user = req.body.user;

      const dto = CreateTagDto.create(req.body);

      const { tag } = await this.tagService.createTag(dto, user.id);

      return res.status(201).json({
        success: true,
        message: "Tag registrada con éxito",
        data: tag,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getTags = async (req: Request, res: Response) => {
    try {
      const dto = PaginationTagDTO.createDTO(req.query);

      const user = req.body.user;

      const tags = await this.tagService.getTags(dto.page, dto.limit, user);

      const totalItems = tags.length ?? 0;
      const totalPages = Math.ceil(totalItems / dto.limit + 1) ?? 0;

      return res.status(200).json({
        success: true,
        message: `categorias registradas del usuario ${user.email}`,
        ...dto,
        data: tags ?? [], //Por si acaso xd
        totalItems,
        totalPages,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public updateTagById = async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const id = req.params["id"];

      const user = req.body.user;

      const updateTagDTO = UpdateTagDTO.createDTO(data);

      const tag = await this.tagService.updateTagById(id, updateTagDTO, user);
      return res.status(200).json({
        success: true,
        message: "tag actualizada",
        data: tag, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public deleteTagById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];
      const user = req.body.user;

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing tag ID");
      }

      await this.tagService.deleteTagById(id, user);
      return res.status(200).json({
        success: true,
        message: "Tag eliminada",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getTagById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing tag ID");
      }

      const user = req.body.user;

      const tag = await this.tagService.getTagById(id, user);
      return res.status(200).json({
        success: true,
        message: "Tag encontrada",
        data: tag, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
