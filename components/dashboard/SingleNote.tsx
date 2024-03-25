"use client";

import { formatDate } from "@/utils/format-date";
import { Menu, Transition } from "@headlessui/react";
import {
  Archive,
  Check,
  ChevronDownIcon,
  Copy,
  EllipsisVertical,
  HeartIcon,
  Pencil,
  Trash,
  User2Icon,
  X,
} from "lucide-react";
import { Fragment, useState } from "react";

interface NoteProps {
  note: any;
  updateFavourite: any;
  onDeleteHandler: any;
}

const SingleNote = ({ note, updateFavourite, onDeleteHandler }: NoteProps) => {
  const [editingMode, setEditingMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(note.content);

  const markFavourite = () => {
    const newNote = { ...note, isFavourite: !note.isFavourite };
    updateFavourite(newNote);
  };

  const udpateNoteContent = () => {
    const newNote = { ...note, content: currentValue };
    updateFavourite(newNote);
    setEditingMode(false);
  };

  const editHandler = () => {
    setEditingMode(true);
    setCurrentValue(note.content);
  };

  return (
    <article className="relative bg-yellow-200 text-gray-900 min-h-[240px] rounded-xl flex flex-col">
      <button onClick={markFavourite} className="absolute top-2 right-2">
        <HeartIcon
          width={18}
          height={18}
          className={note?.isFavourite ? "fill-red-600 text-red-600" : ""}
        />
      </button>
      <div className="w-full flex-grow pt-10 pb-4 px-4" onClick={editHandler}>
        {!editingMode ? (
          <p className="italic font-thin">{note?.content}</p>
        ) : (
          <>
            <textarea
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              className="resize-none bg-transparent text-inherit focus:outline-none w-full"
              rows={5}
              autoFocus
            ></textarea>
          </>
        )}
      </div>
      <div className="p-4 flex items-center justify-between gap-4">
        <div className=" flex items-center justify-start gap-2">
          <User2Icon width={16} height={16} />
          <div>
            <p className="text-sm">{formatDate(note?.updatedAt)}</p>
          </div>
        </div>
        {editingMode ? (
          <div className="flex items-center justify-end gap-2">
            <button onClick={udpateNoteContent}>
              <Check className="text-green-600 w-5 h-5" />
            </button>
            <button onClick={(e) => setEditingMode(false)}>
              <X className="text-red-600 w-5 h-5" />
            </button>
          </div>
        ) : (
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md  ">
                  <EllipsisVertical width={18} height={18} />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                        >
                          <Pencil width={14} height={14} className="mr-2" />
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <Copy width={14} height={14} className="mr-2" />
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <Archive width={14} height={14} className="mr-2" />
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={(e) => onDeleteHandler(note)}
                          className={`${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <Trash width={14} height={14} className="mr-2" />
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
    </article>
  );
};

export default SingleNote;
