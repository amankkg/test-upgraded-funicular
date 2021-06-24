import React from 'react';
import { PanelProps } from '@grafana/data';
import { GiphyPluginOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

import { useGifSearch } from './use-gif-search';

interface Props extends PanelProps<GiphyPluginOptions> {}

export const GiphyPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  const [search, setSearch] = React.useState('test');
  const gifs = useGifSearch(search);

  let color: string;

  switch (options.color) {
    case 'blue':
      color = theme.palette.blue95;
      break;
    case 'green':
      color = theme.palette.greenBase;
      break;
    case 'red':
      color = theme.palette.red;
      break;
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="search gifs..." />
      <ul>
        {gifs.map(gif => (
          <li key={gif.id}>
            <img src={gif.url} title={gif.title} alt={gif.title} />
          </li>
        ))}
      </ul>

      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle style={{ fill: color }} r={100} />
        </g>
      </svg>

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
