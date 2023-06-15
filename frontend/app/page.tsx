'use client';

import Head from 'next/head';
import Card from './components/card';
import { useCallback, useEffect, useState } from 'react';
import { deleteTodoCards, getAllTodoCards } from './services/todo.services';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Modal from './components/modal';

interface todo {
  id: string;
  taskName: string;
  comment: string;
}

export default function Home() {
  const [todoData, setTodoData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [editableTodo, setEditableTodo] = useState<todo | null>(null);

  const getAllTodoCardsData = useCallback(async () => {
    try {
      const [res, error] = await getAllTodoCards();
      if (!res && error) {
        throw new Error(error);
      }
      setTodoData(res);
    } catch (error) {
      console.error('Error while fetching the todos', error);
    }
  }, []);

  const handleEdit = (e: todo) => {
    setEditableTodo(e);
    setToggleModal((prevState) => !prevState);
  };

  const handleDelete = useCallback(async (id: string) => {
    try {
      await deleteTodoCards({ id });
      setTodoData((prevData: any) => {
        console.log({ prevData });
        return prevData.filter((card: any) => card._id !== id);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllTodoCardsData();
  }, [getAllTodoCardsData, toggleModal, handleDelete]);

  const handleToggleModal = () => {
    setToggleModal((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Todo Application</title>
        <meta name="description" content="A simple todo application" />
      </Head>
      <main className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold mt-8">Todo Application</h1>

        <button
          className="flex gap-2 px-6 py-2 shadow my-8 bg-white rounded-md hover:bg-gray-400 hover:text-white transition duration-150"
          onClick={handleToggleModal}
        >
          <IoIosAddCircleOutline className="my-auto font-bold text-xl" />
          Add Todo Card
        </button>

        <Modal
          isOpen={toggleModal}
          closeModal={handleToggleModal}
          editableTodo={editableTodo}
          setEditableTodo={setEditableTodo}
        />

        <div className="container w-1/2 grid grid-cols-1 gap-4 mb-8">
          {todoData.length > 0 ? (
            todoData.map(({ _id, taskName, comment, date }: any) => (
              <Card
                key={_id}
                id={_id}
                taskName={taskName}
                comment={comment}
                date={date}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="w-full border border-gray-200 rounded-lg shadow p-6 cursor-default">
              <h1 className="font-medium text-xl text-gray-400">
                No todo found
              </h1>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
