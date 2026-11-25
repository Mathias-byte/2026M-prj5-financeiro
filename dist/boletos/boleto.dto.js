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
exports.UpdateBoletoDto = exports.CreateBoletoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBoletoDto {
    cobrancaId;
    codigoBarras;
    linhaDigitavel;
    urlPdf;
    status;
}
exports.CreateBoletoDto = CreateBoletoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(4294967295),
    __metadata("design:type", Number)
], CreateBoletoDto.prototype, "cobrancaId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "DEMONSTRACAO-001" }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateBoletoDto.prototype, "codigoBarras", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "DEMO-001" }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateBoletoDto.prototype, "linhaDigitavel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "https://example.com/boleto.pdf" }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateBoletoDto.prototype, "urlPdf", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(-2147483648),
    (0, class_validator_1.Max)(2147483647),
    __metadata("design:type", Number)
], CreateBoletoDto.prototype, "status", void 0);
class UpdateBoletoDto extends (0, swagger_1.PartialType)(CreateBoletoDto, { skipNullProperties: false }) {
}
exports.UpdateBoletoDto = UpdateBoletoDto;
