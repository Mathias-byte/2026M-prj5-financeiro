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
exports.UpdateCobrancaDto = exports.CreateCobrancaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateCobrancaDto {
    imovelId;
    descricao;
    competencia;
    valor;
    vencimento;
    situacao;
    status;
}
exports.CreateCobrancaDto = CreateCobrancaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(4294967295),
    __metadata("design:type", Number)
], CreateCobrancaDto.prototype, "imovelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Taxa condominial" }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateCobrancaDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2026-10-01" }),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/),
    (0, class_validator_1.IsDateString)({ strict: true }),
    __metadata("design:type", String)
], CreateCobrancaDto.prototype, "competencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0.01),
    (0, class_validator_1.Max)(99999999.99),
    __metadata("design:type", Number)
], CreateCobrancaDto.prototype, "valor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2026-10-10" }),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/),
    (0, class_validator_1.IsDateString)({ strict: true }),
    __metadata("design:type", String)
], CreateCobrancaDto.prototype, "vencimento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "PENDENTE", enum: client_1.SituacaoCobranca }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsEnum)(client_1.SituacaoCobranca),
    __metadata("design:type", String)
], CreateCobrancaDto.prototype, "situacao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(-2147483648),
    (0, class_validator_1.Max)(2147483647),
    __metadata("design:type", Number)
], CreateCobrancaDto.prototype, "status", void 0);
class UpdateCobrancaDto extends (0, swagger_1.PartialType)(CreateCobrancaDto, { skipNullProperties: false }) {
}
exports.UpdateCobrancaDto = UpdateCobrancaDto;
