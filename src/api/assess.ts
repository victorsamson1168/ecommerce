import { ApiHandler } from '@/lib/api-handler';

export async function getAssessmentList(
  skip: number,
  limit: number,
  search: string,
  category: string
) {
  const queryParams = new URLSearchParams({
    // category: category === 'ALL' ? '' : category.toString(),
    skip: skip.toString(),
    limit: limit.toString(),
    search: search.toString(),
  });
  if (category && category !== 'all') {
    queryParams.append(category, 'true');
  }
  const isLoggedIn = localStorage?.getItem('access_token_jp');

  if (!isLoggedIn) {
    return null;
  }
  const handler = new ApiHandler({
    path: '/jp/assessments',
    params: queryParams,
  });
  const { data } = await handler.get();
  return data;
}

export async function getTestCategories() {
  const handler = new ApiHandler({
    path: '/jp/questions/categories',
  });
  const { data } = await handler.get();
  return data?.data;
}
export async function getTestDomains() {
  const handler = new ApiHandler({
    path: '/jp/questions/domains',
  });
  const { data } = await handler.get();
  return data?.data;
}
export async function getTestQuestionTypes() {
  const handler = new ApiHandler({
    path: '/jp/questions/types',
  });
  const { data } = await handler.get();
  return data?.data;
}

export async function postAssessmentList(
  payload: any,
  params?: { source: string }
) {
  const handler = new ApiHandler({
    path: 'v2/jp/assessments/create',
    data: payload,
    params: params,
  });
  const { data } = await handler.post();
  return data;
}

/**
 * Return an assessment detail object with
 * a list of assessment sections, questions
 * @param aid Assessment ID
 */
export async function getAssessmentDetail(
  aid: string,
  isPersonalityTest: boolean
) {
  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;

  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}?isPsychometric=${isPersonalityTest ?? false}`,
  });
  const { data } = await handler.get();
  return data;
}
export async function getPersonalityTestSetting(aid: string) {
  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;

  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${aid}/settings`,
  });
  const { data } = await handler.get();
  return data;
}

export async function deleteAssessmentDetail(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}`,
  });
  const { data } = await handler.delete();
  return data;
}
export async function deletePersonalityTestDetail(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${aid}`,
  });
  const { data } = await handler.delete();
  return data;
}

export async function patchAssessmentDetail(aid: string, payload: any) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}`,
    data: payload,
  });
  const { data } = await handler.patch();

  return data;
}
export async function patchPsychometricAssessmentDetail(
  aid: string,
  payload: any
) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/pshychometric/${aid}`,
    data: payload,
  });
  const { data } = await handler.patch();

  return data;
}
export async function patchPersonalityTestSetting(aid: string, payload: any) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${aid}`,
    data: payload,
  });
  const { data } = await handler.patch();

  return data;
}

export async function patchSubmissionResult(
  aid: string,
  sid: string,
  payload: any
) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/submission/${sid}`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function patchAssessmentSave(aid: string, payload: any) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}/save`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function duplicateAssessment(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/copy`,
  });
  const { data } = await handler.post();

  return data;
}

export async function duplicatePersonalityTest(aid: string, payload: any) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${aid}/duplicate`,
    data: payload,
  });
  const { data } = await handler.post();

  return data;
}

export async function getAssessmentAnalytics(aid: string) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/analytics/${aid}`,
  });
  const { data } = await handler.get();
  return data;
}
export async function getPsychometricAssessmentStats(id: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/submissions/${id}/stats`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getAssessmentSubmissionList(
  aid: string,
  paginate: {
    limit: number;
    skip: number;
    total: number;
  },
  search: string,
  category: string,
  field: string,
  order: string,
  filters: { antiCheating: string[] }
) {
  const queryParams = new URLSearchParams({
    category: category === 'ALL' ? '' : category.toString(),
    skip: paginate.skip.toString(),
    limit: paginate.limit.toString(),
    search: search.toString(),
    field: field.toString(),
    order: order.toString(),
  });

  if (filters.antiCheating?.length > 0) {
    filters?.antiCheating?.forEach(element => {
      queryParams.append(element, 'TRUE');
    });
  }

  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}/submission`,
    params: queryParams,
  });

  const { data } = await handler.get();
  return data;
}

export async function getAssessmentSubmissionDetail(aid: string, sid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/submission/${sid}`,
  });
  const { data } = await handler.get();
  return data;
}

export async function deleteAssessmentSubmissionDetail(
  aid: string,
  sid: string
) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/submission/${sid}`,
  });
  const { data } = await handler.delete();
  return data;
}

export async function getAssessmentResultOverview(aid: string, sid: string) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}/submission/${sid}/overview`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getAssessmentAnticheating(aid: string, sid: string) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}/submission/${sid}/anti-cheating`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getAssessmentScreenshots(aid: string, sid: string) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}/submission/${sid}/screenshots`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getAssessmentTemplateList(
  skip: number,
  limit: number,
  search: string,
  filters?: {
    value: string;
    selected: string[];
  }[]
) {
  try {
    let queryParams = new URLSearchParams({
      skip: skip.toString(),
      limit: limit.toString(),
      search: search.toString(),
    });
    if (filters) {
      filters?.forEach(filter => {
        filter.selected?.forEach((filterValue: any) => {
          queryParams.append(filter.value, filterValue);
        });
      });
    }

    if (search === '') {
      queryParams.delete('search');
    }
    const isLoggedIn = localStorage?.getItem('access_token_jp');
    let path = '/v3/jp/assessments/templates';

    if (!isLoggedIn) {
      path = '/jp/assessments/public/templates';
    }
    const handler = new ApiHandler({
      path: path,
      params: queryParams,
    });

    const { data } = await handler.get();

    return data;
  } catch (error: any) {
    throw error;
  }
}
export async function getPopularAssessmentTemplateList(
  filters?: {
    value: string;
    selected: string[];
  }[]
) {
  try {
    let queryParams = new URLSearchParams({});
    if (filters) {
      filters?.forEach(filter => {
        filter.selected?.forEach((filterValue: any) => {
          queryParams.append(filter.value, filterValue);
        });
      });
    }
    const isLoggedIn = localStorage?.getItem('access_token_jp');
    let path = '/jp/assessments/templates/popular';
    const handler = new ApiHandler({
      path: path,
      params: queryParams,
    });

    const { data } = await handler.get();

    return data;
  } catch (error: any) {
    throw error;
  }
}

export async function gePersonalityTestTemplateList() {
  try {
    const handler = new ApiHandler({
      path: `/jp/assessments/psychometric/templates`,
    });

    const { data } = await handler.get();

    return data;
  } catch (error: any) {
    throw error;
  }
}

export async function getAssessmentTemplateDetail(
  aid: string,
  isPsychometric: boolean = false
) {
  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;
  const handler = new ApiHandler({
    path: `/jp/assessments/template/${aid}?isPsychometric=${isPsychometric}`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getPersonalityTestTemplateDetail(aid: string) {
  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/templates/${aid}/sections`,
  });
  let { data } = await handler.get();

  return data;
}
export async function getPersonalityTestSubmissionList(
  id: string,
  paginate: {
    limit: number;
    skip: number;
    total: number;
  },
  search: string,
  category: string,
  field: string,
  order: string
) {
  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;
  const queryParams = new URLSearchParams({
    category: category === 'ALL' ? '' : category.toString(),
    skip: paginate.skip.toString(),
    limit: paginate.limit.toString(),
    search: search.toString(),
    sortOn: field.toString(),
    sortBy: order.toString(),
  });
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${id}/submissions`,
    params: queryParams,
  });
  let { data } = await handler.get();

  return data;
}

export async function getPersonalityTestSectionQuestions(
  id: string,
  limit: number,
  offset: number
) {
  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;
  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/sections/${id}`,
    params: queryParams,
  });
  let { data } = await handler.get();

  return data;
}

export async function duplicateAssessmentTemplateDetail(aid: string) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/use-template/${aid}`,
  });
  const { data } = await handler.post();
  return data;
}

export async function duplicatePersonalityTestTemplateDetail(
  aid: string,
  payloadData: any
) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/templates/${aid}/use`,
    data: payloadData,
  });
  const { data } = await handler.post();
  return data;
}

export async function requestSubmissionEmail(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/submission/excel`,
  });
  const { data } = await handler.get();
  return data;
}

export async function requestSubmissionDownload(aid: string) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/${aid}/submission/excel/download`,
  });
  const { data } = await handler.get();
  return data;
}
export async function requestPsychometricSubmissionDownload(id: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${id}/submissions/export`,
  });
  const { data } = await handler.get();
  return data;
}

export async function patchAssessmentExamples(
  aid: string,
  qid: string,
  payload: any
) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/examples/${qid}`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function getQuestionBank(
  search: string,
  type: string,
  level: string,
  skip: number,
  limit: number
) {
  const queryParams = new URLSearchParams({
    skip: skip.toString(),
    limit: limit.toString(),
  });

  if (search !== '') {
    queryParams.append('search', search);
  }
  if (type !== '') {
    queryParams.append('type', type);
  }
  if (level !== '') {
    queryParams.append('level', level);
  }

  const handler = new ApiHandler({
    path: `/question-bank`,
    params: queryParams,
  });

  const { data } = await handler.get();

  return data;
}

export async function getRecentActivity(type: string, limit?: string) {
  const handler = new ApiHandler({
    path: `jp/users/recent-activity?type=${type}&limit=${limit}`,
  });

  const hasLocalStorage = localStorage?.getItem('access_token_jp');
  if (!hasLocalStorage) return null;

  const { data } = await handler.get();
  return data.data;
}

export async function archiveAssessment(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/archive`,
  });
  const { data } = await handler.patch();
  return data;
}

export async function archivePsychometricAssessment(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${aid}/archive`,
  });
  const { data } = await handler.patch();
  return data;
}

export async function toggleAssessmentPublic(aid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/${aid}/toggle-visibility`,
  });
  const { data } = await handler.patch();
  return data;
}

export async function psychometricAssesmentsList(
  skip: number,
  limit: number,
  search: string,
  category: string
) {
  const queryParams = new URLSearchParams({
    search: search.toString(),
    category: category === 'ALL' ? '' : category.toString(),
    skip: skip.toString(),
    limit: limit.toString(),
  });
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/list`,
    params: queryParams,
  });
  const { data } = await handler.get();
  return data;
}

export async function getPersonalityTestDetail(id: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${id}/sections`,
  });
  const { data } = await handler.get();
  return data;
}

export async function sendPersonalityTestInvite(payload: any, id: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${id}/invite`,
    data: payload,
  });

  const { data } = await handler.post();

  return data;
}

export async function getPersonalityTestCandidateReport(id: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/submissions/${id}/report`,
  });
  const { data } = await handler.get();
  return data;
}

export async function personalityTestReportDelete(sid: string, testId: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${testId}/submission/${sid}`,
  });
  const { data } = await handler.delete();
  return data;
}

export async function getPersonalityAntiCheatingReport(sid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/submissions/${sid}/anti-cheating`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getPersonalityTestAntiCheatingScreenshot(sid: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/submissions/${sid}/screenshots`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getPsychometricAssesOpenClosed(testId: string) {
  const handler = new ApiHandler({
    path: `/jp/assessments/psychometric/${testId}/close`,
  });
  const { data } = await handler.patch();
  return data;
}
export async function getQuestionsList(
  skip: number,
  limit: number,
  search: string,
  filters?: {
    value: string;
    selected: string[];
  }[]
) {
  let queryParams = new URLSearchParams();
  queryParams.append('skip', skip.toString());
  queryParams.append('limit', limit.toString());
  if (search) {
    queryParams.append('search', search);
  }
  if (filters) {
    filters?.forEach(filter => {
      filter.selected?.forEach((filterValue: any) => {
        queryParams.append(filter.value, filterValue);
      });
    });
  }

  const handler = new ApiHandler({
    path: `/jp/questions`,
    params: queryParams,
  });
  const { data } = await handler.get();
  return data;
}
export async function getPopularQuestions() {
  const handler = new ApiHandler({
    path: `/jp/questions/popular`,
  });
  const { data } = await handler.get();
  return data;
}
export async function getQuestionsCount(
  search: string,
  domain: string,
  category: string,
  type: string,
  difficulty: string
) {
  const queryParams = new URLSearchParams({
    search: search.toString(),
    domain: domain.toString(),
    category: category.toString(),
    type: type.toString(),
    difficulty: difficulty.toString(),
  });

  const handler = new ApiHandler({
    path: `/jp/questions/count`,
    params: queryParams,
  });
  const { data } = await handler.get();
  return data;
}

export async function getQuestion(id: string) {
  const handler = new ApiHandler({
    path: `/jp/questions/${id}`,
  });
  const { data } = await handler.get();
  return data;
}

export async function getQuestionsFromCart(payload: any) {
  const handler = new ApiHandler({
    path: `/jp/assessments/question-cart`,
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}

export async function PostAssessmentCreate(payload: any) {
  const handler = new ApiHandler({
    path: `/v2/jp/assessments/create`,
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
