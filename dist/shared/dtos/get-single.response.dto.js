"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleResponseDTO = void 0;
const class_validator_1 = require("class-validator");
class GetSingleResponseDTO {
    /**
     * Page
     * @param item Item
     * @param meta Metadata
     */
    constructor(item, meta) {
        this.data = item;
        // Call method to mount the meta datas
        this.mountMeta(meta);
    }
    mountMeta(meta) {
        this.meta = meta;
    }
}
__decorate([
    class_validator_1.IsObject(),
    __metadata("design:type", Object)
], GetSingleResponseDTO.prototype, "meta", void 0);
exports.GetSingleResponseDTO = GetSingleResponseDTO;
//# sourceMappingURL=get-single.response.dto.js.map