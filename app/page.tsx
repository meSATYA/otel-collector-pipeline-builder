"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { componentDocs } from "./component-docs";
import { componentLogos } from "./component-logos";

const data = {
  receivers: ["activedirectorydsreceiver","activedirectoryinvreceiver","aerospikereceiver","apachereceiver","apachesparkreceiver","awscloudwatchreceiver","awscontainerinsightreceiver","awsecscontainermetricsreceiver","awsfirehosereceiver","awslambdareceiver","awss3receiver","awsxrayreceiver","azureblobreceiver","azureeventhubreceiver","azurefunctionsreceiver","azuremonitorreceiver","carbonreceiver","chronyreceiver","ciscoosreceiver","cloudflarereceiver","cloudfoundryreceiver","collectdreceiver","couchdbreceiver","datadogreceiver","dnscheckreceiver","dockerstatsreceiver","elasticsearchreceiver","envoyalsreceiver","expvarreceiver","faroreceiver","filelogreceiver","filestatsreceiver","flinkmetricsreceiver","fluentforwardreceiver","githubreceiver","gitlabreceiver","googlecloudmonitoringreceiver","googlecloudpubsubpushreceiver","googlecloudpubsubreceiver","googlecloudspannerreceiver","haproxyreceiver","hostmetricsreceiver","httpcheckreceiver","huaweicloudcesreceiver","icmpcheckreceiver","iisreceiver","influxdbreceiver","jaegerreceiver","journaldreceiver","k8sclusterreceiver","k8seventsreceiver","k8sobjectsreceiver","kafkametricsreceiver","kafkareceiver","kubeletstatsreceiver","libhoneyreceiver","lokireceiver","macosunifiedloggingreceiver","memcachedreceiver","mongodbatlasreceiver","mongodbreceiver","mysqlreceiver","namedpipereceiver","netflowreceiver","nginxreceiver","nsxtreceiver","ntpreceiver","oracledbreceiver","osqueryreceiver","otelarrowreceiver","otlpjsonfilereceiver","podmanreceiver","postgresqlreceiver","pprofreceiver","prometheusreceiver","prometheusremotewritereceiver","pulsarreceiver","purefareceiver","purefbreceiver","rabbitmqreceiver","receivercreator","redfishreceiver","redisreceiver","riakreceiver","saphanareceiver","signalfxreceiver","simpleprometheusreceiver","skywalkingreceiver","snmpreceiver","snowflakereceiver","solacereceiver","splunkenterprisereceiver","splunkhecreceiver","sqlqueryreceiver","sqlserverreceiver","sshcheckreceiver","statsdreceiver","stefreceiver","syslogreceiver","systemdreceiver","tcpcheckreceiver","tcplogreceiver","tlscheckreceiver","udplogreceiver","vcenterreceiver","vcrreceiver","wavefrontreceiver","webhookeventreceiver","windowseventlogreceiver","windowsperfcountersreceiver","windowsservicereceiver","yanggrpcreceiver","zipkinreceiver","zookeeperreceiver"],
  processors: ["attributesprocessor","awsecsattributesprocessor","cardinalityguardianprocessor","coralogixprocessor","cumulativetodeltaprocessor","deltatocumulativeprocessor","deltatorateprocessor","drainprocessor","dynamicsamplingprocessor","filterprocessor","genainormalizerprocessor","geoipprocessor","groupbyattrsprocessor","groupbytraceprocessor","intervalprocessor","isolationforestprocessor","k8sattributesprocessor","logdedupprocessor","logstransformprocessor","lookupprocessor","metricsgenerationprocessor","metricstarttimeprocessor","metricstransformprocessor","probabilisticsamplerprocessor","redactionprocessor","remotetapprocessor","resourcedetectionprocessor","resourceprocessor","schemaprocessor","spanprocessor","spanpruningprocessor","sumologicprocessor","tailsamplingprocessor","transformprocessor","unrollprocessor"],
  exporters: ["alertmanagerexporter","alibabacloudlogserviceexporter","awscloudwatchlogsexporter","awsemfexporter","awskinesisexporter","awss3exporter","awsxrayexporter","azureblobexporter","azuredataexplorerexporter","azuremonitorexporter","bmchelixexporter","cassandraexporter","clickhouseexporter","coralogixexporter","datadogexporter","datasetexporter","dorisexporter","elasticsearchexporter","faroexporter","fileexporter","googlecloudexporter","googlecloudpubsubexporter","googlecloudstorageexporter","googlemanagedprometheusexporter","honeycombmarkerexporter","influxdbexporter","kafkaexporter","loadbalancingexporter","logicmonitorexporter","logzioexporter","mezmoexporter","opensearchexporter","otelarrowexporter","prometheusexporter","prometheusremotewriteexporter","pulsarexporter","rabbitmqexporter","sematextexporter","sentryexporter","signalfxexporter","splunkhecexporter","stefexporter","sumologicexporter","syslogexporter","tencentcloudlogserviceexporter","tinybirdexporter","zipkinexporter"],
  extensions: ["ackextension","asapauthextension","awsproxy","azureauthextension","basicauthextension","bearertokenauthextension","cgroupruntimeextension","datadogextension","dbauth","encoding","googleclientauthextension","headerssetterextension","healthcheckextension","healthcheckv2extension","httpforwarderextension","jaegerremotesampling","k8sleaderelector","mcp","oauth2clientauthextension","observer","oidcauthextension","opampcustommessages","opampextension","pprofextension","remotetapextension","sdnotifyextension","sigv4authextension","solarwindsapmsettingsextension","storage","sumologicextension","tailstorage"],
  connectors: ["countconnector","datadogconnector","exceptionsconnector","failoverconnector","grafanacloudconnector","metricsaslogsconnector","otlpjsonconnector","roundrobinconnector","routingconnector","servicegraphconnector","signaltometricsconnector","slowsqlconnector","spanmetricsconnector","sumconnector"],
} as const;

type Category = keyof typeof data;
type View = Category | "all" | "pipeline";
const order = Object.keys(data) as Category[];
const meta: Record<Category, { singular: string; path: string; icon: string; description: string }> = {
  receivers: { singular: "receiver", path: "receiver", icon: "↓", description: "Collect telemetry from your infrastructure and applications." },
  processors: { singular: "processor", path: "processor", icon: "⌁", description: "Transform, enrich, filter, and sample telemetry in flight." },
  exporters: { singular: "exporter", path: "exporter", icon: "↗", description: "Send telemetry to observability backends and destinations." },
  extensions: { singular: "extension", path: "extension", icon: "＋", description: "Add authentication, health, storage, and runtime capabilities." },
  connectors: { singular: "connector", path: "connector", icon: "⇄", description: "Join pipelines and convert telemetry between signals." },
};
const repo = "https://github.com/open-telemetry/opentelemetry-collector-contrib";

function displayName(name: string, suffix: string) {
  const base = name.endsWith(suffix) ? name.slice(0, -suffix.length) : name;
  const words: [string, string][] = [
    ["activedirectory", "Active Directory"], ["googlecloud", "Google Cloud"], ["alibabacloud", "Alibaba Cloud"],
    ["prometheusremotewrite", "Prometheus Remote Write"], ["opentelemetry", "OpenTelemetry"], ["elasticsearch", "Elasticsearch"],
    ["cloudwatchlogs", "CloudWatch Logs"], ["cloudwatch", "CloudWatch"], ["containerinsight", "Container Insights"], ["managedprometheus", "Managed Prometheus"],
    ["logicmonitor", "LogicMonitor"], ["sumologic", "Sumo Logic"], ["logzio", "Logz.io"], ["mezmo", "Mezmo"],
    ["kubeletstats", "Kubelet Stats"], ["windowseventlog", "Windows Event Log"], ["windowsperfcounters", "Windows Perf Counters"],
    ["splunkenterprise", "Splunk Enterprise"], ["splunkhec", "Splunk HEC"], ["opamp", "OpAMP"], ["oauth2", "OAuth 2"],
    ["healthcheck", "Health Check"], ["basicauth", "Basic Auth"], ["bearertokenauth", "Bearer Token Auth"],
    ["aws", "AWS"], ["azure", "Azure"], ["gcp", "GCP"], ["k8s", "Kubernetes"], ["otlp", "OTLP"], ["http", "HTTP"],
    ["tcp", "TCP"], ["udp", "UDP"], ["sql", "SQL"], ["snmp", "SNMP"], ["mcp", "MCP"], ["tls", "TLS"],
    ["metrics", " Metrics "], ["metric", " Metric "], ["logs", " Logs "], ["log", " Log "], ["stats", " Stats "], ["check", " Check "],
    ["cloud", " Cloud "], ["database", " Database "], ["event", " Event "], ["file", " File "], ["auth", " Auth "],
  ];
  let readable = base;
  words.forEach(([token, label]) => { readable = readable.replaceAll(token, ` ${label} `); });
  readable = readable.replace(/\s+/g, " ").trim();
  return readable ? readable.charAt(0).toUpperCase() + readable.slice(1) : name;
}

function objectDetails(category: Category, item: string) {
  const name = displayName(item, meta[category].singular);
  return { name, doc: componentDocs[item] };
}

function configKey(category: Category, item: string) {
  return item.endsWith(meta[category].singular) ? item.slice(0, -meta[category].singular.length) : item;
}

function PipelineBuilder({ selected, add, remove }: { selected: { category: Category; item: string }[]; add: (category: Category, item: string) => void; remove: (category: Category, item: string) => void }) {
  const [picker, setPicker] = useState<Category | null>(null);
  const [pickerQuery, setPickerQuery] = useState("");
  const [validation, setValidation] = useState<{ valid: boolean; issues: string[] } | null>(null);
  const grouped = Object.fromEntries(order.map((category) => [category, selected.filter((entry) => entry.category === category)])) as Record<Category, { category: Category; item: string }[]>;
  const signals = ["traces", "metrics", "logs", "profiles"].filter((signal) => selected.some(({ item }) => componentDocs[item]?.pipelineTypes.includes(signal)));
  const pipelineSignals = signals.length ? signals : ["traces", "metrics", "logs"];
  const receivers = grouped.receivers.map(({ item }) => configKey("receivers", item));
  const processors = grouped.processors.map(({ item }) => configKey("processors", item));
  const exporters = grouped.exporters.map(({ item }) => configKey("exporters", item));
  const extensions = grouped.extensions.map(({ item }) => configKey("extensions", item));
  const connectors = grouped.connectors.map(({ item }) => configKey("connectors", item));
  const forSignal = (category: Category, signal: string) => grouped[category].filter(({ item }) => !componentDocs[item]?.pipelineTypes.length || componentDocs[item].pipelineTypes.includes(signal)).map(({ item }) => configKey(category, item));
  const compatibleSignals = pipelineSignals.filter((signal) => forSignal("receivers", signal).length && forSignal("exporters", signal).length);
  const outputSignals = receivers.length && exporters.length ? compatibleSignals : pipelineSignals;
  const block = (label: string, values: string[]) => `${label}:\n${values.length ? values.map((value) => `  ${value}:\n    # TODO: add required ${value} settings from its README`).join("\n") : "  {}"}`;
  const yaml = [block("receivers", receivers), block("processors", processors), block("exporters", exporters), block("connectors", connectors), block("extensions", extensions), "service:", ...(extensions.length ? [`  extensions: [${extensions.join(", ")}]`] : []), "  pipelines:", ...outputSignals.map((signal) => `    ${signal}:\n      receivers: [${forSignal("receivers", signal).join(", ")}]\n      processors: [${forSignal("processors", signal).join(", ")}]\n      exporters: [${forSignal("exporters", signal).join(", ")}]`), ...(connectors.length ? ["  # Connectors must be added to compatible source and destination pipelines."] : [])].join("\n\n");
  const ready = compatibleSignals.length > 0;
  const copy = (value: string) => navigator.clipboard.writeText(value);
  const download = () => { const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([yaml], { type: "text/yaml" })); link.download = "otel-collector-config.yaml"; link.click(); URL.revokeObjectURL(link.href); };
  const validateCommand = "otelcol validate --config=otel-collector-config.yaml";
  const dockerValidateCommand = "docker run --rm -v \"$PWD/otel-collector-config.yaml:/etc/otelcol-contrib/config.yaml:ro\" otel/opentelemetry-collector-contrib:latest validate --config=/etc/otelcol-contrib/config.yaml";
  const command = "docker run --rm -p 4317:4317 -p 4318:4318 -v \"$PWD/otel-collector-config.yaml:/etc/otelcol-contrib/config.yaml\" otel/opentelemetry-collector-contrib:latest";
  const pickerItems = picker ? data[picker].filter((item) => item.toLowerCase().includes(pickerQuery.toLowerCase()) && !selected.some((entry) => entry.category === picker && entry.item === item)) : [];
  const openPicker = (category: Category) => { setPicker(category); setPickerQuery(""); };
  const choose = (category: Category, item: string) => { add(category, item); setPicker(null); setPickerQuery(""); };
  const validate = () => {
    const issues: string[] = [];
    if (!receivers.length) issues.push("Add at least one receiver.");
    if (!exporters.length) issues.push("Add at least one exporter.");
    if (receivers.length && exporters.length && !compatibleSignals.length) {
      issues.push("Select a receiver and exporter that support at least one common pipeline type.");
    }
    setValidation({ valid: issues.length === 0, issues });
  };

  useEffect(() => setValidation(null), [yaml]);
  return <section className="builder" id="pipeline-builder" aria-labelledby="builder-title">
    <div className="builder-heading"><div><p className="eyebrow"><span /> VISUAL PIPELINE DESIGNER</p><h2 id="builder-title">Build your telemetry pipeline</h2><p>Select objects from the catalog, review the flow, then export a deployable Collector configuration.</p></div><span className="selection-count">{selected.length} selected</span></div>
    <>
      <div className="workflow" aria-label="Pipeline workflow">
        {(["receivers", "processors", "exporters"] as Category[]).map((category, index) => <div className="workflow-stage" key={category}><div className="stage-title"><span>{index + 1}</span><strong>{category}</strong><small>{grouped[category].length}</small></div><div className="stage-items">{grouped[category].map(({ item }) => { const logo = componentLogos[item]; return <div className="flow-node" key={item}><img src={logo ? `./logos/${logo.slug}.svg` : "./logos/component-placeholder.svg"} alt="" /><span>{displayName(item, meta[category].singular)}</span><button onClick={() => remove(category, item)} aria-label={`Remove ${item}`}>×</button></div>; })}<button className="stage-placeholder" onClick={() => openPicker(category)}><span>+</span>Add {meta[category].singular}</button></div>{index < 2 && <b className="flow-arrow">→</b>}</div>)}
      </div>
      <div className="supporting-flow-heading"><span>Pipeline services</span><small>Optional components that connect pipelines or extend the Collector</small></div>
      <div className="workflow supporting-workflow" aria-label="Connector and extension workflow">
        {(["connectors", "extensions"] as Category[]).map((category, index) => <div className="workflow-stage" key={category}><div className="stage-title"><span>{index + 4}</span><strong>{category}</strong><small>{grouped[category].length}</small></div><div className="stage-items">{grouped[category].map(({ item }) => { const logo = componentLogos[item]; return <div className="flow-node" key={item}><img src={logo ? `./logos/${logo.slug}.svg` : "./logos/component-placeholder.svg"} alt="" /><span>{displayName(item, meta[category].singular)}</span><button onClick={() => remove(category, item)} aria-label={`Remove ${item}`}>×</button></div>; })}<button className="stage-placeholder" onClick={() => openPicker(category)}><span>+</span>Add {meta[category].singular}</button></div></div>)}
      </div>
      <div className="config-layout">
        <section className="yaml-panel">
          <header><div><strong>otel-collector-config.yaml</strong><small>{ready ? "Pipeline structure ready" : "Add at least one receiver and exporter"}</small></div><div>{selected.length > 0 && <button className="validate-config-button" onClick={validate}>✓ Validate</button>}<button onClick={() => copy(yaml)}>Copy</button><button onClick={download}>Download</button></div></header>
          {validation && <div className={`validation-result ${validation.valid ? "valid" : "invalid"}`} role="status"><div><strong>{validation.valid ? "Structure check passed" : "Configuration needs attention"}</strong><small>{validation.valid ? "Resolve every TODO, then run the Collector validator for component-level checks." : validation.issues.join(" ")}</small></div><code>{validateCommand}</code><div className="validation-actions"><button onClick={() => copy(validateCommand)}>Copy command</button><button onClick={() => copy(dockerValidateCommand)}>Copy Docker command</button><a href="https://opentelemetry.io/docs/collector/configuration/#location" target="_blank" rel="noreferrer">Validation docs ↗</a></div></div>}
          <pre><code>{yaml}</code></pre>
        </section>
        <aside className="deploy-panel"><p>DEPLOY COLLECTOR</p><h3>Run with Docker</h3><ol><li>Download the YAML configuration.</li><li>Fill every <code>TODO</code> using its component README.</li><li>Validate it with the Collector, then run the command below.</li></ol><pre>{command}</pre><button onClick={() => copy(command)}>Copy deploy command</button><div className={`readiness ${ready ? "ready" : ""}`}><span />{ready ? "Receiver and exporter selected" : "Pipeline needs a receiver and exporter"}</div></aside>
      </div>
    </>
    {picker && <div className="picker-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setPicker(null); }}><section className="component-picker" role="dialog" aria-modal="true" aria-labelledby="picker-title"><header><div><p>ADD TO PIPELINE</p><h3 id="picker-title">Choose a {meta[picker].singular}</h3></div><button onClick={() => setPicker(null)} aria-label="Close component picker">×</button></header><label><span>⌕</span><input autoFocus value={pickerQuery} onChange={(event) => setPickerQuery(event.target.value)} placeholder={`Search ${picker}…`} /></label><div className="picker-grid">{pickerItems.length ? pickerItems.map((item) => { const logo = componentLogos[item]; return <button key={item} onClick={() => choose(picker, item)}><img src={logo ? `./logos/${logo.slug}.svg` : "./logos/component-placeholder.svg"} alt="" /><span><strong>{displayName(item, meta[picker].singular)}</strong><small>{componentDocs[item]?.pipelineTypes.join(", ") || "No pipeline type specified"}</small></span><b>+</b></button>; }) : <p>No more matching {picker}.</p>}</div></section></div>}
  </section>;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<View>("all");
  const [open, setOpen] = useState<Set<Category>>(new Set());
  const [selected, setSelected] = useState<{ category: Category; item: string } | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [pipeline, setPipeline] = useState<{ category: Category; item: string }[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("otel-explorer-theme");
    const initial = saved === "light" || saved === "dark" ? saved : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); searchRef.current?.focus();
      }
      if (event.key === "Escape" && document.activeElement === searchRef.current) {
        setQuery(""); searchRef.current?.blur();
      } else if (event.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("otel-explorer-theme", next);
  };

  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.fromEntries(order.map((category) => [category, data[category].filter((item) => {
      if (!terms.length) return true;
      const doc = componentDocs[item];
      const searchable = [item, displayName(item, meta[category].singular), category, doc?.description, doc?.pipelineTypes.join(" ")].filter(Boolean).join(" ").toLowerCase();
      const compact = searchable.replace(/[^a-z0-9]/g, "");
      return terms.every((term) => searchable.includes(term) || compact.includes(term.replace(/[^a-z0-9]/g, "")));
    })])) as unknown as Record<Category, readonly string[]>;
  }, [query]);

  const total = order.reduce((sum, key) => sum + data[key].length, 0);
  const results = order.reduce((sum, key) => sum + filtered[key].length, 0);
  const visible = query.trim() ? order.filter((category) => filtered[category].length > 0) : active === "all" ? order : active === "pipeline" ? [] : [active];

  const search = (value: string) => {
    setQuery(value);
    if (value.trim()) setActive("all");
  };

  const jumpTo = (category: View) => {
    setActive(category);
    if (category === "pipeline") {
      requestAnimationFrame(() => requestAnimationFrame(() => document.getElementById("pipeline-builder")?.scrollIntoView({ behavior: "smooth", block: "start" })));
    } else if (category !== "all") {
      setOpen((current) => new Set(current).add(category));
      requestAnimationFrame(() => document.getElementById(category)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    } else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToPipeline = (category: Category, item: string) => setPipeline((current) => current.some((entry) => entry.category === category && entry.item === item) ? current : [...current, { category, item }]);
  const removeFromPipeline = (category: Category, item: string) => setPipeline((current) => current.filter((entry) => entry.category !== category || entry.item !== item));

  const toggle = (category: Category) => setOpen((current) => {
    const next = new Set(current);
    next.has(category) ? next.delete(category) : next.add(category);
    return next;
  });

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" onClick={() => jumpTo("all")} aria-label="OTel Collector Pipeline Builder home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span><strong>OTel </strong><strong>Collector </strong><small>Pipeline Builder</small></span>
        </a>
        <nav aria-label="Component categories">
          <p className="nav-label">Browse components</p>
          <button className={active === "all" ? "nav-item active" : "nav-item"} onClick={() => jumpTo("all")}>
            <span className="nav-icon grid-icon">••</span><span>All components</span><em>{total}</em>
          </button>
          {order.map((category) => <button key={category} className={active === category ? "nav-item active" : "nav-item"} onClick={() => jumpTo(category)}>
            <span className="nav-icon">{meta[category].icon}</span><span>{category}</span><em>{data[category].length}</em>
          </button>)}
          <p className="nav-label builder-label">Create</p>
          <button className={active === "pipeline" ? "nav-item active pipeline-nav" : "nav-item pipeline-nav"} onClick={() => jumpTo("pipeline")}><span className="nav-icon">◇</span><span>Pipeline builder</span><em>{pipeline.length}</em></button>
        </nav>
        <div className="sidebar-foot">
          <p><span className="pulse" /> Synced with main</p>
          <a href={repo} target="_blank" rel="noreferrer"><span className="github-dot">⌘</span> View repository <b>↗</b></a>
        </div>
      </aside>

      <section className="content" id="top">
        <header className="topbar">
          <div className="breadcrumb"><span>opentelemetry-collector-contrib</span><b>/</b><strong>{active === "all" ? "components" : active}</strong></div>
          <div className="topbar-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}><span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span><em>{theme === "dark" ? "Light" : "Dark"}</em></button><a className="repo-link" href={repo} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div>
        </header>

        <div className="page-wrap">
          <section className="hero">
            <div>
              <p className="eyebrow"><span /> OPEN SOURCE COMPONENT CATALOG</p>
              <h1>Find the right component.<br /><em>Build your pipeline.</em></h1>
              <p className="lede">Explore every receiver, processor, exporter, extension, and connector in the OpenTelemetry Collector Contrib repository.</p>
              <div className="hero-actions"><button className="primary-builder-cta" onClick={() => jumpTo("pipeline")}><span className="cta-mark">◇</span><span><strong>Design an OTel pipeline</strong><small>Visual workflow + Collector YAML</small></span><b>→</b></button><a href="#catalog" onClick={() => jumpTo("all")}>Browse components</a></div>
            </div>
            <button className="pipeline-preview" onClick={() => jumpTo("pipeline")} aria-label="Open visual pipeline builder"><span className="preview-label"><i /> PIPELINE BUILDER <em>Interactive</em></span><span className="preview-title"><strong>Design your collector flow</strong><small>Choose components and generate production-ready YAML.</small></span><span className="mini-flow"><b><i>↓</i><small>Receivers</small></b><em>→</em><b><i>⌁</i><small>Processors</small></b><em>→</em><b><i>↗</i><small>Exporters</small></b></span><span className="preview-footer"><small>Build · Configure · Deploy</small><b>Start building →</b></span></button>
          </section>

          <div className="search-row" id="catalog">
            <label className="search-box">
              <span>⌕</span>
              <input ref={searchRef} value={query} onChange={(e) => search(e.target.value)} placeholder="Search all components…" aria-label="Search components" />
              {query ? <button onClick={() => setQuery("")} aria-label="Clear search">×</button> : <kbd>⌘ K</kbd>}
            </label>
            <p><strong>{query ? results : total}</strong> {query ? "matches" : "components"} <span>across 5 categories</span></p>
          </div>

          <div className="quick-tabs" aria-label="Quick category filters">
            <button className={active === "all" ? "selected" : ""} onClick={() => jumpTo("all")}>All <small>{total}</small></button>
            {order.map((category) => <button key={category} className={active === category ? "selected" : ""} onClick={() => jumpTo(category)}>{category} <small>{data[category].length}</small></button>)}
            <button className={active === "pipeline" ? "selected builder-tab" : "builder-tab"} onClick={() => jumpTo("pipeline")}>Pipeline builder <small>{pipeline.length}</small></button>
          </div>

          {active === "pipeline" ? <PipelineBuilder selected={pipeline} add={addToPipeline} remove={removeFromPipeline} /> : <section className="component-list" aria-live="polite">
             {visible.map((category) => {
              const expanded = open.has(category) || Boolean(query);
              return <article className={`category-panel ${expanded ? "expanded" : ""}`} id={category} key={category}>
                <button className="panel-head" aria-expanded={expanded} onClick={() => toggle(category)}>
                  <span className={`category-symbol ${category}`}>{meta[category].icon}</span>
                  <span className="panel-copy"><span><strong>{category}</strong><em>{filtered[category].length}</em></span><small>{meta[category].description}</small></span>
                  <span className="expand-label">{expanded ? "Collapse" : "Explore"}<b>{expanded ? "−" : "+"}</b></span>
                </button>
                {expanded && <div className="panel-body">
                  {filtered[category].length ? <div className="component-grid">
                    {filtered[category].map((item) => {
                      const logo = componentLogos[item];
                      return <button className="component-card" key={item} onClick={() => setSelected({ category, item })}>
                      <span className={`card-glyph ${logo ? "brand-glyph" : "placeholder-glyph"}`} style={logo ? { color: logo.color } : undefined}><img src={logo ? `./logos/${logo.slug}.svg` : "./logos/component-placeholder.svg"} alt="" aria-hidden="true" /></span>
                      <span><strong>{displayName(item, meta[category].singular)}</strong><small>{item}</small></span>
                      <b aria-hidden="true">→</b>
                    </button>;})}
                  </div> : <div className="empty-state"><span>⌕</span><strong>No {category} found</strong><p>Try a broader search term.</p></div>}
                  <a className="browse-category" href={`${repo}/tree/main/${meta[category].path}`} target="_blank" rel="noreferrer">Browse {category} directory on GitHub <span>↗</span></a>
                </div>}
               </article>;
             })}
            {query.trim() && results === 0 && <div className="global-empty-state"><span>⌕</span><strong>No components match “{query.trim()}”</strong><p>Try a product name, component type, telemetry signal, or repository identifier.</p><button onClick={() => setQuery("")}>Clear search</button></div>}
          </section>}

          {selected && (() => {
            const details = objectDetails(selected.category, selected.item);
            const logo = componentLogos[selected.item];
            const githubDocs = details.doc?.docsUrl ?? `${repo}/blob/main/${meta[selected.category].path}/${selected.item}/README.md`;
            const sourcePath = details.doc?.repoPath ?? `${meta[selected.category].path}/${selected.item}`;
            return <div className="detail-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
              <aside className="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="detail-title">
                <button className="drawer-close" onClick={() => setSelected(null)} aria-label="Close component details">×</button>
                <div className={`detail-icon ${selected.category} ${logo ? "brand-detail-icon" : "placeholder-detail-icon"}`} style={logo ? { color: logo.color } : undefined}><img src={logo ? `./logos/${logo.slug}.svg` : "./logos/component-placeholder.svg"} alt={logo ? `${logo.title} logo` : `${meta[selected.category].singular} component symbol`} /></div>
                <p className="detail-type">{meta[selected.category].singular}</p>
                <h2 id="detail-title">{details.name}</h2>
                <code>{selected.item}</code>
                <section className="responsibility">
                  <p>RESPONSIBILITY</p>
                  <h3>{details.doc?.description ?? "This repository-internal directory does not have component documentation."}</h3>
                </section>
                <section className="feature-section">
                  <p>SUPPORTED PIPELINE TYPES</p>
                  {details.doc?.stability.length ? <div className="pipeline-types">{details.doc.stability.map(({ level, type }) => <span key={`${level}-${type}`}><b>{type}</b><small>{level}</small></span>)}</div> : <p className="not-specified">Not specified in the README stability table.</p>}
                </section>
                <button className={`pipeline-add ${pipeline.some((entry) => entry.category === selected.category && entry.item === selected.item) ? "added" : ""}`} onClick={() => addToPipeline(selected.category, selected.item)}>{pipeline.some((entry) => entry.category === selected.category && entry.item === selected.item) ? "✓ Added to pipeline" : "+ Add to pipeline"}</button>
                <a className="docs-button" href={githubDocs} target="_blank" rel="noreferrer">Open GitHub documentation <span>↗</span></a>
                <a className="source-button" href={`${repo}/tree/main/${sourcePath}`} target="_blank" rel="noreferrer">Browse source files</a>
              </aside>
            </div>;
          })()}

          <footer><span><i /><i /><i /> OpenTelemetry</span><p>Component data sourced from the contrib repository’s main branch.</p><a href={repo} target="_blank" rel="noreferrer">View source ↗</a></footer>
        </div>
      </section>
    </main>
  );
}
