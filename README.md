# Flights and Search Service

Express + Sequelize microservice that manages cities, airports, airplanes, and flights for an airline booking system. Provides CRUD APIs and flight search filters backed by MySQL.

## Stack
- Node.js, Express, body-parser
- Sequelize ORM + sequelize-cli
- MySQL (mysql2)
- nodemon for local dev

## Prerequisites
- Node.js 18+ and npm
- MySQL running locally or accessible remotely
- Global or npx access to `sequelize-cli`

## Setup
1) Install deps:
	 ```bash
	 npm install
	 ```
2) Configure environment:
	 - Copy `.env.example` conceptually and create `.env` with at least:
		 ```bash
		 PORT=3000
		 ```
	 - Update `src/config/config.json` with your MySQL credentials and database name for the `development` profile, or set `NODE_ENV` accordingly.
3) Create and migrate the database:
	 ```bash
	 npx sequelize-cli db:create
	 npx sequelize-cli db:migrate
	 npx sequelize-cli db:seed:all
	 ```

## Run
```bash
npm start
```
Service starts on `http://localhost:${PORT}` and mounts all routes under `/api/v1`.

## API Overview
- **Cities**
	- `POST /api/v1/city` — create
	- `GET /api/v1/city` — list (optional `name` prefix filter)
	- `GET /api/v1/city/:id` — fetch by id
	- `PATCH /api/v1/city/:id` — update
	- `DELETE /api/v1/city/:id` — remove
- **Airports**
	- `POST /api/v1/airports` — create
- **Flights**
	- `POST /api/v1/flights` — create (requires valid `airplaneId`; auto sets `totalSeats` from airplane capacity; validates `arrivalTime` > `departureTime`)
	- `GET /api/v1/flights` — list with filters: `arrivalAirportId`, `departureAirportId`, `minPrice`, `maxPrice`
	- `GET /api/v1/flights/:id` — fetch by id
	- `PATCH /api/v1/flights/:id` — update fields

## Project Structure
- `src/index.js` — server bootstrap
- `src/routes/` — route definitions (v1 namespace)
- `src/controllers/` — HTTP handlers
- `src/services/` — business logic
- `src/repository/` — data access via Sequelize models
- `src/models/` — Sequelize models and config
- `migrations/` & `seeders/` — database schema and seed data

## Notes
- Flight listing price filter combines `minPrice` and/or `maxPrice` using `Op.gte`/`Op.lte`.
- Update `src/config/config.json` or use `config.use_env_variable` if you prefer a single DB URL.
