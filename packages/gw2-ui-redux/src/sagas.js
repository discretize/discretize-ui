import {
  take,
  fork,
  call,
  put,
  cancel as cancelEffect,
  cancelled,
  race,
  join,
  delay,
} from 'redux-saga/effects';
import axios from 'axios';

import { fetch, cancel, fetchSuccess, fetchError } from './actions';
import { BASE_URL as baseURL, KEYS } from './constants';

const { create, CancelToken } = axios;
const axiosInstance = create({
  baseURL,
});

const { DATA: dataKey, ERROR: errorKey } = KEYS;

const cancelType = cancel.toString();

const maxRetries = 10;
const retriableStatusCodes = [429, 500];

const getJitter = () => Math.floor(Math.random() * 1001) - 500;

function* sendRequest({ payload: { id, path } }) {
  let abortSource;

  try {
    for (let i = 0; i < maxRetries; i += 1) {
      try {
        abortSource = CancelToken.source();

        const { data } = yield call(
          [axiosInstance, 'get'],
          `/${path}/${id}?lang=en`,
          {
            cancelToken: abortSource.token,
          },
        );

        yield put(fetchSuccess({ id, path, [dataKey]: data }));

        return;
      } catch (error) {
        const {
          response: { status },
        } = error;

        if (i < maxRetries - 1 && retriableStatusCodes.includes(status)) {
          yield delay(2 ** i * 1000 + getJitter());
        } else {
          throw error;
        }
      }
    }
  } catch (error) {
    const {
      name,
      message,
      response: { status, data: { text } = {} } = {},
    } = error;

    yield put(
      fetchError({
        id,
        path,
        [errorKey]: { code: status, name, message: text || message },
      }),
    );
  } finally {
    if (yield cancelled() && !abortSource) {
      yield call([abortSource, 'cancel']);
    }
  }
}

function* cancelRequest({ id: fetchId, path: fetchPath }, fetchTask) {
  const { abortingAction } = yield race({
    taskFinished: join(fetchTask),
    abortingAction: take(
      ({ type, payload }) =>
        type === cancelType &&
        fetchId === payload.id &&
        fetchPath === payload.path,
    ),
    // timeout: call(delay, 90000), // taskFinished doesnt work for aborted tasks
  });

  if (abortingAction) {
    yield cancelEffect(fetchTask);
  }
}

export default function* saga() {
  while (true) {
    const action = yield take(fetch);

    const fetchTask = yield fork(sendRequest, action);

    yield fork(cancelRequest, action.payload, fetchTask);
  }
}
