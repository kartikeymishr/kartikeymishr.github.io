.PHONY: install dev build docker-dev docker-prod docker-down clean help

help: ## Show all available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install npm dependencies
	npm install

dev: ## Start local dev server (http://localhost:3000)
	npm start

build: ## Create production build
	npm run build

docker-dev: ## Dev server via Docker Compose (http://localhost:3000)
	docker compose --profile dev up

docker-prod: ## Production build via Docker Compose (http://localhost:8080)
	docker compose --profile prod up --build

docker-down: ## Stop and remove Docker containers
	docker compose --profile dev --profile prod down

clean: ## Remove node_modules/ and build/
	rm -rf node_modules build
