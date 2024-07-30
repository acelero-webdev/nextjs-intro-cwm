import { z } from 'zod';

const productSchema = z.object({
    name: z.string().min(3),
    price: z.number().min(0.01),
});

export default productSchema;
