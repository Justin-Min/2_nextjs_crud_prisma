'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const EmployeeSchema = z.object({
	name: z.string().min(6),
	email: z.string().min(6),
	phone: z.string().min(11),
})

export const saveEmployee = async (prevState: any, formData: FormData) => {
	const validatedFields = EmployeeSchema.safeParse(
		Object.fromEntries(formData.entries())
	)

	if (!validatedFields.success) {
		return {
			Error: validatedFields.error.flatten().fieldErrors,
		}
	}

	try {
		console.log('Success')
	} catch (error) {
		return { message: 'Failed to create new employee' }
	}

	revalidatePath('/employee')
	redirect('/employee')
}
