import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json([
      { id: 1, title: '첫번째 글' },
      { id: 2, title: '두번째 글' },
    ])
  }),

  // POST /api/login
  http.post('/api/login', async ({ request }) => {
    const body = await request.json()

    if (body.id === 'admin') {
      return HttpResponse.json({ token: 'fake-jwt-token' })
    }

    return new HttpResponse(null, { status: 401 })
  }),
]
