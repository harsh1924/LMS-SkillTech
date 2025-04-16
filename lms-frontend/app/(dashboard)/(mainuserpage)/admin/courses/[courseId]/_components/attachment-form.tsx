'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { File, Pencil, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { FileUpload } from '@/components/file-upload';

interface AttachmentFormProps {
    initialData: {
        syllabus: string
    };
    courseId: string
}

const formSchema = z.object({
    syllabus: z.string().min(1)
});

export const AttachmentForm = ({
    initialData,
    courseId
}: AttachmentFormProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            syllabus: initialData.syllabus || ""
        }
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

    const deleteSyllabus = async () => {
        try {
            const type = {
                type: 'Syllabus'
            };
            await axios.put(`/api/course/${courseId}/deleteSyllabus`, type);
            toast.success('Syllabus Link Removed');
            router.refresh();
        } catch (error: any) {
            toast.error('Something went wrong')
            console.log(error.message);
        }
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course Syllabus
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing && (
                        <>Cancel</>
                    )}
                    {!isEditing && !initialData.syllabus && (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add Syllabus File
                        </>
                    )}
                    {!isEditing && initialData.syllabus && (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Upload File
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <div className="text-sm mt-2">
                    {!initialData.syllabus && (
                        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
                            No Attachments Yet
                        </div>
                    )}
                </div>
            )}
            {initialData.syllabus && (
                <div className='flex gap-x-2'>
                    <File className='text-sky-500' />
                    {initialData.syllabus}
                </div>
            )}
            {initialData.syllabus && (
                <Button className='mt-2 flex items-center' onClick={deleteSyllabus}>
                    Delete File
                </Button>
            )}
            {isEditing && (
                <div>
                    <FileUpload
                        endpoint='courseAttachment'
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ syllabus: url })
                            }
                        }} />
                    <div className="text-xs text-muted-foreground mt-4">
                        Add Syllabus File in PDF Format
                    </div>
                </div>
            )}
        </div>
    )
}