algolia_indexing_api_key ?= "algolia-indexing-api-key"

.PHONY: clean
clean:
	cd site;yarn clear

.PHONY: deps
deps:
	cd site;yarn install

.PHONY: build
build:
	cd site;yarn install;yarn build

.PHONY: run
run:
	cd site;yarn start

.PHONY: run-algolia-indexing
run-algolia-indexing:
	docker build -t {{cookiecutter.project_slug}} .
	bash script/index.sh '$(algolia_indexing_api_key)'
