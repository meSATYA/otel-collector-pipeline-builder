// Generated from component README files by scripts/sync-component-docs.mjs.
// Do not edit manually. Run npm run sync:docs to refresh from main.
export type ComponentDoc = { description: string; pipelineTypes: string[]; stability: { level: string; type: string }[]; docsUrl: string; repoPath: string };
export const componentDocs: Record<string, ComponentDoc> = {
  "activedirectorydsreceiver": {
    "description": "See the official activedirectorydsreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/activedirectorydsreceiver/README.md",
    "repoPath": "receiver/activedirectorydsreceiver"
  },
  "activedirectoryinvreceiver": {
    "description": "See the official activedirectoryinvreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/activedirectoryinvreceiver/README.md",
    "repoPath": "receiver/activedirectoryinvreceiver"
  },
  "aerospikereceiver": {
    "description": "The Aerospike Receiver uses the official Go client to\nconnect and collect.\n\nAerospike versions 4.9, 5.x, and 6.x are supported.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/aerospikereceiver/README.md",
    "repoPath": "receiver/aerospikereceiver"
  },
  "apachereceiver": {
    "description": "See the official apachereceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/apachereceiver/README.md",
    "repoPath": "receiver/apachereceiver"
  },
  "apachesparkreceiver": {
    "description": "See the official apachesparkreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/apachesparkreceiver/README.md",
    "repoPath": "receiver/apachesparkreceiver"
  },
  "awscloudwatchreceiver": {
    "description": "See the official awscloudwatchreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awscloudwatchreceiver/README.md",
    "repoPath": "receiver/awscloudwatchreceiver"
  },
  "awscontainerinsightreceiver": {
    "description": "See the official awscontainerinsightreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awscontainerinsightreceiver/README.md",
    "repoPath": "receiver/awscontainerinsightreceiver"
  },
  "awsecscontainermetricsreceiver": {
    "description": "See the official awsecscontainermetricsreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awsecscontainermetricsreceiver/README.md",
    "repoPath": "receiver/awsecscontainermetricsreceiver"
  },
  "awsfirehosereceiver": {
    "description": "See the official awsfirehosereceiver documentation for details.",
    "pipelineTypes": [
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awsfirehosereceiver/README.md",
    "repoPath": "receiver/awsfirehosereceiver"
  },
  "awslambdareceiver": {
    "description": "See the official awslambdareceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awslambdareceiver/README.md",
    "repoPath": "receiver/awslambdareceiver"
  },
  "awss3receiver": {
    "description": "See the official awss3receiver documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awss3receiver/README.md",
    "repoPath": "receiver/awss3receiver"
  },
  "awsxrayreceiver": {
    "description": "See the official awsxrayreceiver documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/awsxrayreceiver/README.md",
    "repoPath": "receiver/awsxrayreceiver"
  },
  "azureblobreceiver": {
    "description": "This receiver reads logs and trace data from Azure Blob Storage.\n\nEach blob is expected to contain a single payload. By default the payload is decoded as OTLP/JSON, but the encoding is configurable per signal via logs.encoding and traces.encoding (see below). In addition to the built-in otlpjson and otlpproto encodings, you may reference an encoding extension by its component ID to decode other formats.",
    "pipelineTypes": [
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/azureblobreceiver/README.md",
    "repoPath": "receiver/azureblobreceiver"
  },
  "azureeventhubreceiver": {
    "description": "See the official azureeventhubreceiver documentation for details.",
    "pipelineTypes": [
      "metrics",
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/azureeventhubreceiver/README.md",
    "repoPath": "receiver/azureeventhubreceiver"
  },
  "azurefunctionsreceiver": {
    "description": "See the official azurefunctionsreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/azurefunctionsreceiver/README.md",
    "repoPath": "receiver/azurefunctionsreceiver"
  },
  "azuremonitorreceiver": {
    "description": "See the official azuremonitorreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/azuremonitorreceiver/README.md",
    "repoPath": "receiver/azuremonitorreceiver"
  },
  "carbonreceiver": {
    "description": ":informationsource: The wavefront receiver is based on Carbon and binds to the\nsame port by default. This means the carbon and wavefront receivers\ncannot both be enabled with their respective default configurations. To\nsupport running both receivers in parallel, change the endpoint port on one\nof the receivers.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/carbonreceiver/README.md",
    "repoPath": "receiver/carbonreceiver"
  },
  "chronyreceiver": {
    "description": "The [chrony] receiver is a pure go implementation of the command chronyc tracking to allow for\nportability across systems and platforms. All of the data that would typically be captured by\nthe tracking command is made available in this receiver, see documentation for\nmore details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/chronyreceiver/README.md",
    "repoPath": "receiver/chronyreceiver"
  },
  "ciscoosreceiver": {
    "description": "See the official ciscoosreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/ciscoosreceiver/README.md",
    "repoPath": "receiver/ciscoosreceiver"
  },
  "cloudflarereceiver": {
    "description": "See the official cloudflarereceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/cloudflarereceiver/README.md",
    "repoPath": "receiver/cloudflarereceiver"
  },
  "cloudfoundryreceiver": {
    "description": "See the official cloudfoundryreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/cloudfoundryreceiver/README.md",
    "repoPath": "receiver/cloudfoundryreceiver"
  },
  "collectdreceiver": {
    "description": "This receiver was donated by SignalFx and ported from SignalFx's Gateway\n(https://github.com/signalfx/gateway/tree/master/protocol/collectd). As a\nresult, this receiver supports some additional features that are technically\nnot compatible with stock CollectD's writehttp plugin. That said, in\npractice such incompatibilities should never surface. For example, this\nreceiver supports extracting labels from different fields. Given a field\nvalue field[a=b, k=v], this receiver will extract a and b as label keys\nand, k and v as the respective label values.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/collectdreceiver/README.md",
    "repoPath": "receiver/collectdreceiver"
  },
  "couchdbreceiver": {
    "description": "See the official couchdbreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/couchdbreceiver/README.md",
    "repoPath": "receiver/couchdbreceiver"
  },
  "datadogreceiver": {
    "description": "See the official datadogreceiver documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/datadogreceiver/README.md",
    "repoPath": "receiver/datadogreceiver"
  },
  "dnscheckreceiver": {
    "description": "See the official dnscheckreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/dnscheckreceiver/README.md",
    "repoPath": "receiver/dnscheckreceiver"
  },
  "dockerstatsreceiver": {
    "description": ":informationsource: Requires Docker API version 1.25+",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/dockerstatsreceiver/README.md",
    "repoPath": "receiver/dockerstatsreceiver"
  },
  "elasticsearchreceiver": {
    "description": "Note: in the future, Elasticsearch will be instrumented with the OpenTelemetry Java SDK directly (https://github.com/elastic/elasticsearch/issues/109335).\nWhen this is complete, native OpenTelemetry metrics may be added for measuring cluster health, index statistics, and so on. Please subscribe to the linked issue to keep updated.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/elasticsearchreceiver/README.md",
    "repoPath": "receiver/elasticsearchreceiver"
  },
  "envoyalsreceiver": {
    "description": "Envoy ALS (Access Log Service) is a feature of Envoy Proxy that allows for the\ncentralized collection and management of access logs.\n\nInstead of writing access logs to local files, Envoy can be configured to send these logs to a remote gRPC service.\n\nThis is particularly useful in distributed systems where centralized logging is required for monitoring, auditing, and debugging purposes.\n\nIstio and Envoy Gateway support OTLP and gRPC ALS with first class API.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/envoyalsreceiver/README.md",
    "repoPath": "receiver/envoyalsreceiver"
  },
  "expvarreceiver": {
    "description": "See the official expvarreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/expvarreceiver/README.md",
    "repoPath": "receiver/expvarreceiver"
  },
  "faroreceiver": {
    "description": "See the official faroreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/faroreceiver/README.md",
    "repoPath": "receiver/faroreceiver"
  },
  "filelogreceiver": {
    "description": "See the official filelogreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/filelogreceiver/README.md",
    "repoPath": "receiver/filelogreceiver"
  },
  "filestatsreceiver": {
    "description": "See the official filestatsreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/filestatsreceiver/README.md",
    "repoPath": "receiver/filestatsreceiver"
  },
  "flinkmetricsreceiver": {
    "description": "See the official flinkmetricsreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/flinkmetricsreceiver/README.md",
    "repoPath": "receiver/flinkmetricsreceiver"
  },
  "fluentforwardreceiver": {
    "description": "Note: The receiver type has been renamed from fluentforward to fluentforward to follow the\nsnakecase naming convention. The old name fluentforward is preserved as a deprecated alias and\nwill continue to work, but a deprecation warning will be logged at startup. Please update your\nconfiguration to use fluentforward:.\n\nThis receiver:\n\n - Does not support TLS or the handshake portion of the Forward protocol.\n - Does support acknowledgments of events that have the chunk option, as per the spec.\n - Supports all three event types (message, forward, packed forward, including\n   compressed packed forward)\n - Supports listening on a Unix domain socket by making the listenAddress\n   option of the form unix://.\n - If using TCP, it will start a UDP server on the same port to deliver\n   heartbeat echos, as per the spec.\n\nHere is a basic example config that makes the receiver listen on all interfaces\non port 8006:\n\nyaml\nreceivers:\n  fluentforward:\n    endpoint: 0.0.0.0:8006",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/fluentforwardreceiver/README.md",
    "repoPath": "receiver/fluentforwardreceiver"
  },
  "githubreceiver": {
    "description": "# Table of Contents\n\n• Overview\n• Metrics - Getting Started\n  - Scraping\n• Traces - Getting Started\n  - Receiver Configuration\n  - Configuring Service Name\n  - Configuration a GitHub App\n  - Custom Properties as Resource Attributes",
    "pipelineTypes": [
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/githubreceiver/README.md",
    "repoPath": "receiver/githubreceiver"
  },
  "gitlabreceiver": {
    "description": "See the official gitlabreceiver documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/gitlabreceiver/README.md",
    "repoPath": "receiver/gitlabreceiver"
  },
  "googlecloudmonitoringreceiver": {
    "description": "This receiver gets GCP (Google Cloud Platform) metrics from [GCP Monitoring REST API] via the [Google SDK for GCP Metrics] and then convert those timeseries data into OTel Format [Pipeline Data].\n\n[GCP Monitoring REST API]: https://cloud.google.com/monitoring/api/refv3/rest/v3/projects.timeSeries/list\n[Google SDK for GCP Metrics]: https://pkg.go.dev/cloud.google.com/go/monitoring/apiv3\n[Pipeline Data]: https://pkg.go.dev/go.opentelemetry.io/collector/pdata",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/googlecloudmonitoringreceiver/README.md",
    "repoPath": "receiver/googlecloudmonitoringreceiver"
  },
  "googlecloudpubsubpushreceiver": {
    "description": "NOTE: Refer to Difference to the current google pub sub receiver if you don't know which receiver to use or just want to understand the differences.\n\nThe googlecloudpubsubpush receiver ingests OpenTelemetry data through Google Cloud Pub/Sub push subscriptions, supporting two primary data ingestion patterns:\n - Direct Log Ingestion: Processes Pub/Sub messages containing log data directly.\n - GCS Event Processing: Handles Pub/Sub notifications for new files in Google Cloud Storage.\n\nAll received data is parsed into OpenTelemetry format using configurable encoding extensions, enabling flexible and near real-time telemetry collection from multiple Google Cloud sources.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/googlecloudpubsubpushreceiver/README.md",
    "repoPath": "receiver/googlecloudpubsubpushreceiver"
  },
  "googlecloudpubsubreceiver": {
    "description": "⚠️ This is a community-provided module. It has been developed and extensively tested at Collibra, but it is not officially supported by GCP.\n \nThe following configuration options are supported:\n\n• project (Optional): The Google Cloud Project of the client connects to.\n• subscription (Required): The subscription name to receive OTLP data from. The subscription name should be a\n  fully qualified resource name (eg: projects/otel-project/subscriptions/otlp).\n• encoding (Optional): The encoding that will be used to received data from the subscription. This can either be\n  otlpprototrace, otlpprotometric, otlpprotolog or and encoding extension (see encoding).  This will only \n  be used as a fallback, when no content-type attribute is present.\n• compression (Optional): The compression that will be used on received data from the subscription. When set it can \n  only be gzip. This will only be used as a fallback, when no content-encoding attribute is present.\n• endpoint (Optional): Override the default Pubsub Endpoint, useful when connecting to the PubSub emulator instance\n  or switching between global and regional service endpoints.\n• insecure (Optional): allows performing “insecure” SSL connections and transfers, useful when connecting to a local\n   emulator instance. Only has effect if Endpoint is not \"\"\n• ignoreencodingerror (Optional): Ignore errors when the configured encoder fails to decoding a PubSub messages.\n  It's advised to set this to true when using a custom encoder, and use receiver.googlecloudpubsub.encodingerror\n  metric to monitor the number of errors. Ignoring the error will cause the receiver to drop the message.\n• flowcontrol (Optional): Allows to fine tune the flow control settings for the subscription stream. See\n  Flow control for more details.\n\nyaml\nreceivers:\n  googlecloudpubsub:\n    project: otel-project\n    subscription: projects/otel-project/subscriptions/otlp-logs",
    "pipelineTypes": [
      "traces",
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/googlecloudpubsubreceiver/README.md",
    "repoPath": "receiver/googlecloudpubsubreceiver"
  },
  "googlecloudspannerreceiver": {
    "description": "Note: The receiver type has been renamed from googlecloudspanner to googlecloudspanner to follow the\nsnakecase naming convention. The old name googlecloudspanner is preserved as a deprecated alias and\nwill continue to work, but a deprecation warning will be logged at startup. Please update your\nconfiguration to use googlecloudspanner:.\n\nGoogle Cloud Spanner enable you to investigate issues with your database\nby exposing via Total and Top N built-in tables:\n• Query statistics\n• Read statistics\n• Transaction statistics\n• Lock statistics\n• and others\n\nNote: Total and Top N built-in tables are used with 1 minute statistics granularity.\n\nThe ultimate goal of Google Cloud Spanner Receiver is to collect and transform those statistics into metrics\nthat would be convenient for further analysis by users.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/googlecloudspannerreceiver/README.md",
    "repoPath": "receiver/googlecloudspannerreceiver"
  },
  "haproxyreceiver": {
    "description": "See the official haproxyreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/haproxyreceiver/README.md",
    "repoPath": "receiver/haproxyreceiver"
  },
  "hostmetricsreceiver": {
    "description": "See the official hostmetricsreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/hostmetricsreceiver/README.md",
    "repoPath": "receiver/hostmetricsreceiver"
  },
  "httpcheckreceiver": {
    "description": "This receiver will make a request to the specified endpoint using the\nconfigured method. This scraper generates a metric with a label for each HTTP response status class with a value of 1 if the status code matches the\nclass. For example, the following metrics will be generated if the endpoint returned a 200:\n\nhttpcheck.status{http.statusclass:1xx, http.statuscode:200,...} = 0\nhttpcheck.status{http.statusclass:2xx, http.statuscode:200,...} = 1\nhttpcheck.status{http.statusclass:3xx, http.statuscode:200,...} = 0\nhttpcheck.status{http.statusclass:4xx, http.statuscode:200,...} = 0\nhttpcheck.status{http.statusclass:5xx, http.statuscode:200,...} = 0\n\nFor HTTPS endpoints, the receiver can collect TLS certificate metrics including the time remaining until certificate expiry. This allows monitoring of certificate expiration alongside HTTP availability. Note that TLS certificate metrics are disabled by default and must be explicitly enabled in the metrics configuration.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/httpcheckreceiver/README.md",
    "repoPath": "receiver/httpcheckreceiver"
  },
  "huaweicloudcesreceiver": {
    "description": "See the official huaweicloudcesreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/huaweicloudcesreceiver/README.md",
    "repoPath": "receiver/huaweicloudcesreceiver"
  },
  "icmpcheckreceiver": {
    "description": "See the official icmpcheckreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/icmpcheckreceiver/README.md",
    "repoPath": "receiver/icmpcheckreceiver"
  },
  "iisreceiver": {
    "description": "See the official iisreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/iisreceiver/README.md",
    "repoPath": "receiver/iisreceiver"
  },
  "influxdbreceiver": {
    "description": "Write endpoints exist at /write (InfluxDB 1.x compatibility) and /api/v2/write (InfluxDB 2.x compatibility).\nWrite query parameters db/rp (InfluxDB 1.x) and org/bucket (InfluxDB 2.x) are ignored.\nWrite query parameter precision is optional, defaults to ns.\n\nWrite responses:\n• 204: success, no further response needed (no content)\n• 400: permanent failure; check response body for details\n• 500: retryable error; check response body for details",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/influxdbreceiver/README.md",
    "repoPath": "receiver/influxdbreceiver"
  },
  "jaegerreceiver": {
    "description": "See the official jaegerreceiver documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/jaegerreceiver/README.md",
    "repoPath": "receiver/jaegerreceiver"
  },
  "journaldreceiver": {
    "description": "See the official journaldreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/journaldreceiver/README.md",
    "repoPath": "receiver/journaldreceiver"
  },
  "k8sclusterreceiver": {
    "description": "See the official k8sclusterreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/k8sclusterreceiver/README.md",
    "repoPath": "receiver/k8sclusterreceiver"
  },
  "k8seventsreceiver": {
    "description": "Currently this receiver supports authentication via service accounts only.\nSee example for more information.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/k8seventsreceiver/README.md",
    "repoPath": "receiver/k8seventsreceiver"
  },
  "k8sobjectsreceiver": {
    "description": "Currently this receiver supports authentication via service accounts only.\nSee example for more information.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/k8sobjectsreceiver/README.md",
    "repoPath": "receiver/k8sobjectsreceiver"
  },
  "kafkametricsreceiver": {
    "description": "Note: This receiver was renamed from kafkametrics to kafkametrics to match the snakecase naming convention.\nThe deprecated component type kafkametrics is still accepted as an alias and will log a deprecation warning.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/kafkametricsreceiver/README.md",
    "repoPath": "receiver/kafkametricsreceiver"
  },
  "kafkareceiver": {
    "description": "See the official kafkareceiver documentation for details.",
    "pipelineTypes": [
      "profiles",
      "metrics",
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/kafkareceiver/README.md",
    "repoPath": "receiver/kafkareceiver"
  },
  "kubeletstatsreceiver": {
    "description": "See the official kubeletstatsreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/kubeletstatsreceiver/README.md",
    "repoPath": "receiver/kubeletstatsreceiver"
  },
  "libhoneyreceiver": {
    "description": "See the official libhoneyreceiver documentation for details.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/libhoneyreceiver/README.md",
    "repoPath": "receiver/libhoneyreceiver"
  },
  "lokireceiver": {
    "description": "See the official lokireceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/lokireceiver/README.md",
    "repoPath": "receiver/lokireceiver"
  },
  "macosunifiedloggingreceiver": {
    "description": "See the official macosunifiedloggingreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/macosunifiedloggingreceiver/README.md",
    "repoPath": "receiver/macosunifiedloggingreceiver"
  },
  "memcachedreceiver": {
    "description": "See the official memcachedreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/memcachedreceiver/README.md",
    "repoPath": "receiver/memcachedreceiver"
  },
  "mongodbatlasreceiver": {
    "description": "See the official mongodbatlasreceiver documentation for details.",
    "pipelineTypes": [
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/mongodbatlasreceiver/README.md",
    "repoPath": "receiver/mongodbatlasreceiver"
  },
  "mongodbreceiver": {
    "description": "See the official mongodbreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/mongodbreceiver/README.md",
    "repoPath": "receiver/mongodbreceiver"
  },
  "mysqlreceiver": {
    "description": "This receiver queries MySQL's global status and InnoDB tables.\n\nSome metrics will not appear if their corresponding feature is inactive.  \nThere are also optional metrics that you must specify in your configuration to collect, listed in documentation.md",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/mysqlreceiver/README.md",
    "repoPath": "receiver/mysqlreceiver"
  },
  "namedpipereceiver": {
    "description": "See the official namedpipereceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/namedpipereceiver/README.md",
    "repoPath": "receiver/namedpipereceiver"
  },
  "netflowreceiver": {
    "description": "This receiver gives OpenTelemetry users the capability of monitoring network traffic, and answer questions like:\n\n• Which protocols are passing through the network?\n• Which servers and clients are producing the highest amount of traffic?\n• What ports are involved in these network calls?\n• How many bytes and packets are being sent and received?",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/netflowreceiver/README.md",
    "repoPath": "receiver/netflowreceiver"
  },
  "nginxreceiver": {
    "description": "See the official nginxreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/nginxreceiver/README.md",
    "repoPath": "receiver/nginxreceiver"
  },
  "nsxtreceiver": {
    "description": ":construction: This receiver is in ALPHA. Configuration fields and metric data model are subject to change.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/nsxtreceiver/README.md",
    "repoPath": "receiver/nsxtreceiver"
  },
  "ntpreceiver": {
    "description": "See the official ntpreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/ntpreceiver/README.md",
    "repoPath": "receiver/ntpreceiver"
  },
  "oracledbreceiver": {
    "description": "See the official oracledbreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/oracledbreceiver/README.md",
    "repoPath": "receiver/oracledbreceiver"
  },
  "osqueryreceiver": {
    "description": "See the official osqueryreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/osqueryreceiver/README.md",
    "repoPath": "receiver/osqueryreceiver"
  },
  "otelarrowreceiver": {
    "description": "See the official otelarrowreceiver documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/otelarrowreceiver/README.md",
    "repoPath": "receiver/otelarrowreceiver"
  },
  "otlpjsonfilereceiver": {
    "description": "The receiver will watch the directory and read files. If a file is updated or added,\nthe receiver will read it in its entirety again.\n\nThe data is serialized according to the OpenTelemetry Protocol File Exporter.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/otlpjsonfilereceiver/README.md",
    "repoPath": "receiver/otlpjsonfilereceiver"
  },
  "podmanreceiver": {
    "description": ":informationsource: Requires Podman API version 3.3.1+ and Windows is not supported.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/podmanreceiver/README.md",
    "repoPath": "receiver/podmanreceiver"
  },
  "postgresqlreceiver": {
    "description": "See the official postgresqlreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/postgresqlreceiver/README.md",
    "repoPath": "receiver/postgresqlreceiver"
  },
  "pprofreceiver": {
    "description": "See the official pprofreceiver documentation for details.",
    "pipelineTypes": [
      "profiles"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "profiles"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/pprofreceiver/README.md",
    "repoPath": "receiver/pprofreceiver"
  },
  "prometheusreceiver": {
    "description": "See the Design for additional information on this receiver.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/prometheusreceiver/README.md",
    "repoPath": "receiver/prometheusreceiver"
  },
  "prometheusremotewritereceiver": {
    "description": "See the official prometheusremotewritereceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/prometheusremotewritereceiver/README.md",
    "repoPath": "receiver/prometheusremotewritereceiver"
  },
  "pulsarreceiver": {
    "description": "See the official pulsarreceiver documentation for details.",
    "pipelineTypes": [
      "metrics",
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/pulsarreceiver/README.md",
    "repoPath": "receiver/pulsarreceiver"
  },
  "purefareceiver": {
    "description": "See the official purefareceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/purefareceiver/README.md",
    "repoPath": "receiver/purefareceiver"
  },
  "purefbreceiver": {
    "description": "See the official purefbreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/purefbreceiver/README.md",
    "repoPath": "receiver/purefbreceiver"
  },
  "rabbitmqreceiver": {
    "description": "See the official rabbitmqreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/rabbitmqreceiver/README.md",
    "repoPath": "receiver/rabbitmqreceiver"
  },
  "receivercreator": {
    "description": "To use the receiver creator, you must first configure one or more\nobservers that will discover networked\nendpoints that you may be interested in. The configured rules will be\nevaluated for each endpoint discovered. If the rule evaluates to true then\nthe receiver for that rule will be started against the matched endpoint.\n\nIf you use the receiver creator in multiple pipelines of differing telemetry types,\nbut a given dynamically instantiated receiver doesn't support one of the pipeline's type,\nit will effectively lead to a logged no-op that won't cause a collector service failure.",
    "pipelineTypes": [
      "logs",
      "traces",
      "profiles",
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/receivercreator/README.md",
    "repoPath": "receiver/receivercreator"
  },
  "redfishreceiver": {
    "description": "See the official redfishreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/redfishreceiver/README.md",
    "repoPath": "receiver/redfishreceiver"
  },
  "redisreceiver": {
    "description": "See the official redisreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/redisreceiver/README.md",
    "repoPath": "receiver/redisreceiver"
  },
  "riakreceiver": {
    "description": "Riak metrics will be collected from the /stats endpoint.\n\nThis Riak receiver will collect metrics for 3.x+",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/riakreceiver/README.md",
    "repoPath": "receiver/riakreceiver"
  },
  "saphanareceiver": {
    "description": "### Prerequisites\n\nThe receiver is intended to support SAP HANA version 2, older versions have not been tested.\n\nA monitoring user requires SELECT access to the relevant monitoring views. The following sql script should create a monitoring role and apply it to a monitoring user if executed by a user with sufficient permissions connected to the SAP HANA instance.\n\nsql\n--Create the user\nCREATE RESTRICTED USER otelmonitoringuser PASSWORD ;\n\n--Enable user login\nALTER USER otelmonitoringuser ENABLE CLIENT CONNECT;\n\n--Create the monitoring role\nCREATE ROLE OTELMONITORING;\n\n--Grant permissions to the relevant views\nGRANT CATALOG READ TO OTELMONITORING;\nGRANT SELECT ON SYS.MBACKUPCATALOG TO OTELMONITORING;\nGRANT SELECT ON SYS.MBLOCKEDTRANSACTIONS TO OTELMONITORING;\nGRANT SELECT ON SYS.MCONNECTIONS TO OTELMONITORING;\nGRANT SELECT ON SYS.MCSALLCOLUMNS TO OTELMONITORING;\nGRANT SELECT ON SYS.MCSTABLES TO OTELMONITORING;\nGRANT SELECT ON SYS.MDATABASE TO OTELMONITORING;\nGRANT SELECT ON SYS.MDISKS TO OTELMONITORING;\nGRANT SELECT ON SYS.MHOSTRESOURCEUTILIZATION TO OTELMONITORING;\nGRANT SELECT ON SYS.MLICENSES TO OTELMONITORING;\nGRANT SELECT ON SYS.MRSTABLES TO OTELMONITORING;\nGRANT SELECT ON SYS.MSERVICECOMPONENTMEMORY TO OTELMONITORING;\nGRANT SELECT ON SYS.MSERVICEMEMORY TO OTELMONITORING;\nGRANT SELECT ON SYS.MSERVICEREPLICATION TO OTELMONITORING;\nGRANT SELECT ON SYS.MSERVICESTATISTICS TO OTELMONITORING;\nGRANT SELECT ON SYS.MSERVICETHREADS TO OTELMONITORING;\nGRANT SELECT ON SYS.MSERVICES TO OTELMONITORING;\nGRANT SELECT ON SYS.MVOLUMEIOTOTALSTATISTICS TO OTELMONITORING;\nGRANT SELECT ON SYS.MWORKLOAD TO OTELMONITORING;\nGRANT SELECT ON SYSSTATISTICS.STATISTICSCURRENTALERTS TO OTELMONITORING;\n\n--Add the OTELMONITOR role to the monitoring user\nGRANT OTELMONITORING TO otelmonitoringuser;",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/saphanareceiver/README.md",
    "repoPath": "receiver/saphanareceiver"
  },
  "signalfxreceiver": {
    "description": "The SignalFx receiver accepts:\n\n• Metrics in the SignalFx proto\nformat.\n• Events (Logs) in the SignalFx proto\nformat.\nMore information about sending custom events can be found in the SignalFx\nDevelopers\nGuide.",
    "pipelineTypes": [
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "deprecated",
        "type": "metrics"
      },
      {
        "level": "deprecated",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/signalfxreceiver/README.md",
    "repoPath": "receiver/signalfxreceiver"
  },
  "simpleprometheusreceiver": {
    "description": "The prometheussimple receiver is a wrapper around the prometheus\nreceiver.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "unmaintained",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/simpleprometheusreceiver/README.md",
    "repoPath": "receiver/simpleprometheusreceiver"
  },
  "skywalkingreceiver": {
    "description": "Note: The current metrics receiver only supports receiving JVM data.",
    "pipelineTypes": [
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/skywalkingreceiver/README.md",
    "repoPath": "receiver/skywalkingreceiver"
  },
  "snmpreceiver": {
    "description": "See the official snmpreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/snmpreceiver/README.md",
    "repoPath": "receiver/snmpreceiver"
  },
  "snowflakereceiver": {
    "description": "See the official snowflakereceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/snowflakereceiver/README.md",
    "repoPath": "receiver/snowflakereceiver"
  },
  "solacereceiver": {
    "description": "See the official solacereceiver documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/solacereceiver/README.md",
    "repoPath": "receiver/solacereceiver"
  },
  "splunkenterprisereceiver": {
    "description": "See the official splunkenterprisereceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/splunkenterprisereceiver/README.md",
    "repoPath": "receiver/splunkenterprisereceiver"
  },
  "splunkhecreceiver": {
    "description": "See the official splunkhecreceiver documentation for details.",
    "pipelineTypes": [
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/splunkhecreceiver/README.md",
    "repoPath": "receiver/splunkhecreceiver"
  },
  "sqlqueryreceiver": {
    "description": ":construction: This receiver is in ALPHA. Behavior, configuration fields, and log or metric data model are subject to\nchange.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/sqlqueryreceiver/README.md",
    "repoPath": "receiver/sqlqueryreceiver"
  },
  "sqlserverreceiver": {
    "description": "See the official sqlserverreceiver documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/sqlserverreceiver/README.md",
    "repoPath": "receiver/sqlserverreceiver"
  },
  "sshcheckreceiver": {
    "description": "See the official sshcheckreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/sshcheckreceiver/README.md",
    "repoPath": "receiver/sshcheckreceiver"
  },
  "statsdreceiver": {
    "description": "See the official statsdreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/statsdreceiver/README.md",
    "repoPath": "receiver/statsdreceiver"
  },
  "stefreceiver": {
    "description": "For more about OTel/STEF, see STEF exporter docs.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/stefreceiver/README.md",
    "repoPath": "receiver/stefreceiver"
  },
  "syslogreceiver": {
    "description": "See the official syslogreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/syslogreceiver/README.md",
    "repoPath": "receiver/syslogreceiver"
  },
  "systemdreceiver": {
    "description": "This scraper generates a metric with a label for service state with a value of 1 if the unit is in that state. For\nexample, the following metrics will be generated if the nginx service is currently active:\n\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"active\"} = 1\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"reloading\"} = 0\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"inactive\"} = 0\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"failed\"} = 0\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"activating\"} = 0\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"deactivating\"} = 0\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"maintenance\"} = 0\nsystemd.unit.state{systemd.unit.name=\"nginx\", systemd.unit.activestate=\"refreshing\"} = 0",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/systemdreceiver/README.md",
    "repoPath": "receiver/systemdreceiver"
  },
  "tcpcheckreceiver": {
    "description": "See the official tcpcheckreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/tcpcheckreceiver/README.md",
    "repoPath": "receiver/tcpcheckreceiver"
  },
  "tcplogreceiver": {
    "description": "See the official tcplogreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/tcplogreceiver/README.md",
    "repoPath": "receiver/tcplogreceiver"
  },
  "tlscheckreceiver": {
    "description": "See the official tlscheckreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/tlscheckreceiver/README.md",
    "repoPath": "receiver/tlscheckreceiver"
  },
  "udplogreceiver": {
    "description": "See the official udplogreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/udplogreceiver/README.md",
    "repoPath": "receiver/udplogreceiver"
  },
  "vcenterreceiver": {
    "description": "See the official vcenterreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/vcenterreceiver/README.md",
    "repoPath": "receiver/vcenterreceiver"
  },
  "vcrreceiver": {
    "description": "See the official vcrreceiver documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs",
      "profiles"
    ],
    "stability": [
      {
        "level": "development",
        "type": "traces"
      },
      {
        "level": "development",
        "type": "metrics"
      },
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "development",
        "type": "profiles"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/vcrreceiver/README.md",
    "repoPath": "receiver/vcrreceiver"
  },
  "wavefrontreceiver": {
    "description": "The Wavefront receiver accepts metrics and depends on carbonreceiver proto\nand\ntransport,\nIt's very similar to Carbon: it is TCP based in which each received text line\nrepresents a single metric data point. They differ on the format of their\ntextual representation. The Wavefront receiver leverages the Carbon receiver\ncode by implementing a dedicated parser for its format.\n\nThe receiver receives the string with Wavefront metric data, and transforms\nit to the collector metric format. See\nhttps://docs.wavefront.com/wavefrontdataformat.html#metrics-data-format-syntax.\nEach line received represents a Wavefront metric in the following format:\n\n  [] source= [pointTags]\n\n:informationsource: The wavefront receiver is based on Carbon and binds to the\nsame port by default. This means the carbon and wavefront receivers\ncannot both be enabled with their respective default configurations. To\nsupport running both receivers in parallel, change the endpoint port on one\nof the receivers.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "deprecated",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/wavefrontreceiver/README.md",
    "repoPath": "receiver/wavefrontreceiver"
  },
  "webhookeventreceiver": {
    "description": "See the official webhookeventreceiver documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/webhookeventreceiver/README.md",
    "repoPath": "receiver/webhookeventreceiver"
  },
  "windowseventlogreceiver": {
    "description": "### Configuration Fields\n\n| Field                               | Default      | Description                                                                                                                                                                                                                                    |\n|-------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| channel                           | required     | The windows event log channel to monitor                                                                                                                                                                                                       |\n| ignorechannelerrors             | false        | If true, Prevents shutdown of collector when failing to open event log channels and instead logs a warning  |\n| maxreads                         | 100          | The maximum number of records read into memory, before beginning a new batch                                                                                                                                                                  |\n| startat                          | end        | On first startup, where to start reading logs from the API. Options are beginning or end                                                                                                                                                   |\n| pollinterval                     | 1s           | The interval at which the channel is checked for new log entries. This check begins again after all new bodies have been read. Only used when event-driven scraping is disabled (see eventdrivenscraping below).                    |\n| maxeventsperpoll               | 0            | The maximum number of events allowed to be read per polling interval, see pollinterval. Zero means that there is no limit and the receiver will consume all events available. Ignored when event-driven scraping is enabled. |\n| waittimeout                      | 5s           | Maximum duration to wait for new events before performing a safety-net poll. Only used when event-driven scraping is enabled.                                                                        |\n| eventdrivenscraping             | false        | If true, the receiver wakes on Windows API signals instead of polling on a fixed interval, reducing latency and avoiding unnecessary wakeups between events. Use waittimeout to configure the safety-net poll interval. This option has the same effect as enabling the stanza.windows.eventDrivenScraping feature gate; event-driven scraping is used when either is set. This configuration option should be treated as experimental until the feature gate has been promoted from alpha stability. |\n| attributes                        | {}           | A map of key: value pairs to add to the entry's attributes. Keys must be strings, values must be strings or expressions that evaluate to a string. |\n| resource                          | {}           | A map of key: value pairs to add to the entry's resource. Keys must be strings, values must be strings or expressions that evaluate to a string. |\n| operators                         | []           | An array of operators. See below for more details                                                            |\n| raw | false | If false, the body of emitted log records will contain a structured representation of the event. Otherwise, the body will be the original XML string. |\n| eventdataformat | map | Controls the structure of the eventdata field when raw is false. map emits a flat map (named elements as direct keys, anonymous elements as param1, param2, etc.). array emits the legacy format with a nested data array of single-key maps. |\n| includelogrecordoriginal | false | If false, no additional attributes are added. If true, log.record.original is added to the attributes, which stores the original XML string according to the configured suppressrenderinginfo (see below). \n| suppressrenderinginfo | false | If false, additional syscalls may be made to retrieve detailed information about the event. Otherwise, some unresolved values may be present in the event. |\n| excludeproviders                 | []           | One or more event log providers to exclude from processing.                                                                                                                                                                                    |\n| storage                           | none         | The ID of a storage extension to be used to store bookmarks. Bookmarks allow the receiver to pick up where it left off in the case of a collector restart. If no storage extension is used, the receiver will manage bookmarks in memory only. |\n| retryonfailure.enabled          | false      | If true, the receiver will pause reading a file and attempt to resend the current batch of logs if it encounters an error from downstream components.                                                                                        |\n| retryonfailure.initialinterval | 1 second   | Time to wait after the first failure before retrying.                                                                                                                                                                                          |\n| retryonfailure.maxinterval     | 30 seconds | Upper bound on retry backoff interval. Once this value is reached the delay between consecutive retries will remain constant at the specified value.                                                                                           |\n| retryonfailure.maxelapsedtime | 5 minutes  | Maximum amount of time (including retries) spent trying to send a logs batch to a downstream consumer. Once this value is reached, the data is discarded. Retrying never stops if set to 0.                                                  |\n| remote                              | object       | Remote configuration for connecting to a remote machine to collect logs. Includes server (the address of the remote server), with username, password, and optional domain.                                                    |\n| query                             | none         | XML query used for filtering events. See Query Schema                                                                                                                |\n| path                             | none         | File path for EVTX file archive to read.                                                                                                                |\n| resolvesids                      | object       | Configuration for resolving Windows Security Identifiers (SIDs) to user/group names. See SID Resolution section below.                                                                                     |\n| resolvesids.enabled              | false      | If true, automatically resolves SIDs to user and group names in Windows event logs.                                                                                                                                          |\n| resolvesids.cachesize           | 10000      | Maximum number of SID-to-name mappings to cache in memory. Older entries are evicted using LRU policy.                                                                                                                         |\n| resolvesids.cachettl            | 15m        | Time-to-live for cached SID mappings. After this duration, SIDs will be re-resolved from the Windows LSA API.                                                                                                                  |\n| discoverdomaincontrollers       | false      | Automatically discover and collect  events from Active Directory domain controllers.                                                                                                                                           |\n\n### Feature Gates\n\n| Feature Gate                                          | Stage | Description                                                                                                                                                           |\n|-------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| stanza.windows.eventDrivenScraping        | Alpha | When enabled, the receiver wakes on Windows API signals instead of polling on a fixed interval, reducing latency and avoiding unnecessary wakeups between events. Use waittimeout to configure the safety-net poll interval. |\n\n### Operators\n\nEach operator performs a simple responsibility, such as parsing a timestamp or JSON. Chain together operators to process logs into a desired format.\n\n• Every operator has a type.\n• Every operator can be given a unique id. If you use the same type of operator more than once in a pipeline, you must specify an id. Otherwise, the id defaults to the value of type.\n• Operators will output to the next operator in the pipeline. The last operator in the pipeline will emit from the receiver. Optionally, the output parameter can be used to specify the id of another operator to which logs will be passed directly.\n• Only parsers and general purpose operators should be used.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/windowseventlogreceiver/README.md",
    "repoPath": "receiver/windowseventlogreceiver"
  },
  "windowsperfcountersreceiver": {
    "description": "This receiver is based on the Telegraf Windows Performance Counters Input\nPlugin.\n\nIf one of the specified performance counters cannot be loaded on startup, a\nwarning will be printed, but the application will not fail fast. It is expected\nthat some performance counters may not exist on some systems due to different OS\nconfiguration.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/windowsperfcountersreceiver/README.md",
    "repoPath": "receiver/windowsperfcountersreceiver"
  },
  "windowsservicereceiver": {
    "description": "See the official windowsservicereceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/windowsservicereceiver/README.md",
    "repoPath": "receiver/windowsservicereceiver"
  },
  "yanggrpcreceiver": {
    "description": "The YANG gRPC Receiver collects Model-Driven Telemetry (MDT) from network devices (primarily Cisco) via gRPC Dial-out. It transforms complex Cisco KV-GPB (Key-Value Google Protocol Buffers) data into standard OpenTelemetry metrics.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/yanggrpcreceiver/README.md",
    "repoPath": "receiver/yanggrpcreceiver"
  },
  "zipkinreceiver": {
    "description": "See the official zipkinreceiver documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/zipkinreceiver/README.md",
    "repoPath": "receiver/zipkinreceiver"
  },
  "zookeeperreceiver": {
    "description": "See the official zookeeperreceiver documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/zookeeperreceiver/README.md",
    "repoPath": "receiver/zookeeperreceiver"
  },
  "attributesprocessor": {
    "description": "The attributes processor modifies attributes of a span, log, or metric. Please refer to\nconfig.go for the config spec.\n\nThis processor also supports the ability to filter and match input data to determine\nif they should be included or excluded for specified actions.\n\nIt takes a list of actions which are performed in order specified in the config.\nThe supported actions are:\n• insert: Inserts a new attribute in input data where the key does not already exist.\n• update: Updates an attribute in input data where the key does exist.\n• upsert: Performs insert or update. Inserts a new attribute in input data where the\n  key does not already exist and updates an attribute in input data where the key\n  does exist.\n• delete: Deletes an attribute from the input data.\n• hash: Hashes (SHA1) an existing attribute value.\n• extract: Extracts values using a regular expression rule from the input key\n  to target keys specified in the rule. If a target key already exists, it will\n  be overridden. Note: It behaves similar to the Span Processor toattributes\n  setting with the existing attribute as the source.\n• convert: Converts an existing attribute to a specified type.\n\nFor the actions insert, update and upsert,\n - key  is required\n - one of value, fromattribute, fromcontext, or defaultvalue is required\n - action is required.\nyaml\n  # Key specifies the attribute to act upon.\n• key: \n  action: {insert, update, upsert}\n  # Value specifies the value to populate for the key.\n  # The type is inferred from the configuration.\n  value: \n\n  # Key specifies the attribute to act upon.\n• key: \n  action: {insert, update, upsert}\n  # FromAttribute specifies the attribute from the input data to use to populate\n  # the value. If the attribute doesn't exist, no action is performed.\n  fromattribute: \n\n  # Key specifies the attribute to act upon.\n• key: \n  action: {insert, update, upsert}\n  # FromContext specifies the context value to use to populate the attribute value. \n  # If the key is prefixed with metadata., the values are searched\n  # in the receiver's transport protocol additional information like gRPC Metadata or HTTP Headers\n  # (be sure to set includemetadata: true on the receiver).\n  # If the key is prefixed with auth., the values are searched\n  # in the authentication information set by the server authenticator.\n  # Refer to the server authenticator's documentation part of your pipeline for more information about which attributes are available.\n  # If the key is client.address, the value will be set to the client address. \n  # If the key doesn't exist, no action is performed.\n  # If the key has multiple values the values will be joined with ; separator.\n  fromcontext: \n\n  # Key specifies the attribute to act upon.\n• key: \n  action: {insert, update, upsert}\n  # DefaultValue specifies the value to use if value/fromattribute/fromcontext\n  # doesn't provide a value (e.g., environment variable not set, attribute doesn't exist).\n  # Only used with INSERT, UPDATE, and UPSERT actions.\n  defaultvalue: \n\nFor the delete action,\n - key and/or pattern is required\n - action: delete is required.\nyaml\n# Key specifies the attribute to act upon.\n• key: \n  action: delete\n  # Rule specifies the regex pattern for attribute names to act upon.\n  pattern: \n\nFor the hash action,\n - key and/or pattern is required\n - action: hash is required.\nyaml\n# Key specifies the attribute to act upon.\n• key: \n  action: hash\n  # Rule specifies the regex pattern for attribute names to act upon.\n  pattern: \n\nFor the extract action,\n - key is required\n - pattern is required.\n yaml\n # Key specifies the attribute to extract values from.\n # The value of key is NOT altered.\n• key: \n  # Rule specifies the regex pattern used to extract attributes from the value\n  # of key.\n  # The submatchers must be named.\n  # If attributes already exist, they will be overwritten.\n  pattern: \n  action: extract\n\n \n\nFor the convert action,\n - key is required\n - action: convert is required.\n - convertedtype is required and must be one of int, double or string\nyaml\n# Key specifies the attribute to act upon.\n• key: \n  action: convert\n  convertedtype:",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/attributesprocessor/README.md",
    "repoPath": "processor/attributesprocessor"
  },
  "awsecsattributesprocessor": {
    "description": "[!NOTE]\nThis is the initial skeleton donation of the component. The processors are\ncurrently no-op passthroughs; the ECS metadata enrichment logic is added in a\nfollow-up pull request. See issue\n#44476.\n\nThe processor discovers the ECS metadata endpoint for each container, reads the\nmetadata, and attaches the relevant attributes to the corresponding telemetry.\nThis complements the\nresourcedetection processor, which is designed for a single collector enriching\nits own telemetry rather than centrally enriching telemetry from many containers.",
    "pipelineTypes": [
      "logs",
      "metrics",
      "traces",
      "profiles"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "development",
        "type": "metrics"
      },
      {
        "level": "development",
        "type": "traces"
      },
      {
        "level": "development",
        "type": "profiles"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/awsecsattributesprocessor/README.md",
    "repoPath": "processor/awsecsattributesprocessor"
  },
  "cardinalityguardianprocessor": {
    "description": "The processor strips only the exploding label — not the entire data point. Your dashboards keep working while the cardinality explosion is neutralized.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/cardinalityguardianprocessor/README.md",
    "repoPath": "processor/cardinalityguardianprocessor"
  },
  "coralogixprocessor": {
    "description": "See the official coralogixprocessor documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/coralogixprocessor/README.md",
    "repoPath": "processor/coralogixprocessor"
  },
  "cumulativetodeltaprocessor": {
    "description": "See the official cumulativetodeltaprocessor documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/cumulativetodeltaprocessor/README.md",
    "repoPath": "processor/cumulativetodeltaprocessor"
  },
  "deltatocumulativeprocessor": {
    "description": "See the official deltatocumulativeprocessor documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/deltatocumulativeprocessor/README.md",
    "repoPath": "processor/deltatocumulativeprocessor"
  },
  "deltatorateprocessor": {
    "description": "Status: under development; Not recommended for production usage.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/deltatorateprocessor/README.md",
    "repoPath": "processor/deltatorateprocessor"
  },
  "drainprocessor": {
    "description": "This processor annotates; it does not filter. Use the filter processor downstream to act on the log.record.template attribute — for example, to drop entire classes of noisy logs by pattern.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/drainprocessor/README.md",
    "repoPath": "processor/drainprocessor"
  },
  "dynamicsamplingprocessor": {
    "description": "The Dynamic Sampling Processor performs adaptive tail-based trace sampling using first-match rules-based routing to dynamic samplers. Each sampler produces a known sample rate which is encoded as ot=th in W3C TraceState for correct downstream metric weighting.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "development",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/dynamicsamplingprocessor/README.md",
    "repoPath": "processor/dynamicsamplingprocessor"
  },
  "filterprocessor": {
    "description": "[!NOTE]\nThis documentation applies only to version 0.146.0 and later. Configuration from previous version is still supported, but no longer documented in this README. For information on earlier versions, please refer to the previous documentation.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/filterprocessor/README.md",
    "repoPath": "processor/filterprocessor"
  },
  "genainormalizerprocessor": {
    "description": "The GenAI Normalizer Processor rewrites attributes on spans emitted by non-OTel GenAI instrumentation libraries into the OTel GenAI Semantic Conventions.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/genainormalizerprocessor/README.md",
    "repoPath": "processor/genainormalizerprocessor"
  },
  "geoipprocessor": {
    "description": "See the official geoipprocessor documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/geoipprocessor/README.md",
    "repoPath": "processor/geoipprocessor"
  },
  "groupbyattrsprocessor": {
    "description": "Typical use cases:\n\n• extract resources from \"flat\" data formats, such as Fluentbit logs or Prometheus metrics\n• associate Prometheus metrics to a Resource that describes the relevant host, based on label present on all metrics\n• optimize data packaging by extracting common attributes\n• compacting multiple records that share the same Resource and InstrumentationLibrary attributes but are under multiple ResourceSpans/ResourceMetrics/ResourceLogs, into a single ResourceSpans/ResourceMetrics/ResourceLogs (when empty list of keys is being provided). This might happen e.g. when groupbytrace processor is being used or data comes in multiple requests. By compacting data, it takes less memory, is more efficiently processed, serialized and the number of export requests is reduced.\n\nIt is recommended to use the groupbyattrs processor together with batch processor, as a consecutive step, as this will reduce the fragmentation of data (by grouping records together under matching Resource/Instrumentation Library)",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/groupbyattrsprocessor/README.md",
    "repoPath": "processor/groupbyattrsprocessor"
  },
  "groupbytraceprocessor": {
    "description": "This processor collects all the spans from the same trace, waiting a \npre-determined amount of time before releasing the trace to the next processor.\nThe expectation is that, generally, traces will be complete after the given time.\n\nThis processor should be used whenever a processor requires grouped traces to make decisions,\nsuch as a tail-based sampler or a per-trace metrics processor. Note that tailsamplingprocessor \nalso implements a similar mechanism and can be used independently.\n\nThe batch processor shouldn't be used before this processor, as this one will \nprobably undo part (or much) of the work that the batch processor performs. It's\nfine to have the batch processor to run right after this one, and every entry in the\nbatch will be a complete trace.\n\nPlease refer to config.go for the config spec.\n\nExamples:\n\nyaml\nprocessors:\n  groupbytrace:\n  groupbytrace/2:\n    waitduration: 10s\n    numtraces: 1000\n    numworkers: 2",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/groupbytraceprocessor/README.md",
    "repoPath": "processor/groupbytraceprocessor"
  },
  "intervalprocessor": {
    "description": "See the official intervalprocessor documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/intervalprocessor/README.md",
    "repoPath": "processor/intervalprocessor"
  },
  "isolationforestprocessor": {
    "description": "See the official isolationforestprocessor documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/isolationforestprocessor/README.md",
    "repoPath": "processor/isolationforestprocessor"
  },
  "k8sattributesprocessor": {
    "description": "The processor automatically discovers k8s resources (pods), extracts metadata from them and adds the extracted metadata\nto the relevant spans, metrics and logs as resource attributes. The processor uses the kubernetes API to discover all pods\nrunning in a cluster, keeps a record of their IP addresses, pod UIDs and interesting metadata.\nThe rules for associating the data passing through the processor (spans, metrics and logs) with specific Pod Metadata are configured via \"podassociation\" key.\nIt represents a list of associations that are executed in the specified order until the first one is able to do the match.",
    "pipelineTypes": [
      "profiles",
      "logs",
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/k8sattributesprocessor/README.md",
    "repoPath": "processor/k8sattributesprocessor"
  },
  "logdedupprocessor": {
    "description": "See the official logdedupprocessor documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/logdedupprocessor/README.md",
    "repoPath": "processor/logdedupprocessor"
  },
  "logstransformprocessor": {
    "description": "NOTE - This processor is experimental, with the intention that its functionality will be reimplemented in the transform processor in the future.\nFor this reason, the processor is not included in the contrib distribution.\n\nThe logs transform processor can be used to apply log operators to logs coming from any receiver.\nPlease refer to config.go for the config spec.\n\nExamples:\n\nyaml\nprocessors:\n  logstransform:\n    operators:\n      - type: regexparser\n        regex: '^(?P\\d{4}-\\d{2}-\\d{2}) (?P[A-Z]) (?P.)$'\n        timestamp:\n          parsefrom: body.time\n          layout: \"%Y-%m-%d\"\n        severity:\n          parsefrom: body.sev\n\nRefer to config.yaml for detailed\nexamples on using the processor.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/logstransformprocessor/README.md",
    "repoPath": "processor/logstransformprocessor"
  },
  "lookupprocessor": {
    "description": "See the official lookupprocessor documentation for details.",
    "pipelineTypes": [
      "logs",
      "traces",
      "metrics"
    ],
    "stability": [
      {
        "level": "development",
        "type": "logs"
      },
      {
        "level": "development",
        "type": "traces"
      },
      {
        "level": "development",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/lookupprocessor/README.md",
    "repoPath": "processor/lookupprocessor"
  },
  "metricsgenerationprocessor": {
    "description": "See the official metricsgenerationprocessor documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/metricsgenerationprocessor/README.md",
    "repoPath": "processor/metricsgenerationprocessor"
  },
  "metricstarttimeprocessor": {
    "description": "See the official metricstarttimeprocessor documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/metricstarttimeprocessor/README.md",
    "repoPath": "processor/metricstarttimeprocessor"
  },
  "metricstransformprocessor": {
    "description": "See the official metricstransformprocessor documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/metricstransformprocessor/README.md",
    "repoPath": "processor/metricstransformprocessor"
  },
  "probabilisticsamplerprocessor": {
    "description": "The probabilistic sampler processor supports several modes of sampling\nfor spans and log records.  Sampling is performed on a per-request\nbasis, considering individual items statelessly.  For whole trace\nsampling, see\ntailsamplingprocessor.\n\nFor trace spans, this sampler supports probabilistic sampling based on\na configured sampling percentage applied to the TraceID.  In addition,\nthe sampler recognizes a sampling.priority annotation, which can\nforce the sampler to apply 0% or 100% sampling.\n\nFor log records, this sampler can be configured to use the embedded\nTraceID and follow the same logic as applied to spans.  When the\nTraceID is not defined, the sampler can be configured to apply hashing\nto a selected log record attribute.  This sampler also supports\nsampling priority.",
    "pipelineTypes": [
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/probabilisticsamplerprocessor/README.md",
    "repoPath": "processor/probabilisticsamplerprocessor"
  },
  "redactionprocessor": {
    "description": "See the official redactionprocessor documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/redactionprocessor/README.md",
    "repoPath": "processor/redactionprocessor"
  },
  "remotetapprocessor": {
    "description": "The Remote Tap processor, which can be positioned anywhere in a pipeline, allows\ndata to pass through to the next component. Simultaneously, it makes a portion\nof the data accessible to WebSocket clients connecting on a configurable port.\nThis functionality resembles that of the Unix tee command, which enables data\nto flow through while duplicating and redirecting it for inspection.\n\nTo avoid overloading clients, the amount of telemetry duplicated over \nany open WebSockets is rate limited by an adjustable amount.",
    "pipelineTypes": [
      "logs",
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/remotetapprocessor/README.md",
    "repoPath": "processor/remotetapprocessor"
  },
  "resourcedetectionprocessor": {
    "description": "The Resource Detection processor can be used to detect resource information from the host,\nin a format that conforms to the OpenTelemetry resource semantic conventions, and append or\noverride the resource value in telemetry data with this information.\n\nNote\nIf a configured resource detector fails, the error will propagate and stop the collector from starting.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/resourcedetectionprocessor/README.md",
    "repoPath": "processor/resourcedetectionprocessor"
  },
  "resourceprocessor": {
    "description": "The resource processor can be used to apply changes on resource attributes.\nPlease refer to config.go for the config spec.\n\nattributes represents actions that can be applied on resource attributes.\nSee Attributes Processor for more details on supported attributes actions.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/resourceprocessor/README.md",
    "repoPath": "processor/resourceprocessor"
  },
  "schemaprocessor": {
    "description": "The Schema Processor is used to convert existing telemetry data or signals to a version of the semantic convention defined as part of the configuration.\nThe processor works by using a set of target schema URLs that are used to match incoming signals.\nOn a match, the processor will fetch the schema translation file (if not cached) set by the incoming signal and apply the transformations\nrequired to export as the target semantic convention version.\n\nFurthermore, it is also possible for organisations and vendors to publish their own semantic conventions and be used by this processor,\nbe sure to follow schema overview for all the details.\n\nFor a practical guide on how to use the processor, including migration workflows and monitoring, see the Operators Guide.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/schemaprocessor/README.md",
    "repoPath": "processor/schemaprocessor"
  },
  "spanprocessor": {
    "description": "The span processor modifies the span name based on its attributes or extract span attributes from the span name. It also allows\nto change span status. Please refer to config.go for the config spec.\n\nIt optionally supports the ability to include/exclude spans.\n\nThe following actions are supported:\n\n• name: Modify the name of attributes within a span\n• status: Modify the status of the span\n\n### Name a span\n\nThe following settings are required:\n\n• fromattributes: The attribute value for the keys are used to create a\nnew name in the order specified in the configuration.\n\nThe following settings can be optionally configured:\n\n• separator: A string, which is specified will be used to split values\n\nNote: If renaming is dependent on attributes being modified by the attributes\nprocessor, ensure the span processor is specified after the attributes\nprocessor in the pipeline specification.\n\nyaml\nspan:\n  name:\n    # fromattributes represents the attribute keys to pull the values from to generate the\n    # new span name.\n    fromattributes: [, , ...]\n    # Separator is the string used to concatenate various parts of the span name.\n    separator: \n\nExample:\n\nyaml\nspan:\n  name:\n    fromattributes: [\"db.svc\", \"operation\"]\n    separator: \"::\"\n\nRefer to config.yaml for detailed\nexamples on using the processor.\n\n### Extract attributes from span name\n\nTakes a list of regular expressions to match span name against and extract\nattributes from it based on subexpressions. Must be specified under the\ntoattributes section.\n\nThe following settings are required:\n\n• rules: A list of rules to extract attribute values from span name. The values\nin the span name are replaced by extracted attribute names. Each rule in the list\nis regex pattern string. Span name is checked against the regex and if the regex\nmatches then all named subexpressions of the regex are extracted as attributes\nand are added to the span. Each subexpression name becomes an attribute name and\nsubexpression matched portion becomes the attribute value. The matched portion\nin the span name is replaced by extracted attribute name. If the attributes\nalready exist in the span then they will be overwritten. The process is repeated\nfor all rules in the order they are specified. Each subsequent rule works on the\nspan name that is the output after processing the previous rule.\n• breakaftermatch (default = false): specifies if processing of rules should stop after the first\nmatch. If it is false rule processing will continue to be performed over the\nmodified span name.\n• keeporiginalname (default = false): specifies if the original span name should be kept after \nprocessing the rules. If it is true, the original span name will be kept,\notherwise it will be replaced with the placeholders of the captured attributes.\n\nyaml\nspan/toattributes:\n  name:\n    toattributes:\n      rules:\n        - regexp-rule1\n        - regexp-rule2\n        - regexp-rule3\n        ...\n      breakaftermatch: \n      keeporiginalname: \n\nExample:\n\nyaml\n# Let's assume input span name is /api/v1/document/12345678/update\n# Applying the following results in output span name /api/v1/document/{documentId}/update\n# and will add a new attribute \"documentId\"=\"12345678\" to the span.\nspan/toattributes:\n  name:\n    toattributes:\n      rules:\n        - ^\\/api\\/v1\\/document\\/(?P.)\\/update$\n\n# This example will add the same new \"documentId\"=\"12345678\" attribute,\n# but now resulting in an unchanged span name (/api/v1/document/12345678/update).\nspan/toattributeskeeporiginalname:\n  name:\n    toattributes:\n      keeporiginalname: true\n      rules:\n        - ^\\/api\\/v1\\/document\\/(?P.)\\/update$\n\n### Set status for span\n\nThe following setting is required:\n\n• code: Represents span status. One of the following values \"Unset\", \"Error\", \"Ok\".\n\nThe following setting is allowed only for code \"Error\":\n• description\n\nExample:\n\nyaml\n# Set status allows to set specific status for a given span. Possible values are\n# Ok, Error and Unset as per\n# https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md#set-status\n# The description field allows to set a human-readable message for errors.\nspan/setstatus:\n  status:\n    code: Error\n    description: \"some error description\"\n\nRefer to config.yaml for detailed\nexamples on using the processor.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/spanprocessor/README.md",
    "repoPath": "processor/spanprocessor"
  },
  "spanpruningprocessor": {
    "description": "See the official spanpruningprocessor documentation for details.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/spanpruningprocessor/README.md",
    "repoPath": "processor/spanpruningprocessor"
  },
  "sumologicprocessor": {
    "description": "The Sumo Logic processor (config name: sumologic)\nmodifies the metadata on logs, metrics and traces sent to [Sumo Logic][sumologicwebpage]\nso that the Sumo Logic [apps][sumologicapps] can make full use of the ingested data.\n\n[sumologicwebpage]: https://www.sumologic.com\n[sumologicapps]: https://www.sumologic.com/applications/",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/sumologicprocessor/README.md",
    "repoPath": "processor/sumologicprocessor"
  },
  "tailsamplingprocessor": {
    "description": "The tail sampling processor samples traces based on a set of defined policies. All spans for a given trace MUST be received by the same collector instance for effective sampling decisions.\nBefore performing sampling, spans will be grouped by traceid. Therefore, the tail sampling processor can be used directly without the need for the groupbytraceprocessor.\n\nThis processor must be placed in pipelines after any processors that rely on context, e.g. k8sattributes. It reassembles spans into new batches, causing them to lose their original context.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/tailsamplingprocessor/README.md",
    "repoPath": "processor/tailsamplingprocessor"
  },
  "transformprocessor": {
    "description": "[!NOTE]\nThis documentation applies only to version 0.120.0 and later. Configuration from previous version is still supported, but no longer documented in this README. For information on earlier versions, please refer to the previous documentation.\n\nThe Transform Processor modifies telemetry based on configuration using the OpenTelemetry Transformation Language (OTTL).\n\nFor each signal type, the processor takes a list of statements and executes them against the incoming telemetry, following the order specified in the configuration.\nEach statement can access and transform telemetry using functions, and allows the use of a condition to help decide whether the function should be executed.\n\n• Config\n• Grammar\n• Supported functions\n• Examples\n• Troubleshooting\n• Contributing\n• Feature Gate",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/transformprocessor/README.md",
    "repoPath": "processor/transformprocessor"
  },
  "unrollprocessor": {
    "description": "See the official unrollprocessor documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/unrollprocessor/README.md",
    "repoPath": "processor/unrollprocessor"
  },
  "alertmanagerexporter": {
    "description": "Exports OTEL Events (SpanEvent in Tracing added by AddEvent API and Log Records) as Alerts to Alertmanager back-end to notify Errors or Change events.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "traces"
      },
      {
        "level": "development",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/alertmanagerexporter/README.md",
    "repoPath": "exporter/alertmanagerexporter"
  },
  "alibabacloudlogserviceexporter": {
    "description": "This exporter supports sending OpenTelemetry data to LogService.\n\n# Configuration options:\n\n• endpoint (required): LogService's Endpoint.\n• project (required): LogService's Project Name.\n• logstore (required): LogService's store Name. For metrics data, you should use metric store.\n• accesskeyid (optional): AlibabaCloud access key id.\n• accesskeysecret (optional): AlibabaCloud access key secret.\n• securitytoken (optional): AlibabaCloud security token for STS credentials.\n• ecsramrole (optional): set AlibabaCLoud ECS ram role if you are using ACK.\n• tokenfilepath (optional): Set token file path if you are using ACK.\n\n# Example:",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/alibabacloudlogserviceexporter/README.md",
    "repoPath": "exporter/alibabacloudlogserviceexporter"
  },
  "awscloudwatchlogsexporter": {
    "description": "AWS CloudWatch Logs Exporter sends logs data to AWS CloudWatch Logs.\nAWS credentials are retrieved from the default credential chain.\n\nNOTE: OpenTelemetry Logging support is experimental, hence this exporter is subject to change.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/awscloudwatchlogsexporter/README.md",
    "repoPath": "exporter/awscloudwatchlogsexporter"
  },
  "awsemfexporter": {
    "description": "This exporter converts OpenTelemetry metrics to \nAWS CloudWatch Embedded Metric Format(EMF)\nand then sends them directly to CloudWatch Logs using the \nPutLogEvents API.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/awsemfexporter/README.md",
    "repoPath": "exporter/awsemfexporter"
  },
  "awskinesisexporter": {
    "description": "The kinesis exporter currently exports dynamic encodings to the configured kinesis stream.\nThe exporter relies heavily on the kinesis.PutRecords api to reduce network I/O and reduces records into smallest atomic representation\nto avoid hitting the hard limits placed on Records (No greater than 1Mb).\nThis producer will block until the operation is done to allow for retryable and queued data to help during high loads.\n\nThe following settings are required:\n• aws\n    - streamname (no default): The name of the Kinesis stream to export to.\n\nThe following settings can be optionally configured:\n• aws\n    - kinesisendpoint (no default)\n    - region (default = us-west-2): the region that the kinesis stream is deployed in\n    - role (no default): The role to be used in order to send data to the kinesis stream\n• encoding\n    - name (default = otlp): defines the export type to be used to send to kinesis (available is otlpproto, otlpjson, zipkinproto, zipkinjson, jaegerproto)\n      - Note : otlpjson is considered experimental and should not be used for production environments. \n    - compression (default = none): allows to set the compression type (defaults BestSpeed for all) before forwarding to kinesis (available is flate, gzip, zlib or none)\n• maxrecordsperbatch (default = 500, PutRecords limit): The number of records that can be batched together then sent to kinesis.\n• maxrecordsize (default = 1Mb, PutRecord(s) limit on record size): The max allowed size that can be exported to kinesis\n• timeout (default = 5s): Is the timeout for every attempt to send data to the backend.\n• retryonfailure\n  - enabled (default = true)\n  - initialinterval (default = 5s): Time to wait after the first failure before retrying; ignored if enabled is false\n  - maxinterval (default = 30s): Is the upper bound on backoff; ignored if enabled is false\n  - maxelapsedtime (default = 120s): Is the maximum amount of time spent trying to send a batch; ignored if enabled is false\n• sendingqueue\n  - enabled (default = true)\n  - numconsumers (default = 10): Number of consumers that dequeue batches; ignored if enabled is false\n  - queuesize (default = 1000): Maximum number of batches kept in memory before dropping data; ignored if enabled is false;\n  User should calculate this as numseconds  requestspersecond where:\n    - numseconds is the number of seconds to buffer in case of a backend outage\n    - requestspersecond is the average number of requests per seconds.\n\nExample Configuration:\n\nyaml\nexporters:\n  awskinesis:\n    aws:\n      streamname: raw-trace-stream\n      region: us-east-1\n      role: arn:test-role",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/awskinesisexporter/README.md",
    "repoPath": "exporter/awskinesisexporter"
  },
  "awss3exporter": {
    "description": "See the official awss3exporter documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/awss3exporter/README.md",
    "repoPath": "exporter/awss3exporter"
  },
  "awsxrayexporter": {
    "description": "This exporter converts OpenTelemetry spans to\nAWS X-Ray Segment Documents\nand then sends them directly to X-Ray using the\nPutTraceSegments API.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/awsxrayexporter/README.md",
    "repoPath": "exporter/awsxrayexporter"
  },
  "azureblobexporter": {
    "description": "See the official azureblobexporter documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/azureblobexporter/README.md",
    "repoPath": "exporter/azureblobexporter"
  },
  "azuredataexplorerexporter": {
    "description": "This exporter sends metrics, logs and trace data to\n  Azure Data Explorer,\n  Azure Synapse Data Explorer and\n  Real time analytics in Fabric",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/azuredataexplorerexporter/README.md",
    "repoPath": "exporter/azuredataexplorerexporter"
  },
  "azuremonitorexporter": {
    "description": "This exporter sends logs, traces and metrics to Azure Monitor.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/azuremonitorexporter/README.md",
    "repoPath": "exporter/azuremonitorexporter"
  },
  "bmchelixexporter": {
    "description": "Note: The exporter type has been renamed from bmchelix to bmchelix to follow the\nsnakecase naming convention. The old name bmchelix is preserved as a deprecated alias and\nwill continue to work, but a deprecation warning will be logged at startup. Please update your\nconfiguration to use bmchelix:.\n\nThis exporter supports sending metrics to BMC Helix Operations Management through its metric ingestion REST API.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/bmchelixexporter/README.md",
    "repoPath": "exporter/bmchelixexporter"
  },
  "cassandraexporter": {
    "description": "See the official cassandraexporter documentation for details.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/cassandraexporter/README.md",
    "repoPath": "exporter/cassandraexporter"
  },
  "clickhouseexporter": {
    "description": "This exporter supports sending OpenTelemetry data to ClickHouse.\nClickHouse is an open-source, high performance columnar OLAP database management system for real-time analytics using\nSQL.\nThroughput can be measured in rows per second or megabytes per second.\nIf the data is placed in the page cache, a query that is not too complex is processed on modern hardware at a speed of\napproximately 2-10 GB/s of uncompressed data on a single server.\nIf 10 bytes of columns are extracted, the speed is expected to be around 100-200 million rows per second.\n\nNote:\nBatching Recommendation\nFor optimal performance, ClickHouse recommends inserting data in large batches:\nWe recommend inserting data in packets of at least 5000 rows, or no more than a single request per second. When inserting to a MergeTree table from a tab-separated dump, the insertion speed can be from 50 to 200 MB/s.\n\nTo achieve this natively, enable batching within the exporter's sendingqueue configuration. You do not need to add the external batch processor to your collector pipeline. Relying on the exporter's internal batching is the recommended approach to avoid data-loss issues associated with the external processor.\n\nEnable it by adding a batch block inside sendingqueue:\n\nyaml\nexporters:\n  clickhouse:\n    endpoint: tcp://127.0.0.1:9000\n    sendingqueue:\n      # numconsumers controls how many batches are inserted into ClickHouse\n      # concurrently.\n      numconsumers: 10\n      batch:\n        minsize: 5000      # rows per INSERT (items sizer); tune to your workload\n        flushtimeout: 5s   # flush a partial batch after this delay\n\nIf you are migrating from a pipeline that uses the standalone batch processor, remove batch from the pipeline's processors list and configure sendingqueue.batch instead. For durability across restarts, also set sendingqueue.storage to a storage extension so queued batches survive a crash (at-least-once delivery).",
    "pipelineTypes": [
      "profiles",
      "metrics",
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/clickhouseexporter/README.md",
    "repoPath": "exporter/clickhouseexporter"
  },
  "coralogixexporter": {
    "description": "The Coralogix exporter sends traces, metrics and logs to Coralogix.\n\nPlease review the Collector's security\ndocumentation,\nwhich contains recommendations on securing sensitive information such as the\nAPI key required by this exporter.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/coralogixexporter/README.md",
    "repoPath": "exporter/coralogixexporter"
  },
  "datadogexporter": {
    "description": "Please review the Collector's security documentation, which contains recommendations on securing sensitive information such as the API key required by this exporter.\n\nThe Datadog Exporter now skips APM stats computation by default. It is recommended to only use the Datadog Connector in order to compute APM stats.\nTo temporarily revert to the previous behavior, disable the exporter.datadogexporter.DisableAPMStats feature gate. Example: otelcol --config=config.yaml --feature-gates=-exporter.datadogexporter.DisableAPMStats\n\nFind the full configs of Datadog exporter and their usage in collector.yaml. More example configs can be found in the official documentation.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/datadogexporter/README.md",
    "repoPath": "exporter/datadogexporter"
  },
  "datasetexporter": {
    "description": "This exporter sends logs to DataSet.\n\nSee the Getting Started guide.",
    "pipelineTypes": [
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/datasetexporter/README.md",
    "repoPath": "exporter/datasetexporter"
  },
  "dorisexporter": {
    "description": "This exporter supports sending traces, metrics, and logs data to Apache Doris (version >= 2.1.1).",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/dorisexporter/README.md",
    "repoPath": "exporter/dorisexporter"
  },
  "elasticsearchexporter": {
    "description": "This exporter supports sending logs, metrics, traces and profiles to Elasticsearch.\n\nThe Exporter is API-compatible with Elasticsearch 7.17.x, 8.x, and 9.x. Certain features of the exporter,\nsuch as the otel mapping mode, may require newer versions of Elasticsearch. Limited effort will\nbe made to support EOL versions of Elasticsearch -- see https://www.elastic.co/support/eol.",
    "pipelineTypes": [
      "metrics",
      "profiles",
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      },
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/elasticsearchexporter/README.md",
    "repoPath": "exporter/elasticsearchexporter"
  },
  "faroexporter": {
    "description": "The Faro exporter sends telemetry data to a Faro endpoint.",
    "pipelineTypes": [
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/faroexporter/README.md",
    "repoPath": "exporter/faroexporter"
  },
  "fileexporter": {
    "description": "Writes telemetry data to files on disk.\n\nUse the OTLP JSON File receiver to read the data back into the collector (as long as the data was exported using OTLP JSON format).\n\nExporter supports the following features：\n\n• Support for writing pipeline data to a file.\n\n• Support for rotation of telemetry files.\n\n• Support for compressing the telemetry data before exporting.\n\n• Support for writing into multiple files, where the file path is determined by a resource attribute.\n\nPlease note that there is no guarantee that exact field names will remain stable.\n\nThe official opentelemetry-collector-contrib container does not have a writable filesystem by default since it's built on the scratch layer.\nAs such, you will need to create a writable directory for the path.  You could do this by mounting a volume with flags such as rw or rwZ.\n\nOn Linux, and given a otel-collector-config.yaml with a file exporter whose path is prefixed with /file-exporter,\nbash\n# linux needs +x to list a directory.  You can use a+ instead of o+ for the mode if you want to ensure your user and group has access.\nmkdir --mode o+rwx file-exporter\n# z is an SELinux construct that is ignored on other systems\ndocker run -v \"./file-exporter:/file-exporter:rwz\" -v \"otel-collector-config.yaml:/etc/otelcol-contrib/config.yaml\" otel/opentelemetry-collector-contrib:latest\n\nNote this same syntax for volumes will work with docker-compose.\n\nYou could also modify the base image and manually build your own container to have a writeable directory or change the runas uid if needed, but this is more involved.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/fileexporter/README.md",
    "repoPath": "exporter/fileexporter"
  },
  "googlecloudexporter": {
    "description": "This exporter can be used to send metrics to Google Cloud Monitoring\n(formerly Stackdriver), traces to Google Cloud Trace,\nand logs to Google Cloud Logging.\n\nTo learn more about instrumentation and observability, including opinionated recommendations\nfor Google Cloud Observability, visit Instrumentation and\nobservability.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/googlecloudexporter/README.md",
    "repoPath": "exporter/googlecloudexporter"
  },
  "googlecloudpubsubexporter": {
    "description": "⚠️ This is a community-provided module. It has been developed and extensively tested at Collibra, but it is not officially supported by GCP.\n\nThis exporter sends OTLP messages to a Google Cloud Pubsub topic.\n\nThe following configuration options are supported:\n\n• project (Optional): The Google Cloud Project of the topics.\n• topic (Required): The topic name to send OTLP data over. The topic name should be a fully qualified resource\n  name (eg: projects/otel-project/topics/otlp).\n• compression (Optional): Set the payload compression, only gzip is supported. Default is no compression.\n• watermark Behaviour of how the ce-time attribute is set (see watermark section for more info)\n   behavior (Optional): current sets the ce-time attribute to the system clock, earliest sets the attribute to \n  the smallest timestamp of all the messages.\n   allowdrift (Optional): The maximum difference the ce-time attribute can be set from the system clock. When the\n  drift is set to 0, the maximum drift from the clock is allowed (only applicable to earliest).\n• endpoint (Optional): Override the default Pubsub Endpoint, useful when connecting to the PubSub emulator instance\n  or switching between global and regional service endpoints.\n• insecure (Optional): Allows performing “insecure” SSL connections and transfers, useful when connecting to a local\n  emulator instance. Only has effect if Endpoint is not \"\"\n• ordering: Configures the PubSub ordering feature, see \n  ordering section for more info.\n   enabled (default = false): Enables the ordering. Default is disabled.\n   fromresourceattribute (no default): resource attribute that will be used as the ordering key. Required when\n    ordering.enabled is true. If the resource attribute is missing or has an empty value, the messages will not be\n    ordered for this resource.\n   removeresourceattribute (default = false): if the ordering key resource attribute specified \n    fromresourceattribute should be removed from the resource attributes.\n• traces, metrics and logs (Optional): Allows overriding the standard OTLP Protobuf \n  encoding and the message attributes. \n  attributes.\n   encoding (Optional): An encoding extension, if not specified it uses the default Protobuf marshaller.\n   attributes (Optional): Attributes that will be added to the Pub/Sub message. \n\nyaml\nexporters:\n  googlecloudpubsub:\n    project: my-project\n    topic: projects/my-project/topics/otlp-traces",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/googlecloudpubsubexporter/README.md",
    "repoPath": "exporter/googlecloudpubsubexporter"
  },
  "googlecloudstorageexporter": {
    "description": "This exporter writes received OpenTelemetry data to a cloud storage bucket.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/googlecloudstorageexporter/README.md",
    "repoPath": "exporter/googlecloudstorageexporter"
  },
  "googlemanagedprometheusexporter": {
    "description": "This exporter can be used to send metrics (including trace exemplars) to Google Cloud Managed Service for Prometheus. It is one of several supported approaches for sending metrics to Google Cloud Managed Service for Prometheus.\n\nTo learn more about instrumentation and observability, including opinionated recommendations\nfor Google Cloud Observability, visit Instrumentation and\nobservability.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/googlemanagedprometheusexporter/README.md",
    "repoPath": "exporter/googlemanagedprometheusexporter"
  },
  "honeycombmarkerexporter": {
    "description": "Note: The exporter type has been renamed from honeycombmarker to honeycombmarker to follow the\nsnakecase naming convention. The old name honeycombmarker is preserved as a deprecated alias and\nwill continue to work, but a deprecation warning will be logged at startup. Please update your\nconfiguration to use honeycombmarker:.\n\nThis exporter allows creating markers, via the Honeycomb Markers API, based on the look of incoming telemetry.\n\nThe following configuration options are supported:\n\n• apikey (Required): This is the API key for your Honeycomb account.\n• apiurl (Optional): This sets the hostname to send marker data to. If not set, will default to https://api.honeycomb.io/\n• markers (Required): This is a list of configurations to create an event marker. \n   type (Required): Specifies the marker type.\n   rules (Required): This is a list of OTTL rules that determine when to create an event marker. \n     logconditions (Required): A list of OTTL log conditions that determine a match. The marker will be created if ANY condition matches.\n   datasetslug (Optional): The dataset in which to create the marker. If not set, will default to all.\n   messagekey (Optional): The key of the attribute whose value will be used as the marker's message. If necessary the value will be converted to a string.\n   urlkey (Optional): The key of the attribute whose value will be used as the marker's url. If necessary the value will be converted to a string.\n\nlogconditions accept both the legacy un-prefixed form (body == \"x\") and the new OTTL path-context form (log.body == \"x\"). Resource and scope paths are also reachable via resource.attributes[\"...\"], scope.name, etc. Un-prefixed paths continue to work for now; the parser logs the rewritten statements on startup. It is recommended to switch to the new syntax to avoid breaking changes in the future.\n\nExample:\nyaml\nexporters:\n  honeycombmarker:\n    apikey: {{env:HONEYCOMBAPIKEY}}\n    markers:\n      # Creates a new marker anytime the exporter sees a k8s event with a reason of Backoff\n      - type: k8s-backoff-events\n        rules:\n          logconditions:\n            - IsMap(log.body) and IsMap(log.body[\"object\"]) and log.body[\"object\"][\"reason\"] == \"Backoff\"\n      # Path-context syntax allows referencing resource and scope fields directly\n      - type: deployment-events\n        rules:\n          logconditions:\n            - log.body[\"event\"] == \"deploy\" and resource.attributes[\"service.name\"] == \"checkout\"",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/honeycombmarkerexporter/README.md",
    "repoPath": "exporter/honeycombmarkerexporter"
  },
  "influxdbexporter": {
    "description": "This exporter supports sending tracing, metrics, and logging data to InfluxDB.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/influxdbexporter/README.md",
    "repoPath": "exporter/influxdbexporter"
  },
  "kafkaexporter": {
    "description": "Kafka exporter exports logs, metrics, and traces to Kafka. This exporter uses a synchronous producer\nthat blocks and does not batch messages, therefore it should be used with batch and queued retry\nprocessors for higher throughput and resiliency. Message payload encoding is configurable.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/kafkaexporter/README.md",
    "repoPath": "exporter/kafkaexporter"
  },
  "loadbalancingexporter": {
    "description": "This is an exporter that will consistently export spans, logs, and metrics depending on the routingkey configured. This ensures data from the same source is always routed to the same backend, enabling stateful downstream processing like log reduction, throttling, and tail-based sampling.\n\n[!NOTE]\nThe exporter type has been renamed from loadbalancing to loadbalancing to follow the lowersnakecase naming convention. The old name loadbalancing is preserved as a deprecated alias, but users should migrate configuration to use loadbalancing:.\n\nThe options for routingkey are: service, traceID, metric (metric name), resource, streamID, attributes.\n\n| routingkey | can be used for            |\n| ----------- | -------------------------- |\n| service     | spans, logs, metrics       |\n| traceID     | spans, logs                |\n| resource    | logs, metrics              |\n| metric      | metrics                    |\n| streamID    | metrics                    |\n| attributes  | spans, logs, metrics       |\n\nIf no routingkey is configured, the default routing mechanism is traceID for traces, service for logs, and service for metrics. This means that spans belonging to the same traceID (or service.name, when service is used as the routingkey) will be sent to the same backend. For logs, this ensures all logs from the same service are consistently routed to the same backend.\n\nIt requires a source of backend information to be provided: static, with a fixed list of backends, or DNS, with a hostname that will resolve to all IP addresses to use (such as a Kubernetes headless service). The DNS resolver will periodically check for updates.\n\nNote that either the Trace ID or Service name is used for the decision on which backend to use: the actual backend load isn't taken into consideration. Even though this load-balancer won't do round-robin balancing of the batches, the load distribution should be very similar among backends with a standard deviation under 5% at the current configuration.\n\nThis load balancer is especially useful for backends configured with tail-based samplers or red-metrics-collectors, which make a decision based on the view of the full trace.\n\nWhen a list of backends is updated, some of the signals will be rerouted to different backends.\nAround R/N of the \"routes\" will be rerouted differently, where:\n\n• A \"route\" is either a trace ID or a service name mapped to a certain backend.\n• \"R\" is the total number of routes.\n• \"N\" is the total number of backends.\n\nThis should be stable enough for most cases, and the larger the number of backends, the less disruption it should cause. Still, if routing stability is important for your use case and your list of backends are constantly changing, consider using the groupbytrace processor. This way, traces are dispatched atomically to this exporter, and the same decision about the backend is made for the trace as a whole.\n\nThis also supports service name based exporting for traces. If you have two or more collectors that collect traces and then use spanmetrics connector to generate metrics and push to prometheus, there is a high chance of facing label collisions on prometheus if the routing is based on traceID because every collector sees the service+operation label. With service name based routing, each collector can only see one service name and can push metrics without any label collisions.",
    "pipelineTypes": [
      "metrics",
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/loadbalancingexporter/README.md",
    "repoPath": "exporter/loadbalancingexporter"
  },
  "logicmonitorexporter": {
    "description": "This exporter supports sending traces & logs to Logicmonitor.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/logicmonitorexporter/README.md",
    "repoPath": "exporter/logicmonitorexporter"
  },
  "logzioexporter": {
    "description": "This exporter supports sending trace and log data to Logz.io\n\n### The following configuration options are supported:\nLogz.io exporter is utilizing opentelemetry exporter helper for retryonfailure,sendingqueue and timeout settings\n• accounttoken (Required): Your logz.io account token for your tracing or logs account.\n• region Your logz.io account region code. Defaults to us. Required only if your logz.io region is different than US.\n• endpoint Custom endpoint, mostly used for dev or testing. This will override the region parameter.\n• retryonfailure \n    - enabled (default = true)\n    - initialinterval: Time to wait after the first failure before retrying; ignored if enabled is false  (default = 5s)\n    - maxinterval: Is the upper bound on backoff; ignored if enabled is false (default = 30s)\n    - maxelapsedtime: Is the maximum amount of time spent trying to send a batch; ignored if enabled is false (default = 300s)\n• sendingqueue\n    - enabled (default = true)\n    - numconsumers: Number of consumers that dequeue batches; ignored if enabled is false (default = 10)\n    - queuesize: Maximum number of batches kept in memory before dropping; ignored if enabled is false\n      User should calculate this as numseconds  requestspersecond where:\n        - numseconds is the number of seconds to buffer in case of a backend outage\n        - requestspersecond is the average number of requests per seconds.\n        - default = 1000\n• timeout: Time to wait per individual attempt to send data to a backend. default = 30s\n\n#### Tracing example:\n• We recommend using sendingqueue::batch option. Batching helps better compress the data and reduce the number of outgoing connections required to transmit the data.\n\nyaml\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: \"0.0.0.0:4317\"\n      http:\n        endpoint: \"0.0.0.0:4318\"\n  jaeger:\n    protocols:\n      thriftcompact:\n        endpoint: \"0.0.0.0:6831\"\n      thriftbinary:\n        endpoint: \"0.0.0.0:6832\"\n      grpc:\n        endpoint: \"0.0.0.0:14250\"\n      thrifthttp:\n        endpoint: \"0.0.0.0:14268\"\nexporters:\n  logzio/traces:\n    accounttoken: \"LOGZIOtraceTOKEN\"\n    region: \"us\"\nservice:\n  pipelines:\n    traces:\n      receivers: [ otlp,jaeger ]\n      exporters: [ logzio/traces ]\n  telemetry:\n    logs:\n      level: \"debug\"\n\n#### Logs example:\n• We recommend using sendingqueue::batch option. Batching helps better compress the data and reduce the number of outgoing connections required to transmit the data.\n• We recommend adding type attribute to classify your log records\n• We recommend adding resourcedetection processor to add metadata to your log records\n\nyaml\nreceivers:\n  filelog:\n    include: [ \"/private/var/log/.log\" ] # MacOs system logs\n    includefilename: false\n    includefilepath: true \n    operators:\n      - type: move\n        from: attributes[\"log.file.path\"]\n        to: attributes[\"logfilepath\"]\n    attributes:\n      type: >\nprocessors:\n  resourcedetection/system:\n    detectors: [ \"system\" ]\n    system:\n      hostnamesources: [ \"os\" ]\nexporters:\n  logzio/logs:\n    accounttoken: \"LOGZIOlogsTOKEN\"\n    region: \"us\"\nservice:\n  pipelines:\n    logs:\n      receivers: [filelog]\n      processors: [ resourcedetection/system ]\n      exporters: [logzio/logs]\n  telemetry:\n    logs:\n      level: \"debug\"\n\n#### Metrics:\nIn order to use the Prometheus backend you must use the standard prometheusremotewrite exporter as well. The following regions are supported and configured as follows. The Logz.io Listener URL for your region, configured to use port 8052 for http traffic, or port 8053 for https traffic.\nExample:\nyaml\nexporters:\n  prometheusremotewrite:\n    endpoint: \"https://listener.logz.io:8053\"\n    headers:\n      Authorization: \"Bearer LOGZIOprometheusTOKEN\"\n\nPutting these both together it would look like this in a full configuration:\n\nyaml\nreceivers:\n  jaeger:\n    protocols:\n      thrifthttp:\n        endpoint: \"0.0.0.0:14278\"\n\n  prometheus:\n    config:\n      scrapeconfigs:\n      - jobname: 'ratelimiter'\n        scrapeinterval: 15s\n        staticconfigs:\n          - targets: [ \"0.0.0.0:8889\" ]\n\nexporters:\n  logzio/traces:\n    accounttoken: \"LOGZIOtraceTOKEN\"\n    region: \"us\"\n\n  prometheusremotewrite:\n    endpoint: \"https://listener.logz.io:8053\"\n    headers:\n      Authorization: \"Bearer LOGZIOprometheusTOKEN\"\n    \nservice:\n  pipelines:\n    traces:\n      receivers: [jaeger]\n      exporters: [logzio/traces]\n\n    metrics:\n      receivers: [prometheus]\n      exporters: [prometheusremotewrite]\n  \n  telemetry:\n    logs:\n      level: debug #activate debug mode\n\n#### Scope Name\nWhen using the logs exporter with logs originating from instrumentation library (i.e opentelemetry log4j2 appender), the scopeName field will be added (if the field is populated in the original log).",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/logzioexporter/README.md",
    "repoPath": "exporter/logzioexporter"
  },
  "mezmoexporter": {
    "description": "See the official mezmoexporter documentation for details.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "deprecated",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/mezmoexporter/README.md",
    "repoPath": "exporter/mezmoexporter"
  },
  "opensearchexporter": {
    "description": "OpenSearch exporter supports sending OpenTelemetry signals as documents to OpenSearch.\n\nThe documents are sent using observability catalog schema.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/opensearchexporter/README.md",
    "repoPath": "exporter/opensearchexporter"
  },
  "otelarrowexporter": {
    "description": "Exports telemetry data using OpenTelemetry Protocol with Apache\nArrow components with\nsupport for both OpenTelemetry Protocol with Apache\nArrow and standard OpenTelemetry Protocol\n(OTLP) protocol via gRPC.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/otelarrowexporter/README.md",
    "repoPath": "exporter/otelarrowexporter"
  },
  "prometheusexporter": {
    "description": "Exports data in the Prometheus format, which allows it to be scraped by a Prometheus server.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/prometheusexporter/README.md",
    "repoPath": "exporter/prometheusexporter"
  },
  "prometheusremotewriteexporter": {
    "description": "Prometheus Remote Write Exporter sends OpenTelemetry metrics\nto Prometheus remote write compatible\nbackends\nsuch as Cortex, Mimir, and Thanos.\nBy default, this exporter requires TLS and offers queued retry capabilities.\n\n:warning: Non-cumulative monotonic, histogram, and summary OTLP metrics are\ndropped by this exporter.\n\nA design doc is available to document in detail\nhow this exporter works.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/prometheusremotewriteexporter/README.md",
    "repoPath": "exporter/prometheusremotewriteexporter"
  },
  "pulsarexporter": {
    "description": "Pulsar exporter exports logs, metrics, and traces to Apache Pulsar.\nThis exporter uses a synchronous producer that blocks and able to batch messages.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/pulsarexporter/README.md",
    "repoPath": "exporter/pulsarexporter"
  },
  "rabbitmqexporter": {
    "description": "Exports metrics, traces, and logs to RabbitMQ using the AMQP 0.9.1 protocol.\n\nMessages are published to the default exchange direct exchange, but optionally can be published to a different direct exchange. \n\nThis component expects that exchanges, queues, and bindings already exist - they are not currently created by this component.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/rabbitmqexporter/README.md",
    "repoPath": "exporter/rabbitmqexporter"
  },
  "sematextexporter": {
    "description": "This exporter supports sending metrics to Sematext Cloud in Influx line protocol format and logs using the Bulk Index Api format.",
    "pipelineTypes": [
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      },
      {
        "level": "development",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/sematextexporter/README.md",
    "repoPath": "exporter/sematextexporter"
  },
  "sentryexporter": {
    "description": "The Sentry Exporter allows you to send traces and logs to Sentry.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/sentryexporter/README.md",
    "repoPath": "exporter/sentryexporter"
  },
  "signalfxexporter": {
    "description": "This exporter can be used to send metrics, events, and trace correlation to SignalFx.\n\nApart from metrics, the exporter is also capable of sending metric metadata\n(properties and tags) to SignalFx. Currently, only metric metadata updates from\nthe k8scluster receiver are\nsupported.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "deprecated",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/signalfxexporter/README.md",
    "repoPath": "exporter/signalfxexporter"
  },
  "splunkhecexporter": {
    "description": "See the official splunkhecexporter documentation for details.",
    "pipelineTypes": [
      "profiles",
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "profiles"
      },
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/splunkhecexporter/README.md",
    "repoPath": "exporter/splunkhecexporter"
  },
  "stefexporter": {
    "description": "See the official stefexporter documentation for details.",
    "pipelineTypes": [
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/stefexporter/README.md",
    "repoPath": "exporter/stefexporter"
  },
  "sumologicexporter": {
    "description": "See the official sumologicexporter documentation for details.",
    "pipelineTypes": [
      "metrics",
      "logs",
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      },
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/sumologicexporter/README.md",
    "repoPath": "exporter/sumologicexporter"
  },
  "syslogexporter": {
    "description": "The Syslog exporter sends logs in [syslog][syslogwikipedia] format to a remote syslog server.\nIt supports syslog protocols [RFC5424][RFC5424] and [RFC3164][RFC3164] and can send data over TCP, UDP or Unix sockets.\nThe exporter aims to be compatible with the [Syslog receiver][syslogreceiver].\nThis means that syslog messages received via the Syslog receiver and exported via the Syslog exporter should be unchanged.",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/syslogexporter/README.md",
    "repoPath": "exporter/syslogexporter"
  },
  "tencentcloudlogserviceexporter": {
    "description": "This exporter supports sending OpenTelemetry log data to LogService.\n\n# Configuration options:\n\n• region (required): LogService's Region.\n• logset (required): LogService's LogSet ID.\n• topic (required): LogService's topic ID.\n• secretid (optional): TencentCloud secret id.\n• secretkey (optional): TencentCloud secret key.\n\n# Example:",
    "pipelineTypes": [
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/tencentcloudlogserviceexporter/README.md",
    "repoPath": "exporter/tencentcloudlogserviceexporter"
  },
  "tinybirdexporter": {
    "description": "See the official tinybirdexporter documentation for details.",
    "pipelineTypes": [
      "logs",
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/tinybirdexporter/README.md",
    "repoPath": "exporter/tinybirdexporter"
  },
  "zipkinexporter": {
    "description": "Exports data to a Zipkin back-end.\nBy default, this exporter requires TLS and offers queued retry capabilities.",
    "pipelineTypes": [
      "traces"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/exporter/zipkinexporter/README.md",
    "repoPath": "exporter/zipkinexporter"
  },
  "ackextension": {
    "description": "See the official ackextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/ackextension/README.md",
    "repoPath": "extension/ackextension"
  },
  "asapauthextension": {
    "description": "See the official asapauthextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/asapauthextension/README.md",
    "repoPath": "extension/asapauthextension"
  },
  "awsproxy": {
    "description": "See the official awsproxy documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/awsproxy/README.md",
    "repoPath": "extension/awsproxy"
  },
  "azureauthextension": {
    "description": "This extension can be used in two directions:\n\n• In exporters (outbound): attaches the collector's Azure identity as a bearer token to outgoing requests.\n• In receivers (inbound): when wired as an extensionauth.Server (for example, protocols.http.auth.authenticator: azureauth), validates incoming bearer tokens as OIDC JWTs against a configured issuer and audience. Requires the server block (see Inbound JWT validation).\n\nSecurity advisory: Versions v0.124.0 through v0.150.0 contain a server-side authentication bypass (GHSA-pjv4-3c63-699f). Do not use azureauth under a receiver auth: block on those versions. The outbound exporter usage is unaffected.\n\nAdditionally, the extension also implements azcore.TokenCredential so that Azure components can get the token by running the function GetToken. If the component supports HTTP client, then this should not be necessary, as the token will be placed in the authorization header.\n\nIt supports 4 different types of authentication:\n\n• Managed identity for Azure resources\n• Workload identity for Kubernetes\n• Service principal with either a client secret or client certificate path for non Azure.\n• And the default credentials. This is not recommended for production.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/azureauthextension/README.md",
    "repoPath": "extension/azureauthextension"
  },
  "basicauthextension": {
    "description": "This extension implements both configauth.ServerAuthenticator and configauth.ClientAuthenticator to authenticate clients and servers using Basic Authentication. The authenticator type has to be set to basicauth.\n\nWhen used as ServerAuthenticator, if the authentication is successful client.Info.Auth will expose the following attributes:\n\n• username: The username of the authenticated user.\n• raw: Raw base64 encoded credentials.\n\nThe configuration should specify only one instance of basicauth extension for either client or server authentication. \n\nThe following are the configuration options:\n\n• htpasswd.file:  The path to the htpasswd file.\n• htpasswd.inline: The htpasswd file inline content.\n• clientauth.username: Username to use for client authentication.\n• clientauth.usernamefile: Path to a file containing the username. If set, takes precedence over username. The file is watched for changes, allowing rotation without restarting the collector.\n• clientauth.password: Password to use for client authentication.\n• clientauth.passwordfile: Path to a file containing the password. If set, takes precedence over password. The file is watched for changes, allowing rotation without restarting the collector.\n\nTo configure the extension as a server authenticator, either one of htpasswd.file or htpasswd.inline has to be set. If both are configured, htpasswd.inline credentials take precedence.\n\nTo configure the extension as a client authenticator, clientauth has to be set.\n\nIf both the options are configured, the extension will throw an error.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/basicauthextension/README.md",
    "repoPath": "extension/basicauthextension"
  },
  "bearertokenauthextension": {
    "description": "This extension implements both configauth.ServerAuthenticator and configauth.ClientAuthenticator. It can be used in both http and gRPC exporters inside the auth settings, as a means to embed a static token for every RPC call that will be made.\n\nThe authenticator type has to be set to bearertokenauth.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/bearertokenauthextension/README.md",
    "repoPath": "extension/bearertokenauthextension"
  },
  "cgroupruntimeextension": {
    "description": "See the official cgroupruntimeextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/cgroupruntimeextension/README.md",
    "repoPath": "extension/cgroupruntimeextension"
  },
  "datadogextension": {
    "description": "The Datadog Extension enables collector configuration and build info to be viewed in both Datadog Infrastructure Monitoring and Fleet Automation. Specifically, collector info may be viewed in Infrastructure -> Hosts, Infrastructure -> Resources -> Catalog, and in limited preview, Integrations -> Fleet Automation.\n\nYou may configure this extension in service, using the following configuration values:\napi::key: a Datadog API Key, required\napi::site: your Datadog site value (e.g. us5.datadoghq.com), defaults to \"datadoghq.com\"\nhostname: custom hostname; if you do not specify one, the extension will try to infer one. Note: If set, this must match the hostname value set in the Datadog Exporter, if also enabled in your collector. If hostname is left unset in both Datadog Exporter and Datadog Extension, the inferred hostname will match correctly.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/datadogextension/README.md",
    "repoPath": "extension/datadogextension"
  },
  "dbauth": {
    "description": "This extension supplies short-lived AWS RDS/Aurora IAM database authentication\ntokens to connection-oriented receivers through the dbauth framework\n(extension/dbauth and\nconfig/configdbauth).\n\nIt is a database-authentication provider, not a transport authenticator.\nUnlike the extensionauth extensions (sigv4auth, basicauth, …) that sign or\nauthenticate outgoing HTTP/gRPC requests, this extension produces the\nusername/secret a database driver uses to open a connection — here, an RDS IAM\nauth token used in place of a static password.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/dbauth/awsiamdbauthextension/README.md",
    "repoPath": "extension/dbauth/awsiamdbauthextension"
  },
  "encoding": {
    "description": "# Encoding extensions\n\nThe encoding extensions can be used by compatible receivers or exporters to encode or decode data into/from a specific\nformat. This is useful when the data is being sent to/from a system that expects a specific format and doesn't support\nthe OpenTelemetry protocol.\n\n🚧 Under active development 🚧",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/encoding/README.md",
    "repoPath": "extension/encoding"
  },
  "googleclientauthextension": {
    "description": "See the official googleclientauthextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/googleclientauthextension/README.md",
    "repoPath": "extension/googleclientauthextension"
  },
  "headerssetterextension": {
    "description": "The headerssetter extension implements ClientAuthenticator and is used to\nset requests headers in gRPC / HTTP exporters with values provided via\nextension configurations or requests metadata (context).\n\nUse cases include but are not limited to enabling multi-tenancy for observability\nbackends such as [Tempo], [Mimir], [Loki] and others by setting the X-Scope-OrgID\nheader to the value extracted from the context.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/headerssetterextension/README.md",
    "repoPath": "extension/headerssetterextension"
  },
  "healthcheckextension": {
    "description": "ℹ️ Migration Notice ℹ️\nThis extension is migrating to use component status reporting for health checks\nwhile maintaining full backward compatibility. See the Backward Compatibility\nsection for details about feature gates and migration options.\n\n⚠️⚠️⚠️ Warning ⚠️⚠️⚠️\nThe checkcollectorpipeline feature of this extension is not working as expected. It\nis recommended to not use the feature. The work to add a new version of the healthcheck extension\nthat relies on individual component status is in progress. To avoid breaking backwards compatibility,\nthe configuration will not be changed until the new extension is available as a replacement for this\none. See https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/11780 for more\ndetails.\n\nHealth Check extension enables an HTTP url that can be probed to check the\nstatus of the OpenTelemetry Collector. This extension can be used as a\nliveness and/or readiness probe on Kubernetes.\n\nThe following settings are available:\n\n• endpoint (default = localhost:13133): Address to publish the health check status. You can review the full list of ServerConfig. See our security best practices doc to understand how to set the endpoint in different environments.\n• path (default = \"/\"): Specifies the path to be configured for the health check server.\n• responsebody (default = {}): Specifies a static body that overrides the default response returned by the health check service.\n  - responsebody::healthy: Specifies the body returned when service is healthy.\n  - responsebody::unhealthy: Specifies the body returned when service is unhealthy.\n\nExample:\n\nyaml\nextensions:\n  healthcheck:\n  healthcheck/1:\n    endpoint: \"localhost:13\"\n    tls:\n      cafile: \"/path/to/ca.crt\"\n      certfile: \"/path/to/cert.crt\"\n      keyfile: \"/path/to/key.key\"\n    path: \"/health/status\"\n    responsebody:\n      healthy: I'm good\n      unhealthy: I'm bad!\n\nThe full list of settings exposed for this exporter is documented in LegacyConfig in config.go\nwith detailed sample configurations in testdata/config.yaml.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/healthcheckextension/README.md",
    "repoPath": "extension/healthcheckextension"
  },
  "healthcheckv2extension": {
    "description": "This is an experimental extension that is intended to replace the existing\nhealth check extension. As the stability level is currently development, users\nwishing to experiment with this extension will have to build a custom collector\nbinary using the OpenTelemetry Collector Builder.\nHealth check extension V2 has new functionality that can be opted-in to, and\nalso supports original healthcheck extension functionality with the exception\nof the checkcollectorpipeline feature. See the warning below.\n\n⚠️⚠️⚠️ Warning ⚠️⚠️⚠️\nThe checkcollectorpipeline feature of this extension was not working as expected and has been\nremoved. The config remains for backwards compatibility, but it too will be removed in the future.\nUsers wishing to monitor pipeline health should use the v2 functionality described below and\nopt-in to component health as described in\ncomponent health configuration.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/healthcheckv2extension/README.md",
    "repoPath": "extension/healthcheckv2extension"
  },
  "httpforwarderextension": {
    "description": "See the official httpforwarderextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/httpforwarderextension/README.md",
    "repoPath": "extension/httpforwarderextension"
  },
  "jaegerremotesampling": {
    "description": "This extension allows serving sampling strategies following the Jaeger's remote sampling API. This extension can be configured to proxy requests to a backing remote sampling server, which could potentially be a Jaeger Collector down the pipeline, or a static JSON file from the local file system.\n\nBy default, two listeners are made available:\n• localhost:5778, following the legacy remote sampling endpoint as defined by Jaeger\n• localhost:14250, following the gRPC remote sampling endpoint, also defined by Jaeger\n\nSee our security best practices doc to understand how to set the endpoint in different environments.\n\nNote that the port 14250 will clash with the Jaeger Receiver. When both are used, it's recommended to change this extension to use another port.\n\nAlthough this extension is derived from Jaeger, it can be used by any clients who can consume this standard, such as the OpenTelemetry Java SDK.\n\nThe reloadinterval option is used to poll a file when using the file source. It is used to control a local cache for a remote source.\n\nThe file source can be used to load files from the local file system or from remote HTTP/S sources. The remote source must be used with a gRPC server that provides a Jaeger remote sampling service.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/jaegerremotesampling/README.md",
    "repoPath": "extension/jaegerremotesampling"
  },
  "k8sleaderelector": {
    "description": "See the official k8sleaderelector documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/k8sleaderelector/README.md",
    "repoPath": "extension/k8sleaderelector"
  },
  "mcp": {
    "description": "This extension runs the OpenTelemetry MCP server which enables LLM to efficiently use OpenTelemetry stack.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/mcp/README.md",
    "repoPath": "extension/mcp"
  },
  "oauth2clientauthextension": {
    "description": "This extension provides OAuth2 Client Credentials flow authenticator for HTTP and gRPC based exporters. The extension\nfetches and refreshes the token after expiry automatically. For further details about OAuth2 Client Credentials flow (2-legged workflow)\nrefer https://datatracker.ietf.org/doc/html/rfc6749#section-4.4.\n\nThe authenticator type has to be set to oauth2client.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/oauth2clientauthextension/README.md",
    "repoPath": "extension/oauth2clientauthextension"
  },
  "observer": {
    "description": "# Observers\n\nObservers are implemented as an extension to discover networked endpoints like a Kubernetes pod, Docker container, or local listening port. Other components can subscribe to an observer instance to be notified of endpoints coming and going.\n\nCurrently the only component that uses observers is the receivercreator.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/observer/README.md",
    "repoPath": "extension/observer"
  },
  "oidcauthextension": {
    "description": "This extension implements a configauth.ServerAuthenticator, to be used in receivers inside the auth settings. The authenticator type has to be set to oidc.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/oidcauthextension/README.md",
    "repoPath": "extension/oidcauthextension"
  },
  "opampcustommessages": {
    "description": "# extension/opampcustommessages",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/opampcustommessages/README.md",
    "repoPath": "extension/opampcustommessages"
  },
  "opampextension": {
    "description": "See the official opampextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/opampextension/README.md",
    "repoPath": "extension/opampextension"
  },
  "pprofextension": {
    "description": "Performance Profiler extension enables the golang net/http/pprof endpoint.\nThis is typically used by developers to collect performance profiles and\ninvestigate issues with the service.\n\nThe following settings are required:\n\n• endpoint (default = localhost:1777): The endpoint in which the pprof will\nbe listening to. Use localhost: to make it available only locally, or\n\":\" to make it available on all network interfaces.\n• blockprofilefraction (default = 0): Fraction of blocking events that\nare profiled. A value  to show the call graph for this specific function.\nThe image in your browser should now be more clear and less cluttered.\n\nThe list command is also useful.\nType list  to see the source code of your function, annotated with the resource consumption (flat and cum columns like in the topN command).\nIf you prefer to view it in your browser, use the weblist  command instead.\nIn this view, you can see which line exactly used the most resources and start to improve it.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/pprofextension/README.md",
    "repoPath": "extension/pprofextension"
  },
  "remotetapextension": {
    "description": "This extension runs as a Web server that loads the remote observers that are registered against it.\n\nIt allows users of the collectors to visualize data going through pipelines.\n\nThe following settings are required:\n\n• endpoint (default = localhost:11000): The endpoint in which the web server will\nbe listening to. Use localhost: to make it available only locally, or\n\":\" to make it available on all network interfaces.\n\nExample:\nyaml\n\nextensions:\n  remotetap:\n\nThe full list of settings exposed for this exporter are documented in config.go.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/remotetapextension/README.md",
    "repoPath": "extension/remotetapextension"
  },
  "sdnotifyextension": {
    "description": "The sdnotify extension integrates the collector with the sdnotify(3) protocol.\n\nWhen running under a Type=notify (or Type=notify-reload) systemd unit, the collector will:\n\n• Send READY=1 once all pipelines have started.\n• Send STOPPING=1 when the process is shutting down after receiving SIGINT or\n  SIGTERM, so systemd knows the shutdown is intentional.\n• (only for Type=notify-reload) On SIGHUP send RELOADING=1 (paired with MONOTONICUSEC as required by\n  sdnotify(3)) so systemd's state machine correctly reflects that a reload is in progress.\n  The extension doesn't itself drive a reload or cycle the process on SIGHUP.\n  The OpenTelemetry Collector has its own SIGHUP handler\n  that performs an in-process reload.\n• When systemd has set WATCHDOGUSEC for the collector's PID, send\n  WATCHDOG=1 keep-alive notifications every WATCHDOGUSEC / 2 as recommended\n  by sdwatchdogenabled(3),\n  for as long as the collector is running, so systemd can restart the process if it hangs.\n\nIt is recommended that a daemon sends a keep-alive notification message to the service manager every half of the time returned here.\n\nNOTE: When $NOTIFYSOCKET is not set the extension logs a warning and stays a no-op — it will never fail collector startup.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/sdnotifyextension/README.md",
    "repoPath": "extension/sdnotifyextension"
  },
  "sigv4authextension": {
    "description": "See the official sigv4authextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/sigv4authextension/README.md",
    "repoPath": "extension/sigv4authextension"
  },
  "solarwindsapmsettingsextension": {
    "description": "See the official solarwindsapmsettingsextension documentation for details.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/solarwindsapmsettingsextension/README.md",
    "repoPath": "extension/solarwindsapmsettingsextension"
  },
  "storage": {
    "description": "The File Storage extension can persist state to the local file system.\n\nThe extension requires read and write access to a directory. A default directory can be used, but it must already exist in order for the extension to operate.\n\ndirectory is the relative or absolute path to the dedicated data storage directory. \nThe default directory is %ProgramData%\\Otelcol\\FileStorage on Windows and /var/lib/otelcol/filestorage otherwise.\n\ntimeout is the maximum time to wait for a file lock. This value does not need to be modified in most circumstances.\nThe default timeout is 1s.\n\nmaxsize sets the maximum on-disk size of each bbolt database file in bytes.\nWhen a write would need the file to grow past this limit, the write is rejected with a storage-full error.\nA value of 0 means unlimited size.\nWrites that fit into already-allocated free space are still allowed, even when the file is already at the configured limit.\nWhen rebound compaction is enabled, maxsize must be greater than or equal to both\ncompaction.reboundneededthresholdmib  1,048,576 and compaction.reboundtriggerthresholdmib  1,048,576.\n\nfsync when set, will force the database to perform an fsync after each write.  This helps to ensure database integrity if there is an interruption to the database process, but at the cost of performance.  See DB.NoSync for more information.\n\ncreatedirectory when set, will create the data storage and compaction directories if they do not already exist.\nBy default, the directories will be created with 0750 (rwxr-x---) permissions, minus the process umask.\nUse directorypermissions to customize directory creation permissions, minus the process umask.\n\nrecreate when set, the filestorage extension will automatically rename the corrupted bbolt database and create a new one when certain bbolt panics occur. \nSee (#35899)[https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/35899] for more details.\n\nIf the database fails to open due to corruption (resulting in a panic), the corrupted file will be automatically renamed to {filename}.{ISO 8601 timestamp}.backup and a new data file will be created from scratch. This allows the collector to continue operating even when encountering certain bbolt panics. If no corruption is detected, the existing database continues to be used normally.\nThere may still be scenarios where manually removing or renaming the file may be required, and this feature flag is not a panacea for all bbolt panics you can encounter.\n\n[!Note]\nWhen database corruption is detected and automatic recovery is triggered, the corrupted data will be moved to a .backup file. While this prevents complete data loss, the collector will start with a fresh database, which may lead to data duplication or loss of component state.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/storage/filestorage/README.md",
    "repoPath": "extension/storage/filestorage"
  },
  "sumologicextension": {
    "description": "This extension is to be used in conjunction with\n[sumologicexporter][sumologicexporter] in order to export telemetry data to\n[Sumo Logic][sumologic].\n\nIt manages:\n\n• authentication (passing the provided credentials to sumologicexporter\n  when configured as extension in the same service)\n• registration (storing the registration info locally after successful registration\n  for later use)\n• heartbeats\n\n[sumologicexporter]: ../../exporter/sumologicexporter/\n[sumologic]: https://www.sumologic.com/",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/sumologicextension/README.md",
    "repoPath": "extension/sumologicextension"
  },
  "tailstorage": {
    "description": "# Pebble Tail Storage Extension\n\nThe Pebble Tail Storage Extension stores pending trace data on local disk for the\nTail Sampling processor.\n\nThis extension is intended to be used with the Tail Sampling processor tailstorage\nsetting and is useful when in-memory pending-trace state would otherwise be too large.",
    "pipelineTypes": [],
    "stability": [],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/extension/tailstorage/pebbletailstorageextension/README.md",
    "repoPath": "extension/tailstorage/pebbletailstorageextension"
  },
  "countconnector": {
    "description": "The count connector can be used to count spans, span events, metrics, data points, and log records.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs",
      "profiles"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "profiles"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/countconnector/README.md",
    "repoPath": "connector/countconnector"
  },
  "datadogconnector": {
    "description": "See the official datadogconnector documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/datadogconnector/README.md",
    "repoPath": "connector/datadogconnector"
  },
  "exceptionsconnector": {
    "description": "See the official exceptionsconnector documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/exceptionsconnector/README.md",
    "repoPath": "connector/exceptionsconnector"
  },
  "failoverconnector": {
    "description": "Allows for health based routing between trace, metric, and log pipelines depending on the health of target downstream exporters.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/failoverconnector/README.md",
    "repoPath": "connector/failoverconnector"
  },
  "grafanacloudconnector": {
    "description": "See the official grafanacloudconnector documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/grafanacloudconnector/README.md",
    "repoPath": "connector/grafanacloudconnector"
  },
  "metricsaslogsconnector": {
    "description": "Deprecation Notice: The component type has been renamed from metricsaslogs to metricsaslogs\nto follow the OpenTelemetry snakecase naming convention.\nThe old name metricsaslogs still works but is deprecated and will be removed in a future release.\nPlease update your configuration to use metricsaslogs.\n\nThis connector converts OpenTelemetry metrics into logs, creating one log entry per metric data point. Each metric data point is transformed into a structured log record with configurable JSON body format.",
    "pipelineTypes": [
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "metrics"
      },
      {
        "level": "development",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/metricsaslogsconnector/README.md",
    "repoPath": "connector/metricsaslogsconnector"
  },
  "otlpjsonconnector": {
    "description": "Deprecation Notice: The component type has been renamed from otlpjson to otlpjson\nto follow the OpenTelemetry snakecase naming convention.\nThe old name otlpjson still works but is deprecated and will be removed in a future release.\nPlease update your configuration to use otlpjson.\n\nAllows to extract otlpjson data from incoming Logs and specifically the Body field.\nThe data is written in\nProtobuf JSON\nencoding\nusing OpenTelemetry\nprotocol.",
    "pipelineTypes": [
      "logs",
      "metrics",
      "traces"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "traces"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/otlpjsonconnector/README.md",
    "repoPath": "connector/otlpjsonconnector"
  },
  "roundrobinconnector": {
    "description": "Deprecation Notice: The component type has been renamed from roundrobin to roundrobin\nto follow the OpenTelemetry snakecase naming convention.\nThe old name roundrobin still works but is deprecated and will be removed in a future release.\nPlease update your configuration to use roundrobin.\n\nThe roundrobin connector can fork pipelines of the same type and equally split the load between them.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "beta",
        "type": "traces"
      },
      {
        "level": "beta",
        "type": "metrics"
      },
      {
        "level": "beta",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/roundrobinconnector/README.md",
    "repoPath": "connector/roundrobinconnector"
  },
  "routingconnector": {
    "description": "Routes logs, metrics or traces based on resource attributes to specific pipelines using OpenTelemetry Transformation Language (OTTL) statements as routing conditions.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/routingconnector/README.md",
    "repoPath": "connector/routingconnector"
  },
  "servicegraphconnector": {
    "description": "Note: The component type has been renamed from servicegraph to servicegraph.\nThe old name still works but is deprecated and will be removed in a future release.\nPlease update your configuration to use servicegraph.",
    "pipelineTypes": [
      "traces",
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/servicegraphconnector/README.md",
    "repoPath": "connector/servicegraphconnector"
  },
  "signaltometricsconnector": {
    "description": "See the official signaltometricsconnector documentation for details.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs",
      "profiles"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      },
      {
        "level": "alpha",
        "type": "profiles"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/signaltometricsconnector/README.md",
    "repoPath": "connector/signaltometricsconnector"
  },
  "slowsqlconnector": {
    "description": "Deprecation Notice: The component type has been renamed from slowsql to slowsql\nto follow the OpenTelemetry snakecase naming convention.\nThe old name slowsql still works but is deprecated and will be removed in a future release.\nPlease update your configuration to use slowsql.",
    "pipelineTypes": [
      "traces",
      "logs"
    ],
    "stability": [
      {
        "level": "development",
        "type": "traces"
      },
      {
        "level": "development",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/slowsqlconnector/README.md",
    "repoPath": "connector/slowsqlconnector"
  },
  "spanmetricsconnector": {
    "description": "Deprecation Notice: The component type has been renamed from spanmetrics to spanmetrics\nto follow the OpenTelemetry snakecase naming convention.\nThe old name spanmetrics still works but is deprecated and will be removed in a future release.\nPlease update your configuration to use spanmetrics.\n\n⚠️ Breaking Change Warning: \nThe default duration metrics unit will change from ms to s to adhere to the OpenTelemetry semantic conventions and a feature gate connector.spanmetrics.useSecondAsDefaultMetricsUnit is also added.\n\nCurrently, the feature gate is disabled by default, so the unit will remain ms. After one release cycle, the unit will switch to s and the feature gate will also be enabled by default.",
    "pipelineTypes": [
      "traces",
      "metrics"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/spanmetricsconnector/README.md",
    "repoPath": "connector/spanmetricsconnector"
  },
  "sumconnector": {
    "description": "The sum connector can be used to sum attribute values from spans, span events, metrics, data points, and log records.",
    "pipelineTypes": [
      "traces",
      "metrics",
      "logs"
    ],
    "stability": [
      {
        "level": "alpha",
        "type": "traces"
      },
      {
        "level": "alpha",
        "type": "metrics"
      },
      {
        "level": "alpha",
        "type": "logs"
      }
    ],
    "docsUrl": "https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/sumconnector/README.md",
    "repoPath": "connector/sumconnector"
  }
};
