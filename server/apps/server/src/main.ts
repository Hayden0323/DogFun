import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('DogFun-前端管理API')
    .setDescription('供网站和APP调用的服务端API')
    .setVersion('1.0')
    .addTag('dogs')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  const PORT = process.env.SERVER_PORT || 3001
  await app.listen(PORT)
  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap()
