/* eslint-disable prettier/prettier */

import { Expose} from "class-transformer";

export abstract class Base {
    @Expose()
    id: number;
    @Expose()
    createdAt: Date;
    @Expose()
    updatedAt: Date;
    @Expose()
    deletedAt: Date;

}