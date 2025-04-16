'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form'

interface PhoneNumberFormProps {
    initialData: {
        phoneNumber: number
    };
    userId: string
}

const formSchema = z.object({
    phoneNumber: z.string().transform((v) => Number(v) || 0)
});

export const PhoneNumberForm = ({
    initialData,
    userId
}: PhoneNumberFormProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const { isSubmitting } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.put(`/api/user/${userId}`, values);
            toast.success('User Updated');
            toggleEdit();
            router.refresh();
        } catch (error: any) {
            toast.error('Something went wrong')
            console.log(error.message);
        }
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                <span className='hidden md:flex'>
                    Phone Number
                </span>
                <span className='flex md:hidden'>
                    PhoneNo
                </span>
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Phone Number
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className="text-sm mt-2">
                    {initialData.phoneNumber}
                </p>
            )}
            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4 mt-4'>
                        <FormField
                            control={form.control}
                            name='phoneNumber'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type='number'
                                            disabled={isSubmitting}
                                            placeholder="e.g. '1111 (in indian format)'"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center gap-x-2">
                            <Button disabled={isSubmitting} type='submit'>
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}