
## Hosting
https://ruvds.com/

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

База:
Чтобы рпедактировать базу нужно скачать папку dbdata с сервера, положить её содержимое в localdbdata запустить docker-compose.local и редактировать подключившись компасом

## Выкатка:
- на фронте во всех вызовах поменять пути(раскоментировать, пример:/api/votes) (не актуально)
- удлаить dist перебилдить фронт
- закинуть новый dist фронта в папку frontend бека
- зайти в бекенд проект в app.module.ts и поменять настройки на локальную? базу раскоментировав кусок кода
- удалить dist бека, перебилдить бек
- залогиниться в dockerhub: docker login
- запустить сборку докер-образа: docker build -t alextael/nest-trash:latest .
- либо зеркало запустить сборку докер-образа: docker build -t ghcr.io/a-ceed/nest-trash:latest .
- залить в хаб: docker push alextael/nest-trash:latest
- либо зеркала залить в хаб: docker push ghcr.io/a-ceed/nest-trash:latest
- зайти на удаленный сервер
- на серваке должен быть прописан файл с гит хранилища образов: docker-compose.prod.yml
  stat:
  container_name: internationaltrashaward.org
  image: alextael/nest-trash:latest
  либо image: ghcr.io/a-ceed/nest-trash:latest
- закачать новый образ на сервак: docker pull alextael/nest-trash:latest
- закачать новый образ на сервак: docker pull ghcr.io/a-ceed/nest-trash:latest
- на сервере остановить контейнеры:
  docker-compose stop
- запустить docker-compose -f docker-compose.prod.yml up

## Mongo edit
Создать ssh тунель с локальной машины на сервер
ssh -L 27017:localhost:27017 user@твой-сервер-ip
И в Compass c локальной машины указываешь строку подключения:
mongodb://localhost:27017

Еще есть команды для удаления контейнеров и образов, если ошибка: no space left on device  Но лучше их не юзать:
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)

Логин в гитхаб реджестри
Сейчас используется обычные hub docker
login ghcr.io -u a-ceed -p тутТокенсгита
то что в конце это токен аксесс из гитхаба


## Как пользоваться субмодульным репозиторием при обновлении в нем контента
Когда контент обновится (кто-то смержил PR в companies-content), обновляешь так:
git submodule update --remote public/companies
git add public/companies
git commit -m "update companies content"
git push

При клонировании проекта на новой машине нужно:
git clone --recurse-submodules https://github.com/org/vue-trash
# или если уже склонировал:
git submodule update --init

