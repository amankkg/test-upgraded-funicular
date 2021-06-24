import { useEffect, useState } from 'react';

import { GifObject } from './types';

const API_KEY = 'zCBX9zG85N4BqyOh828dugjjGfNFxDtc';

// TODO: add debounce and cancellation
export const useGifSearch = (search: string): GifObject[] => {
  const [data, setData] = useState<GifObject[]>([]);

  useEffect(() => {
    if (!search) {
      return;
    }

    async function load() {
      let payload: any;

      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=5`);

        payload = await response.json();
      } catch {
        return alert('request error');
      }

      if (!isValidResponse(payload)) {
        return alert('bad response');
      }

      const data: GifObject[] = payload.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.url,
      }));

      setData(data);
    }

    load();
  }, [search]);

  return data;
};

interface GiphyResponse {
  data: Array<{
    id: string;
    title: string;
    embed_url: string;
    type: string;
    slug: string;
    url: string;
  }>;
  pagination: {
    offset: number;
    total_count: number;
    count: number;
  };
  meta: {
    msg: string;
    status: number;
    response_id: string;
  };
}

const isValidResponse = (payload: any): payload is GiphyResponse => {
  return payload?.meta?.status === 200;
};
