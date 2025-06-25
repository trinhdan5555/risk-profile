// Reexport the native module. On web, it will be resolved to ThreatMetrixModule.web.ts
// and on native platforms to ThreatMetrixModule.ts
export { default } from './ThreatMetrixModule';
export { default as ThreatMetrixView } from './ThreatMetrixView';
export * from  './ThreatMetrix.types';
