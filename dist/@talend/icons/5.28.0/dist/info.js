"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconHref = getIconHref;
exports.info = void 0;
var info = {
  "talend-activemq": "brands",
  "talend-apache": "brands",
  "talend-aws-kinesis": "brands",
  "talend-azure-cosmosDB": "brands",
  "talend-azure-dynamics": "brands",
  "talend-azure": "brands",
  "talend-beam": "brands",
  "talend-cassandra": "brands",
  "talend-cloudstorage": "brands",
  "talend-couchbase": "brands",
  "talend-dynamodb": "brands",
  "talend-elastic": "brands",
  "talend-flink-o": "brands",
  "talend-flink": "brands",
  "talend-google-dataflow": "brands",
  "talend-hadoop": "brands",
  "talend-jms": "brands",
  "talend-kafka": "brands",
  "talend-marketo": "brands",
  "talend-mongodb": "brands",
  "talend-neo4j": "brands",
  "talend-netsuite": "brands",
  "talend-postgresql": "brands",
  "talend-pubsub": "brands",
  "talend-pulsar": "brands",
  "talend-python": "brands",
  "talend-rabbitmq": "brands",
  "talend-snowflake": "brands",
  "talend-spark": "brands",
  "talend-thoughtspot": "brands",
  "talend-workday": "brands",
  "talend-calendar-move": "components",
  "talend-column-chooser": "components",
  "talend-datagrid": "components",
  "talend-drag-and-drop": "components",
  "talend-drag": "components",
  "talend-empty-calendar": "components",
  "talend-empty-cell": "components",
  "talend-empty-char": "components",
  "talend-empty-space": "components",
  "talend-raw-data": "components",
  "talend-rest": "components",
  "talend-abc": "core",
  "talend-activity": "core",
  "talend-arrow-left": "core",
  "talend-arrow-right": "core",
  "talend-badge-outline": "core",
  "talend-badge": "core",
  "talend-bell-notification": "core",
  "talend-bell": "core",
  "talend-block": "core",
  "talend-board": "core",
  "talend-boolean": "core",
  "talend-broom": "core",
  "talend-bubbles": "core",
  "talend-burger": "core",
  "talend-campaigns": "core",
  "talend-caret-down": "core",
  "talend-carriage-return": "core",
  "talend-chain": "core",
  "talend-character": "core",
  "talend-charts": "core",
  "talend-check-circle": "core",
  "talend-check-plus": "core",
  "talend-check": "core",
  "talend-chevron-end": "core",
  "talend-chevron-left": "core",
  "talend-classify": "core",
  "talend-clock": "core",
  "talend-cloud-engine": "core",
  "talend-cloud-upgrade": "core",
  "talend-cluster": "core",
  "talend-cog": "core",
  "talend-comment": "core",
  "talend-component-negative": "core",
  "talend-component-positive": "core",
  "talend-connections": "core",
  "talend-conversion": "core",
  "talend-credits-engine": "core",
  "talend-cross-circle": "core",
  "talend-cross": "core",
  "talend-crosshairs": "core",
  "talend-cut": "core",
  "talend-data-models": "core",
  "talend-data-services": "core",
  "talend-datasets": "core",
  "talend-datastore": "core",
  "talend-download": "core",
  "talend-dropper": "core",
  "talend-ellipsis": "core",
  "talend-environment": "core",
  "talend-error": "core",
  "talend-expanded": "core",
  "talend-export-history": "core",
  "talend-export": "core",
  "talend-eye-slash": "core",
  "talend-eye": "core",
  "talend-fieldglass": "core",
  "talend-filter": "core",
  "talend-flag": "core",
  "talend-folder-closed": "core",
  "talend-folder-shared-owner": "core",
  "talend-folder-shared-user": "core",
  "talend-folder-shared": "core",
  "talend-folder": "core",
  "talend-format": "core",
  "talend-fullscreen": "core",
  "talend-group-circle": "core",
  "talend-group": "core",
  "talend-grouping": "core",
  "talend-hand-pointer": "core",
  "talend-hierarchical-view": "core",
  "talend-history": "core",
  "talend-home": "core",
  "talend-import": "core",
  "talend-info-circle": "core",
  "talend-launch": "core",
  "talend-launcher": "core",
  "talend-license": "core",
  "talend-line-charts": "core",
  "talend-link": "core",
  "talend-list": "core",
  "talend-local-storage": "core",
  "talend-lock": "core",
  "talend-locked": "core",
  "talend-mask": "core",
  "talend-maths": "core",
  "talend-merge": "core",
  "talend-minus-circle": "core",
  "talend-most-trusted": "core",
  "talend-network": "core",
  "talend-note": "core",
  "talend-numbers": "core",
  "talend-opener": "core",
  "talend-overview": "core",
  "talend-panel-opener-bottom": "core",
  "talend-panel-opener-right": "core",
  "talend-pause": "core",
  "talend-pencil": "core",
  "talend-phone": "core",
  "talend-pie-charts": "core",
  "talend-pin": "core",
  "talend-placeholder": "core",
  "talend-play": "core",
  "talend-plus-circle": "core",
  "talend-plus": "core",
  "talend-power-off": "core",
  "talend-projects": "core",
  "talend-promotion-pipelines": "core",
  "talend-question-circle": "core",
  "talend-quotes": "core",
  "talend-re-cluster": "core",
  "talend-redo": "core",
  "talend-refresh": "core",
  "talend-remote-engine": "core",
  "talend-replicate": "core",
  "talend-roles": "core",
  "talend-routes": "core",
  "talend-rules": "core",
  "talend-sample": "core",
  "talend-scheduler": "core",
  "talend-search": "core",
  "talend-semantic": "core",
  "talend-send": "core",
  "talend-share-alt": "core",
  "talend-sharing-default": "core",
  "talend-sharing-owner": "core",
  "talend-sharing-user": "core",
  "talend-shield-full-check": "core",
  "talend-shield-full": "core",
  "talend-shield": "core",
  "talend-show_unassigned_tasks": "core",
  "talend-sliders": "core",
  "talend-smiley-angry": "core",
  "talend-smiley-enthusiast": "core",
  "talend-smiley-neutral": "core",
  "talend-smiley-satisfied": "core",
  "talend-smiley-sleep": "core",
  "talend-smiley-unhappy": "core",
  "talend-sort-19": "core",
  "talend-sort-91": "core",
  "talend-sort-asc": "core",
  "talend-sort-az": "core",
  "talend-sort-desc": "core",
  "talend-sort-za": "core",
  "talend-sort": "core",
  "talend-star": "core",
  "talend-stop": "core",
  "talend-streams": "core",
  "talend-table": "core",
  "talend-tags": "core",
  "talend-tasks": "core",
  "talend-text": "core",
  "talend-tiles": "core",
  "talend-trash": "core",
  "talend-undo": "core",
  "talend-ungroup": "core",
  "talend-union": "core",
  "talend-unlocked": "core",
  "talend-upload": "core",
  "talend-user-circle": "core",
  "talend-variable": "core",
  "talend-versioning": "core",
  "talend-warning": "core",
  "talend-webhook": "core",
  "talend-word": "core",
  "talend-workspaces": "core",
  "talend-world": "core",
  "talend-wrench": "core",
  "talend-zoomin": "core",
  "talend-zoomout": "core",
  "talend-file-cog": "files",
  "talend-file-compressed": "files",
  "talend-file-connect-o": "files",
  "talend-file-csv-o": "files",
  "talend-file-database-o": "files",
  "talend-file-hdfs-o": "files",
  "talend-file-job-o": "files",
  "talend-file-json-o": "files",
  "talend-file-move": "files",
  "talend-file-o": "files",
  "talend-file-s3-o": "files",
  "talend-file-salesforce": "files",
  "talend-file-txt-o": "files",
  "talend-file-xls-o": "files",
  "talend-file-xlsx-o": "files",
  "talend-file-xml-o": "files",
  "talend-files-o": "files",
  "talend-flow-o": "flows",
  "talend-flow-source-o": "flows",
  "talend-flow-source-target": "flows",
  "talend-flow-step-o": "flows",
  "talend-flow-target-o": "flows",
  "talend-flow-under-plan": "flows",
  "talend-flow-unfinished": "flows",
  "talend-flow": "flows",
  "talend-between": "operators",
  "talend-contains": "operators",
  "talend-ends-with": "operators",
  "talend-equal": "operators",
  "talend-greater-than-equal": "operators",
  "talend-greater-than": "operators",
  "talend-less-than-equal": "operators",
  "talend-less-than": "operators",
  "talend-not-contains": "operators",
  "talend-not-equal": "operators",
  "talend-regex": "operators",
  "talend-starts-with": "operators",
  "talend-aggregate": "processors",
  "talend-azure-blob": "processors",
  "talend-azure-datalake": "processors",
  "talend-azure-event-hubs": "processors",
  "talend-bigquery": "processors",
  "talend-concatenate": "processors",
  "talend-db-input": "processors",
  "talend-delete-field": "processors",
  "talend-field-selector": "processors",
  "talend-filter-column": "processors",
  "talend-filter-row": "processors",
  "talend-ftp": "processors",
  "talend-hash-knife": "processors",
  "talend-normalize": "processors",
  "talend-semantic-filter": "processors",
  "talend-transformer-window": "processors",
  "talend-type-converter": "processors",
  "talend-window": "processors",
  "talend-api-designer-colored": "products",
  "talend-api-designer-negative": "products",
  "talend-api-designer-positive": "products",
  "talend-api-tester-colored": "products",
  "talend-api-tester-negative": "products",
  "talend-api-tester-positive": "products",
  "talend-component-kit-negative": "products",
  "talend-component-kit-positive": "products",
  "talend-data-fabric-colored": "products",
  "talend-dataprep": "products",
  "talend-datastreams-colored": "products",
  "talend-datastreams-negative": "products",
  "talend-datastreams-positive": "products",
  "talend-logo-colored": "products",
  "talend-logo-square": "products",
  "talend-logo": "products",
  "talend-mdm-colored": "products",
  "talend-mdm-negative": "products",
  "talend-mdm-positive": "products",
  "talend-tdc-colored": "products",
  "talend-tdc-negative": "products",
  "talend-tdc-positive": "products",
  "talend-tdp-colored": "products",
  "talend-tdp-negative": "products",
  "talend-tdp-positive": "products",
  "talend-tds-colored": "products",
  "talend-tds-negative": "products",
  "talend-tds-positive": "products",
  "talend-tic-colored": "products",
  "talend-tic-negative": "products",
  "talend-tic-positive": "products",
  "talend-tmc-colored": "products",
  "talend-tmc-negative": "products",
  "talend-tmc-positive": "products"
};
exports.info = info;

function getIconHref(name) {
  return info[name] ? "/".concat(info[name], ".svg#").concat(name) : "#".concat(name);
}