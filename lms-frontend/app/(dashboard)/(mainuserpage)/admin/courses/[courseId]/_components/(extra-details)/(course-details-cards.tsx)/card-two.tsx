'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CardTwoFormProps {
    initialData: {
        cardTwo: string
    };
    courseId: string
}

const formSchema = z.object({
    cardTwo: z.string().min(1, {
        message: 'Card Details are required'
    })
});

export const CardTwo = ({
    initialData,
    courseId
}: CardTwoFormProps) => {

    const router = useRouter();

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const { isSubmitting } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            await axios.put(`/api/course/${courseId}`, values);
            toast.success('Course Updated');
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
                Course Card One
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Card Details
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className="text-sm mt-2">
                    {initialData.cardTwo}
                </p>
            )}
            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4 mt-4'>
                        <FormField
                            control={form.control}
                            name='cardTwo'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            disabled={isSubmitting}
                                            placeholder="e.g. 'Card Details'"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} 
                            />
                        <div className="flex items-center gap-x-2">
                            <Button disabled={ isSubmitting} type='submit'>
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}