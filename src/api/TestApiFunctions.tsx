import { useState } from 'react';
import { Board, Column } from 'types/types';
import { getAllBoards } from './boards/getAllBoards';
import { getAllColumnsOfBoard } from './columns/getAllColumnsOfBoard';
import { updateColumnsSet } from './columns/updateColumnsSet';

// 636b5a6b83f1e2fe95e7a283
export const firstUser = {
  name: 'FirstUser',
  login: 'FirstUser',
  password: 'FirstUser',
};

// 636b7dd719d35b6ca446c3cd
export const secondUser = {
  name: 'SecondUser',
  login: 'SecondUser',
  password: 'SecondUser',
};

// 636ba2d019d35b6ca446c404
export const thirdUser = {
  login: 'ThirdUser',
  password: 'ThirdUser',
};

// boards ids: 636cee7f4f5723389cfea000, 636cef214f5723389cfea002, 636cef524f5723389cfea004

export function TestApiFunctions() {
  const [result, setResult] = useState<Array<Column>>([]);
  const [error, setError] = useState<string>('');

  const clickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try {
      // const result = await getAllUsers(
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJhMmQwMTlkMzViNmNhNDQ2YzQwNCIsImxvZ2luIjoiVGhpcmRVc2VyIiwiaWF0IjoxNjY4MDY5NTk1LCJleHAiOjE2NjgxMTI3OTV9.rChnyK0_5zvXhQZyRBQGrjNAVHQiTjZJ3x4WtTwczX8'
      // );

      // const result = await getAllBoards(
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJhMmQwMTlkMzViNmNhNDQ2YzQwNCIsImxvZ2luIjoiVGhpcmRVc2VyIiwiaWF0IjoxNjY4MDY5NTk1LCJleHAiOjE2NjgxMTI3OTV9.rChnyK0_5zvXhQZyRBQGrjNAVHQiTjZJ3x4WtTwczX8'
      // );

      // const result = await getAllColumnsOfBoard(
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJhMmQwMTlkMzViNmNhNDQ2YzQwNCIsImxvZ2luIjoiVGhpcmRVc2VyIiwiaWF0IjoxNjY4MDY5NTk1LCJleHAiOjE2NjgxMTI3OTV9.rChnyK0_5zvXhQZyRBQGrjNAVHQiTjZJ3x4WtTwczX8',
      //   '636cee7f4f5723389cfea000'
      // );

      const result = await updateColumnsSet(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJhMmQwMTlkMzViNmNhNDQ2YzQwNCIsImxvZ2luIjoiVGhpcmRVc2VyIiwiaWF0IjoxNjY4MDY5NTk1LCJleHAiOjE2NjgxMTI3OTV9.rChnyK0_5zvXhQZyRBQGrjNAVHQiTjZJ3x4WtTwczX8',
        [
          {
            _id: '636d55bcdcbc2ec1bc6f22a2',
            order: 1,
          },
          {
            _id: '636d55bcdcbc2ec1bc6f22a4',
            order: 2,
          },
          {
            _id: '636d55bcdcbc2ec1bc6f22a6',
            order: 3,
          },
        ]
      );

      console.log('my result is', result);
      setResult(result);
    } catch (e: unknown) {
      const err = e as Error;
      console.log('my error is', err.message);
      setError(err.message);
    }
  };

  return (
    <div>
      {/* <p>Result: {(result as Column).title}</p> */}
      <button onClick={clickHandler}>Click here</button>
      {error && <p>{error}</p>}
    </div>
  );
}
