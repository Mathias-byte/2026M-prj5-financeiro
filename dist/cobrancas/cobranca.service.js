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
exports.CobrancaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CobrancaService = class CobrancaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.cobranca.create({ data: { ...dto, ...(dto.competencia !== undefined ? { competencia: new Date(dto.competencia) } : {}), ...(dto.vencimento !== undefined ? { vencimento: new Date(dto.vencimento) } : {}) } });
    }
    findAll(page, limit) {
        return this.prisma.cobranca.findMany({ skip: (page - 1) * limit, take: limit, orderBy: { id: 'desc' } });
    }
    async findOne(id) {
        const item = await this.prisma.cobranca.findUnique({ where: { id } });
        if (!item)
            throw new common_1.NotFoundException('Registro não encontrado.');
        return item;
    }
    update(id, dto) {
        return this.prisma.cobranca.update({ where: { id }, data: { ...dto, ...(dto.competencia !== undefined ? { competencia: new Date(dto.competencia) } : {}), ...(dto.vencimento !== undefined ? { vencimento: new Date(dto.vencimento) } : {}) } });
    }
    remove(id) { return this.prisma.cobranca.delete({ where: { id } }); }
};
exports.CobrancaService = CobrancaService;
exports.CobrancaService = CobrancaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CobrancaService);
