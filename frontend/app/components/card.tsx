"use client";

import React from "react";
import { checkDateStatus } from "../utils/helper";
import dateFormat from "dateformat";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface CardProps {
  id: string;
  taskName: string;
  date: string;
  comment: string;
  onDelete: any;
  onEdit: any;
}

export default function Card({
  id,
  taskName,
  date,
  comment,
  onDelete,
  onEdit,
}: CardProps) {
  return (
    <div
      className={`w-full p-6 ${checkDateStatus(
        date
      )} border border-gray-200 rounded-lg shadow cursor-default`}
    >
      <div className="flex justify-between mb-1">
        <h1 className="font-medium text-xl">{taskName}</h1>
        <div className="my-auto text-gray-900 flex gap-2 font-bold text-lg">
          <button
            onClick={() => onEdit({ id, taskName, comment })}
            className="hover:text-white bg-white hover:bg-gray-900 p-1 rounded-full transition duration-100 cursor-pointer"
          >
            <AiOutlineEdit />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="hover:text-white bg-white hover:bg-gray-900 p-1 rounded-full transition duration-100 cursor-pointer"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <p className="text-base overflow-hidden text-ellipsis whitespace-normal mb-1 line-clamp-2 h-12">
        {comment}
      </p>
      <p className="my-auto text-xs text-gray-500">
        {dateFormat(date, "mmmm dS, yyyy, h:MM TT")}
      </p>
    </div>
  );
}
