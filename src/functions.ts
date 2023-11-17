import { superbytes, Metric } from 'superbytes';

export const validate = (bytes: number, metric: string, precision: number): boolean => {
  return Number.isFinite(bytes) && ['iec', 'si'].includes(metric.toLowerCase()) && precision <= 10;
};

export const convert = (bytes: number, metric: Metric, precision: number): string => {
  return superbytes(Math.abs(bytes), { metric: metric, precision: precision });
};
