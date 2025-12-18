import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json([
      { id: 1, title: '첫번째 글' },
      { id: 2, title: '두번째 글' },
    ])
  }),

  http.post('/api/meetNote/createNote', async ({ request }) => {
    return HttpResponse.json(
      { status: 200, result: 'SUCCESS', message: 'OK', data: 0 },
      { status: 200 },
    )
  }),

  http.post('/api/meetNote/convert', async ({ request }) => {
    return HttpResponse.json(
      { status: 200, result: 'SUCCESS', message: 'OK', data: 0 },
      { status: 200 },
    )
  }),

  http.get('/api/meetNote/detail', () => {
    return HttpResponse.json(
      {
        status: 200,
        result: 'SUCCESS',
        message: 'OK',

        data: {
          noteId: '12',
          usercode: 'mingyu1.lee',
          folderId: 2,
          startDt: '2025-12-18',
          endDt: '2025-12-18',
          title: '회의제목1',
          summaryText: '요약내용입니다.',
          transcriptText: [
            {
              start: '00:00',
              end: '01:30',
              speaker: 'sp1',
              text: '안녕하세요. 회의 시작하겠습니다.',
            },
            {
              start: '01:30',
              end: '03:30',
              speaker: 'sp2',
              text: '네 회의 시작하시죠.',
            },
            {
              start: '03:30',
              end: '04:30',
              speaker: 'sp1',
              text: '네 오늘 회의 안건은 화면 설계입니다.',
            },
            {
              start: '04:30',
              end: '05:30',
              speaker: 'sp3',
              text: '네 제가 자료를 준비했습니다.',
            },
          ],
        },
      },
      { status: 200 },
    )
  }),
]
