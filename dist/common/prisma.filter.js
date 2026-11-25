"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaFilter = class PrismaFilter {
    catch(error, host) {
        const codes = {
            P2002: [409, 'Já existe um registro com estes campos únicos.'],
            P2003: [400, 'A cobrança informada não existe ou possui vínculos que impedem esta operação.'],
            P2025: [404, 'Registro não encontrado.'],
        };
        const [statusCode, message] = codes[error.code] ?? [500, 'Falha ao acessar o banco de dados.'];
        host.switchToHttp().getResponse().status(statusCode).json({ statusCode, message });
    }
};
exports.PrismaFilter = PrismaFilter;
exports.PrismaFilter = PrismaFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaFilter);
