import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB, CLSReportCallback } from 'web-vitals';
import { isDev } from './dev';

const logger: CLSReportCallback = ({ name, value, rating }): void =>
  isDev()
    ? console.log(`reported webvital ${name} with the following data:`, { value, rating })
    : undefined;

const reports = [onCLS, onFCP, onFCP, onINP, onLCP, onTTFB, onFID];

// TODO send report to analytics when in production
export function reportWebVitals() {
  for (const report of reports) {
    report(logger);
  }
}
