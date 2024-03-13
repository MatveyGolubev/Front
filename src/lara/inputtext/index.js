export default {
    root: ({ props, context, parent }) => ({
        class: [
            // Font
            'font-sans leading-none',

            // Flex
            { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

            // Spacing
            'm-0',
            {
                'px-4 py-4': props.size == 'large',
                'px-2 py-2': props.size == 'small',
                'p-3': props.size == null
            },

            // Shape
            'rounded-full', // Максимальная закругленность

            // Colors
            'text-teal-400 dark:text-surface-200',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'border',
            { 'border-teal-400 dark:border-surface-600': !props.invalid },

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid },

            // States
            {
                'hover:border-teal-400 dark:hover:border-primary-400': !context.disabled && !props.invalid,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-teal-400': !context.disabled, // Изменение цвета обводки при фокусировке на teal-400
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

            // Misc
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
};
