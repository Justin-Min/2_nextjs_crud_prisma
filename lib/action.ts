'use server'

import { z } from 'zod'
import { prisma } from '@/lib/prisma'
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
		await prisma.employee.create({
			data: {
				name: validatedFields.data.name,
				email: validatedFields.data.email,
				phone: validatedFields.data.phone,
			},
		})
	} catch (error) {
		console.log(error)
		return { message: 'Failed to create new employee' }
	}

	revalidatePath('/employee')
	redirect('/employee')
}

export const getEmployeelist = async (query: string) => {
	try {
		const employees = await prisma.employee.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				phone: true,
				createAt: true,
			},
			orderBy: {
				createAt: 'desc',
			},
		})
		return employees
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch employees data')
	}
}
