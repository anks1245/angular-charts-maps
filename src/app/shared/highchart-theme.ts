import * as Highcharts from 'highcharts';

export const lightTheme: Highcharts.Options = {
  chart: {
    backgroundColor: '#ffffff',
    style: { fontFamily: 'Inter, "Segoe UI", sans-serif' },
  },
  title: { style: { color: '#1e1e1e' } },
  subtitle: { style: { color: '#444444' } },
  xAxis: {
    gridLineColor: '#f0f0f0',
    labels: { style: { color: '#1e1e1e' } },
    lineColor: '#e0e0e0',
    tickColor: '#e0e0e0',
  },
  yAxis: {
    gridLineColor: '#f0f0f0',
    labels: { style: { color: '#1e1e1e' } },
    title: { style: { color: '#1e1e1e' } },
  },
  legend: {
    itemStyle: { color: '#1e1e1e' },
    itemHoverStyle: { color: '#007ad9' },
  },
  tooltip: {
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    style: { color: '#000000' },
  },
};

export const darkTheme: Highcharts.Options = {
  chart: {
    backgroundColor: '#1e1e1e',
    style: { fontFamily: 'Inter, "Segoe UI", sans-serif' },
  },
  title: { style: { color: '#ffffff' } },
  subtitle: { style: { color: '#cccccc' } },
  xAxis: {
    gridLineColor: '#333333',
    labels: { style: { color: '#ffffff' } },
    lineColor: '#444444',
    tickColor: '#444444',
  },
  yAxis: {
    gridLineColor: '#333333',
    labels: { style: { color: '#ffffff' } },
    title: { style: { color: '#ffffff' } },
  },
  legend: {
    itemStyle: { color: '#ffffff' },
    itemHoverStyle: { color: '#66b2ff' },
  },
  tooltip: {
    backgroundColor: '#2a2a2a',
    borderColor: '#555',
    style: { color: '#ffffff' },
  },
};
