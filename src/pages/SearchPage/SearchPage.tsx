import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loader from 'components/Loader/Loader';
import Task from 'components/Task/Task';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BOARDS_PATH } from 'router/constants';
import { getSearchingTasks, setFoundedTasks } from 'store/boardSlice';
import { AppDispatch, IRootState } from 'store/model';
import { TaskType } from 'types/types';

const SearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { searchValue, foundedTasks, isLoading } = useSelector((state: IRootState) => state.board);

  const { token } = useSelector((state: IRootState) => state.auth);

  useEffect(() => {
    if (token) {
      if (!searchValue) {
        navigate(BOARDS_PATH);
      }

      dispatch(getSearchingTasks({ token, searchValue }));
    }
  }, [searchValue, token, dispatch, navigate]);

  const delTaskMemo = useCallback(
    (deletedTask: TaskType): void => {
      const delTask = ({ _id: idDeletedTask }: TaskType): void => {
        dispatch(
          setFoundedTasks({
            foundedTasks: foundedTasks.filter(({ _id }) => _id !== idDeletedTask),
          })
        );
      };

      delTask(deletedTask);
    },
    [foundedTasks, dispatch]
  );

  const editTaskMemo = useCallback(
    (editedTask: TaskType): void => {
      const editTask = (taskNew: TaskType): void => {
        dispatch(
          setFoundedTasks({
            foundedTasks: foundedTasks.map((taskOld) => {
              if (taskOld._id === taskNew._id) {
                return taskNew;
              }

              return taskOld;
            }),
          })
        );
      };

      editTask(editedTask);
    },
    [foundedTasks, dispatch]
  );

  const goBoards = () => navigate(BOARDS_PATH);

  const handleClickBack = () => {
    goBoards();
  };

  const FoundedTaskComponent = foundedTasks.length ? (
    <Box>
      {foundedTasks.map((item) => (
        <Task
          key={item._id}
          idColumn={item.columnId}
          task={item}
          delTask={delTaskMemo}
          editTask={editTaskMemo}
        />
      ))}
    </Box>
  ) : (
    <span>{t('boards.nothingFounded')}</span>
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        padding: '2rem 1rem',
        overflow: 'hidden',
      }}
    >
      <Button
        component="label"
        variant="outlined"
        color="basic"
        onClick={handleClickBack}
        sx={{ alignSelf: 'flex-start' }}
      >
        {t('boards.backBoards')}
      </Button>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Nunito Sans", sans-serif',
          fontSize: '40px',
          fontWeight: 700,
        }}
      >
        {t('boards.foundedTasks')}
      </Typography>
      {isLoading ? <Loader /> : FoundedTaskComponent}
    </Container>
  );
};

export default SearchPage;
