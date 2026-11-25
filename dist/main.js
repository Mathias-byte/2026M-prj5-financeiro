"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const prisma_filter_1 = require("./common/prisma.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    app.useGlobalFilters(new prisma_filter_1.PrismaFilter());
    app.enableShutdownHooks();
    const config = new swagger_1.DocumentBuilder().setTitle('PI V — Financeiro').setDescription('CRUD acadêmico do módulo Financeiro de Gestão de Condomínio.').setVersion('1.0').build();
    swagger_1.SwaggerModule.setup('docs', app, swagger_1.SwaggerModule.createDocument(app, config));
    await app.listen(Number(process.env.PORT ?? 3000), '127.0.0.1');
    console.log('Swagger: http://localhost:' + (process.env.PORT ?? 3000) + '/docs');
}
bootstrap().catch(error => { console.error(error); process.exit(1); });
