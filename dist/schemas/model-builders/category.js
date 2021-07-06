"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_builder_1 = require("../model-builder");
exports.default = model_builder_1.ModelBuilder.create('Category', {
    schema: 'dbo',
    sqlName: 'categories',
})
    .index('id', ['id'], { unique: true })
    .column('id', 'number', {
    generated: true,
    type: 'int',
    name: 'id',
})
    .column('categoryName', 'string', {
    type: 'varchar',
    name: 'categoryName',
    length: 15,
    nullable: true,
})
    .column('description', 'string', {
    type: 'longtext',
    name: 'description',
    nullable: true,
})
    .column('picture', 'string', {
    type: 'longblob',
    name: 'picture',
    nullable: true,
})
    .build();
//# sourceMappingURL=category.js.map