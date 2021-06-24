type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'green' | 'blue';

export interface SimpleOptions {
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
