import { z } from "zod";

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
