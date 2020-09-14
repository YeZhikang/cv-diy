import {produce} from 'immer';
import React, {useState, useCallback} from 'react';

export const useImmerState = (value) => {
  const [state, setState] = useState(value);
  const setValue = useCallback((cb) => {
    setState(state => produce(state, cb))
  }, [])

  return [state, setValue]
}