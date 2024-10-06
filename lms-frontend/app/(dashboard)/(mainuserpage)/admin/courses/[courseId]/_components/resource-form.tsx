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

interface ResourceFormProps {
    initialData: {
        resource: string
    };
    courseId: string
}

const formSchema = z.object({
    resource: z.string().min(1, {
        message: 'Resource is required'
    })
});

export const ResourceForm = ({
    initialData,
    courseId
}: ResourceFormProps) => {

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

    const deleteResource = async () => {
        try {
            const type = {
                type: 'Resource'
            };
            await axios.put(`/api/course/${courseId}/deleteSyllabus`, type);
            toast.success('Resource Link Removed');
            router.refresh();
        } catch (error: any) {
            toast.error('Something went wrong')
            console.log(error.message);
        }
    }

    //https://drive.google.com/drive/folders/1uPIHbXr6R1rb-kfY7zR6z20r2pdJboSA

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course Resource Link
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Link
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className="text-sm mt-2">
                    {initialData.resource}
                </p>
            )}
            {!isEditing && (
                <div className="text-sm mt-2">
                    {!initialData.resource && (
                        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
                            No Attachments Yet
                        </div>
                    )}
                </div>
            )}
            {initialData.resource && (
                <Button className='mt-2 flex items-center' onClick={deleteResource}>
                    Delete File
                </Button>
            )}
            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4 mt-4'>
                        <FormField
                            control={form.control}
                            name='resource'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder="e.g. https..."
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