import { URL_BOARDS } from '../../constants/constants';
import { Board } from 'types/types';

//! Find Board
export async function getBoard(token: string, idBoard: string): Promise<Board> {
  try {
    const response = await fetch(`${URL_BOARDS}/${idBoard}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const board = await response.json();
    return board;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
}
