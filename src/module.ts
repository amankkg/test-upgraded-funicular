import { DataQuery, DataQueryResponse, DataSourceApi, DataSourcePlugin } from '@grafana/data';

import { GiphyPluginOptions, GiphySourceQuery } from './types';
import { GiphyPanel } from './giphy-panel';

export const plugin = new DataSourcePlugin<GiphySourceApi, GiphySourceQuery, GiphyPluginOptions>(
  GiphyPanel
).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ],
      },
      showIf: config => config.showSeriesCount,
    })
    .addRadio({
      path: 'color',
      name: 'Circle color',
      defaultValue: 'red',
      settings: {
        options: [
          { value: 'red', label: 'Red' },
          { value: 'green', label: 'Green' },
          { value: 'blue', label: 'Blue' },
        ],
      },
    });
});

class GiphySourceApi extends DataSourceApi<GiphySourceQuery, GiphyPluginOptions> {
  async query(options: DataQuery<GiphySourceQuery>): Promise<DataQueryResponse> {
    const { search } = opitons;
  }
}

const defaultGiphyQuery: GiphySourceQuery = {
  search: '',
};
