import React from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { useWords } from "../../contexts/WordsContext";
import { useLanguage } from "../../contexts/LanguageContext";

const WordsList = () => {
  const { words, handleEditKeyword, setWords } = useWords();
  const { selectedLanguage } = useLanguage();

  const sensors = useSensors(useSensor(TouchSensor), useSensor(PointerSensor));

  const fieldName =
    selectedLanguage.type === "english" ? "englishLabel" : "persianLabel";

  const isEmpty = (value) => value.trim() === "";

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      const oldIndex = words.findIndex((_, i) => i === +active.id);
      const newIndex = words.findIndex((_, i) => i === +over.id);
      const newWords = arrayMove(words, oldIndex, newIndex);
      setWords(newWords);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext
        items={words.map((_, i) => i)}
        strategy={verticalListSortingStrategy}
      >
        <div className="px-2 py-2 max-h-[190px] overflow-y-auto overflow-x-hidden space-y-2">
          {words.map(({ persianLabel, englishLabel }, index) => {
            const value =
              selectedLanguage.type === "persian" ? persianLabel : englishLabel;
            const hasError = isEmpty(value);

            return (
              <SortableItem key={index} id={index}>
                {(ref, listeners, attributes, isDragging) => (
                  <div className="border-b border-gray-200 last:border-b-0 pr-3 rounded-md flex items-center justify-between gap-4 bg-white shadow-sm overflow-hidden">
                    <span
                      className={`block pl-3 pr-6 py-4 ${
                        isDragging ? "cursor-grabbing" : "cursor-grab"
                      }`}
                      ref={ref}
                      {...listeners}
                      {...attributes}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-5 h-5"
                      >
                        <path
                          fill="black"
                          d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"
                        />
                      </svg>
                    </span>

                    <p
                      className={`font-medium ${
                        hasError ? "text-red-500" : ""
                      }`}
                    >
                      {selectedLanguage.type === "persian"
                        ? englishLabel
                        : persianLabel}
                    </p>

                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleEditKeyword(index, fieldName, e.target.value)
                      }
                      className={`outline-none rounded-md px-2 py-1 text-center w-1/3 ${
                        hasError
                          ? "bg-red-100 border border-red-500"
                          : "bg-gray-200"
                      }`}
                      placeholder=". . . . ."
                    />
                  </div>
                )}
              </SortableItem>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

const SortableItem = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transform ? "transform 200ms ease" : undefined,
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children(setActivatorNodeRef, listeners, attributes, isDragging)}
    </div>
  );
};

export default WordsList;
