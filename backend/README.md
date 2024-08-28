## Backend

### Runing

1. Copy `.env.example` to `.env`.
2. Set `TG_SECRET` var with actual secret of TMA. You can get it from BotFather.
3. Install dependencies
```shell
npm ci
```
4. Run database
```shell
docker compose up
```
5. Run app
```shell
npm start
```
