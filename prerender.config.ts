import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
    crawlUrls: false,
  entryUrls: ['/'],
  hydrateOptions: _url => {
    return {
      runtimeLogging: true
    };
  }
};