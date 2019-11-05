import {
  TYPES,
  fetch,
  cancel,
  fetchSuccess,
  fetchError,
  fetchItem,
  cancelItem,
  fetchSkill,
  cancelSkill,
  fetchSpecialization,
  cancelSpecialization,
  fetchTrait,
  cancelTrait,
} from './actions';
import { KEYS, PATHS } from './constants';

const { FETCH, CANCEL, FETCH_SUCCESS, FETCH_ERROR } = TYPES;
const { DATA: dataKey, ERROR: errorKey } = KEYS;
const {
  ITEMS: itemsPath,
  SKILLS: skillsPath,
  SPECIALIZATIONS: specializationsPath,
  TRAITS: traitsPath,
} = PATHS;

const id = 12345;

describe('actions', () => {
  describe('fetch', () => {
    it('should correctly transform action payload', () => {
      expect(fetch(id)).toEqual({
        payload: id,
        type: FETCH,
      });
    });
  });

  describe('cancel', () => {
    it('should correctly transform action payload', () => {
      expect(cancel(id)).toEqual({
        payload: id,
        type: CANCEL,
      });
    });
  });

  describe('fetchSuccess', () => {
    it('should correctly transform action payload', () => {
      const data = 'data';
      const path = 'test';

      expect(fetchSuccess({ [dataKey]: data, id, path })).toEqual({
        payload: data,
        type: FETCH_SUCCESS,
        meta: {
          id,
          path,
        },
      });
    });
  });

  describe('fetchError', () => {
    it('should correctly transform action payload', () => {
      const error = {
        message: 'error',
      };
      const path = 'path';

      expect(fetchError({ [errorKey]: error, id, path })).toEqual({
        payload: error,
        type: FETCH_ERROR,
        meta: {
          id,
          path,
        },
      });
    });
  });

  describe('fetchItem', () => {
    it('should correctly transform action payload', () => {
      expect(fetchItem(id)).toEqual({
        payload: {
          id,
          path: itemsPath,
        },
        type: FETCH,
      });
    });
  });

  describe('cancelItem', () => {
    it('should correctly transform action payload', () => {
      expect(cancelItem(id)).toEqual({
        payload: {
          id,
          path: itemsPath,
        },
        type: CANCEL,
      });
    });
  });

  describe('fetchSkill', () => {
    it('should correctly transform action payload', () => {
      expect(fetchSkill(id)).toEqual({
        payload: {
          id,
          path: skillsPath,
        },
        type: FETCH,
      });
    });
  });

  describe('cancelSkill', () => {
    it('should correctly transform action payload', () => {
      expect(cancelSkill(id)).toEqual({
        payload: {
          id,
          path: skillsPath,
        },
        type: CANCEL,
      });
    });
  });

  describe('fetchSpecialization', () => {
    it('should correctly transform action payload', () => {
      expect(fetchSpecialization(id)).toEqual({
        payload: {
          id,
          path: specializationsPath,
        },
        type: FETCH,
      });
    });
  });

  describe('cancelSpecialization', () => {
    it('should correctly transform action payload', () => {
      expect(cancelSpecialization(id)).toEqual({
        payload: {
          id,
          path: specializationsPath,
        },
        type: CANCEL,
      });
    });
  });

  describe('fetchTrait', () => {
    it('should correctly transform action payload', () => {
      expect(fetchTrait(id)).toEqual({
        payload: {
          id,
          path: traitsPath,
        },
        type: FETCH,
      });
    });
  });

  describe('cancelTrait', () => {
    it('should correctly transform action payload', () => {
      expect(cancelTrait(id)).toEqual({
        payload: {
          id,
          path: traitsPath,
        },
        type: CANCEL,
      });
    });
  });
});
