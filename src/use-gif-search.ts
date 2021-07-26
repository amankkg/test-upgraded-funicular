import { useEffect, useState } from 'react';

import { GifObject, GiphySearchResponse } from './types';

const API_KEY = 'zCBX9zG85N4BqyOh828dugjjGfNFxDtc';

// TODO: add debounce and cancellation
export const useGifSearch = (search: string): GifObject[] => {
  const [data, setData] = useState<GifObject[]>([]);

  useEffect(() => {
    if (!search) {
      return;
    }

    async function load() {
      let payload: GiphySearchResponse;

      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=5`);

        payload = await response.json();
      } catch {
        return alert('request error');
      }

      if (!isValidResponse(payload)) {
        return alert('bad response');
      }

      const data = payload.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
      }));

      setData(data);
    }

    load();
  }, [search]);

  return data;
};

const isValidResponse = (payload: any): payload is GiphySearchResponse => {
  return payload?.meta?.status === 200;
};
