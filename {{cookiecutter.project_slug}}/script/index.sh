#!/usr/bin/env bash

SLEEP_SECONDS=20
export ALGOLIA_INDEXING_API_KEY=${1}
echo "ALGOLIA_INDEXING_API_KEY: ${1}"
echo "exporting DOCSEARCH_SCRAPER_CONFIG_JSON"
export DOCSEARCH_SCRAPER_CONFIG_JSON=$(cat site/config.json | jq -r tostring)
echo "exported DOCSEARCH_SCRAPER_CONFIG_JSON"
echo "DOCSEARCH_SCRAPER_CONFIG_JSON: ${DOCSEARCH_SCRAPER_CONFIG_JSON}"
echo "starting docker-compose stack to start indexing"
docker-compose up -d
echo "started docker-compose stack to start indexing"
echo "waiting for the indexing to finish"
echo "logs for docsearch scraper begin"
docker logs -f docs-scraper-1
echo "logs for docsearch scraper end"
echo "removing docker-compose stack"
docker-compose down
echo "removing docker-compose stack"
