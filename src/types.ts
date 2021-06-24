import { DataSourceJsonData } from '@grafana/data';

type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'green' | 'blue';

export interface GiphySourceQuery {
  search: string;
}

export interface GiphyPluginOptions extends DataSourceJsonData {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  color: CircleColor;
}

export interface GifObject {
  id: string;
  title: string;
  url: string;
}
