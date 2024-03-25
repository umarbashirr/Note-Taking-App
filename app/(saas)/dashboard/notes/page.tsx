"use client";

import DashboardHeader from "@/components/DashboardHeader";
import PageContentSection from "@/components/dashboard/PageContentSection";
import SingleNote from "@/components/dashboard/SingleNote";
import { NOTES } from "@/utils/site-data";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const NotesPage = () => {
  const [notes, setNotes] = useState<any>(NOTES);

  const updateFavourite = (updatedNote: any) => {
    const newNotes = notes.map((note: any) => {
      return note.id === updatedNote.id ? updatedNote : note;
    });

    setNotes(newNotes);
  };

  const deleteNoteHandler = (note: any) => {
    const updatedNotes = notes.filter((item: any) => item.id !== note.id);
    setNotes(updatedNotes);
  };

  return (
    <div className="h-full min-h-screen">
      <DashboardHeader title="All Notes" />
      <PageContentSection>
        <div className="flex items-center justify-end">
          <button className="inline-flex items-center justify-center gap-2 text-center py-2 px-4 rounded-md shadow-md bg-indigo-600 text-white hover:bg-indigo-700 duration-200 ease-in-out transition-all text-sm">
            <PlusIcon width={18} height={18} />
            <p>Add Note</p>
          </button>
        </div>
        <div className="mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
            {notes.map((item: any, index: number) => {
              return (
                <SingleNote
                  key={index}
                  note={item}
                  updateFavourite={updateFavourite}
                  onDeleteHandler={deleteNoteHandler}
                />
              );
            })}
          </div>
        </div>
      </PageContentSection>
    </div>
  );
};

export default NotesPage;
