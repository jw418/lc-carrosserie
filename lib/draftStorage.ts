export const draftStorage = {
  save: (data: any) => {
    localStorage.setItem("editorContent", JSON.stringify(data));
  },

  load: () => {
    const savedData = localStorage.getItem("editorContent");
    return savedData ? JSON.parse(savedData) : null;
  },

  clear: () => {
    localStorage.removeItem("editorContent");
  },
};
