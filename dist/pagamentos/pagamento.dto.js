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
exports.UpdatePagamentoDto = exports.CreatePagamentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreatePagamentoDto {
    cobrancaId;
    valorPago;
    dataPagamento;
    formaPagamento;
    observacao;
    status;
}
exports.CreatePagamentoDto = CreatePagamentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(4294967295),
    __metadata("design:type", Number)
], CreatePagamentoDto.prototype, "cobrancaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0.01),
    (0, class_validator_1.Max)(99999999.99),
    __metadata("design:type", Number)
], CreatePagamentoDto.prototype, "valorPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2026-10-06T12:00:00.000Z" }),
    (0, class_validator_1.IsDateString)({ strict: true }),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "dataPagamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "PIX", enum: client_1.FormaPagamento }),
    (0, class_validator_1.IsEnum)(client_1.FormaPagamento),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "formaPagamento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Pagamento de demonstra\u00e7\u00e3o" }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "observacao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(-2147483648),
    (0, class_validator_1.Max)(2147483647),
    __metadata("design:type", Number)
], CreatePagamentoDto.prototype, "status", void 0);
class UpdatePagamentoDto extends (0, swagger_1.PartialType)(CreatePagamentoDto, { skipNullProperties: false }) {
}
exports.UpdatePagamentoDto = UpdatePagamentoDto;
