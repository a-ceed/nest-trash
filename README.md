
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Разработка
Для разработки:
- зайти в бекенд проект в app.module.ts и поменять настройки на локальную базу раскоментировав кусок кода
- запустить докер, если не запущена база, то запустить через docker-compose.locale: docker-compose -f docker-compose.local.yml up

- запустить бекенд: star:dev
- на фронте во всех вызовах поменять пути(раскоментировать, пример: http://localhost:3000/api/votes)

Выкатка:
- на фронте во всех вызовах поменять пути(раскоментировать, пример:/api/votes)
- удлаить dist перебилдить фронт
- закинуть новый dist фронта в папку frontend бека
- зайти в бекенд проект в app.module.ts и поменять настройки на локальную базу раскоментировав кусок кода
- удалить dist бека, перебилдить бек
- запустить сборку докер-образа: docker build -t ghcr.io/a-ceed/nest-trash:latest .
- залить в хаб: docker push ghcr.io/a-ceed/nest-trash:latest
- зайти на удаленный сервер
- на серваке должен быть прописан файл с гит хранилища образов:
  stat:
  container_name: internationaltrashaward.org
  image: ghcr.io/a-ceed/nest-trash:latest
- закачать новый образ на сервак: docker pull ghcr.io/a-ceed/nest-trash:latest
- на сервере остановить контейнеры:
  docker-compose stop
- запустить docker-compose -f docker-compose.prod.yml up

Еще есть команды для удаления контейнеров и образов. Но лучше их не юзать:
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)

Логин в гитхаб реджестри
login ghcr.io -u a-ceed -p тутТокенсгита
то что в конце это токен аксесс из гитхаба

БАЗА
Чтобы рпедактировать базу нужно скачать папку dbdata с сервера, положить её содержимое в localdbdata запустить docker-compose.local и редактировать подключившись компасом