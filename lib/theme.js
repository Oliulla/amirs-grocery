const flowbiteTheme = {
    modal: {
        body: {
            base: "space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8",
            popup: "pt-40"
        },
        position: {
            center: "items-center justify-center",
        }
    },
    sidebar: {
        root: {
            base: "h-full bg-gray-50",
            inner:
                "h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800",
        },
        collapse: {
            list: "space-y-2 py-2 list-none",
        },
        item: {
            base: "no-underline flex items-center rounded-lg p-2 text-lg font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        },
        itemGroup: {
            base: "list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
        },
    },
};

export default flowbiteTheme;