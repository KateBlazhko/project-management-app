import { TaskPropsType } from './model';
import { deleteTask } from 'api/tasks/deleteTask';
import { useSelector } from 'react-redux';
import { IRootState } from 'store/model';
import { FormEvent, useState } from 'react';
import { TaskType } from 'types/types';
import { IconButton, Typography } from '@mui/material';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import styles from './Task.module.scss';
import { DialogDelete } from 'components/DialogDelete/DialogDelete';
import { updateTask } from 'api/tasks/updateTask';
import { BasicModal } from 'components/Modal/BasicModal';
import { FormTaskUpdate } from 'components/FormTaskUpdate/FormTaskUpdate';
import { useTranslation } from 'react-i18next';

const Task = ({
  idColumn,
  task: {
    _id: idTask,
    title: titleTask,
    description: descriptionTask,
    order: orderTask,
    userId: ownerTask,
    users: usersOfTask,
  },
  delTask,
  isDragging,
  provider,
}: TaskPropsType) => {
  const { t } = useTranslation();

  const { idBoard } = useSelector((state: IRootState) => state.board);
  const { token } = useSelector((state: IRootState) => state.auth);
  const [isHovering, setIsHovering] = useState(false);

  const [taskUpdated, setTaskUpdated] = useState<TaskType | null>(null); //! для видоизменения тайтла сразу после апдейта
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleClickOpenUpdate = (): void => {
    setOpenUpdate(true);
  };

  const handlePointerOver = (): void => setIsHovering(true);

  const handlePointerOut = (): void => setIsHovering(false);

  const handleClickOpenDialog = (): void => setOpenDialog(true);

  const handleClickDeleteButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<TaskType | void> => {
    event.preventDefault();

    if (token) {
      const deletedTask = await deleteTask(token, idBoard, idColumn, idTask);

      delTask(deletedTask);
      return deletedTask;
    }
  };

  const handleClickEditButton = async (
    event: FormEvent<HTMLFormElement>,
    title: string,
    description: string
  ): Promise<TaskType | void> => {
    if (token) {
      const taskUpdated = await updateTask(token, idBoard, idColumn, idTask, {
        order: orderTask,
        columnId: idColumn,
        userId: ownerTask,
        users: usersOfTask,
        title: title,
        description: description,
      });

      setTaskUpdated(taskUpdated);
      return taskUpdated;
    }
  };
  console.log(isDragging);
  return (
    <div
      {...provider?.draggableProps}
      {...provider?.dragHandleProps}
      style={{
        backgroundColor: isDragging ? '#d4d4d4' : 'transparent',
        ...provider?.draggableProps.style,
      }}
      ref={provider?.innerRef}
      onMouseOver={handlePointerOver}
      onMouseOut={handlePointerOut}
      className={styles.task}
    >
      <Typography
        variant="body1"
        sx={{
          flex: 'auto',
          fontFamily: '"Noto Sans", sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          textAlign: 'left',
        }}
        onClick={handleClickOpenUpdate}
      >
        {taskUpdated ? taskUpdated.title : titleTask}
      </Typography>
      {isHovering && (
        <IconButton
          onClick={handleClickOpenDialog}
          aria-label="delete"
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 2,
            transform: 'translateY(-50%)',
          }}
        >
          <RemoveCircleOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      )}

      {openUpdate && (
        <BasicModal
          title={t('boards.formTaskUpdate')}
          openModal={openUpdate}
          setOpenModal={setOpenUpdate}
        >
          <FormTaskUpdate
            title={taskUpdated ? taskUpdated.title : titleTask}
            description={taskUpdated ? taskUpdated.description : descriptionTask}
            userId={ownerTask}
            users={usersOfTask}
            handleClickEditButton={handleClickEditButton}
            openUpdate={openUpdate}
            setOpenUpdate={setOpenUpdate}
          />
        </BasicModal>
      )}

      {openDialog && (
        <DialogDelete
          title={t('boards.dialogTask')}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          func={handleClickDeleteButton}
        />
      )}
    </div>
  );
};

export default Task;
