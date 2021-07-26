import { MultiResponse, GIFObject } from 'giphy-api';
import { DataSourceJsonData } from '@grafana/data';

export interface GiphySourceQuery {
  search: string;
}

export interface GiphyPluginOptions extends DataSourceJsonData {
  search: string;
}

export { MultiResponse as GiphySearchResponse };

export interface GifObject extends Pick<GIFObject, 'id' | 'title' | 'url'> {}
