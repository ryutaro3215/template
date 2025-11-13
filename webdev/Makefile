local_setup:
	@if [ ! -f .env.local ]; then \
	  echo "ERROR: .env.local がリポジトリ直下にありません"; \
	  exit 1; \
	fi; \
	for dir in packages/frontend packages/backend packages/db; do \
	  if [ -e $$dir/.env.local ] || [ -L $$dir/.env.local ]; then \
	    echo "既存の $$dir/.env.local を削除します"; \
	    rm -f $$dir/.env.local; \
	  fi; \
	  echo "シンボリックリンク作成: $$dir/.env.local -> ../../.env.local"; \
	  ln -s ../../.env.local $$dir/.env.local; \
	done

docker_setup:
	@if [ ! -f .env ]; then \
	  echo "ERROR: .env がリポジトリ直下にありません"; \
	  exit 1; \
	fi; \
	for dir in packages/frontend packages/backend packages/db; do \
	  if [ -e $$dir/.env ] || [ -L $$dir/.env ]; then \
	    echo "既存の $$dir/.env.local を削除します"; \
	    rm -f $$dir/.env; \
	  fi; \
	  echo "シンボリックリンク作成: $$dir/.env -> ../../.env"; \
	  ln -s ../../.env $$dir/.env; \
	done

dev:
	bun run --filter "*" dev

build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down

img:
	docker image ls

rimg:
	docker image rm $$(docker images -a -q)

cnt:
	docker container ls 
