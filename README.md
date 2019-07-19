# Venda.la

Guia de instalação

## Primeiros passos

> php artisan migrate

> php artisan storage:link

De permissões para a pasta `storage/`

> sudo chmod 777 storage -RF

De permissões para o `.sqlite`

> sudo chmod 777 database && sudo chmod 777 database/database.sqlite

## Guia para desenvolvimento

Instalar pacotes

> yarn install

Compilar projeto

> yarn run watch

## Pacotes auxiliares

### Consultas personalizadas via URI.

- [preetender/laravel-qs-api](https://github.com/preetender/laravel-qs-api)
