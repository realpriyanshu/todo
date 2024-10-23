const z = require('zod');

const createTodoZ = z.object({
    title: z.string(),
    description : z.string()
})

module.exports= createTodoZ