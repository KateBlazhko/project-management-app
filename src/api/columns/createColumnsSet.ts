import { URL_COLUMNS_SET } from 'constants/constants';
import { Column, BodyForColumnsSet } from 'types/types';

//! Create set of Columns
export async function createColumnsSet(
  token: string,
  body: Array<BodyForColumnsSet>
): Promise<Array<Column>> {
  try {
    const response = await fetch(URL_COLUMNS_SET, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const columnsList = await response.json();
    return columnsList;
  } catch (e: unknown) {
    const err = e as Error;
    console.log('Catched error =', err.message);
    throw new Error(err.message);
  }
}