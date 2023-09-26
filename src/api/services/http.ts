import instance from '../instance';

export const http = {
  post: (url: string, params: any = undefined || null, headers?: string) =>
    instance({
      method: 'POST',
      url,
      data: params || undefined,
      headers: {
        'Content-Type': headers || 'application/json',
      },
      transformResponse: [data => JSON.parse(data)],
    }),
}