const searchFilterTheme = {
  textInput: {
    field: {
      base: "relative w-full p-0 mb-2",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-4 w-4 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 !p-1 !pl-8",
        withAddon: {
          off: "rounded-full",
        },
      },
    },
  },
};

export default searchFilterTheme;
