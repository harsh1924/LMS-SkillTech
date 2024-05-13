'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { ImageIcon, Pencil, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FileUpload } from '@/components/file-upload';

interface VideoFormProps {
    initialData: {
        imageUrl: string
    };
    courseId: string
}

const formSchema = z.object({
    imageUrl: z.string().min(1)
});

export const ImageForm = ({
    initialData,
    courseId
}: VideoFormProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            imageUrl: initialData.imageUrl || ""
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

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course Image
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing && (
                        <>Cancel</>
                    )}
                    {!isEditing && !initialData.imageUrl && (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add an image
                        </>
                    )}
                    {!isEditing && initialData.imageUrl && (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Upload Image
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className="text-sm mt-2">
                    {!initialData.imageUrl ? (
                        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
                            <ImageIcon className='h-10 w-10 text-slate-500' />
                        </div>
                    ) : (
                        <div className="relative aspect-video mt-2">
                            Current Image
                            <Image
                                src={initialData.imageUrl}
                                alt='Upload'
                                fill
                                className='object-cover rounded-md' />
                        </div>
                    )}
                </p>
            )}
            {isEditing && (
                <div>
                    <FileUpload
                        endpoint='courseImage'
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ imageUrl: url })
                            }
                        }} />
                    <div className="text-xs text-muted-foreground mt-4">
                        16:9 aspect ratio recommended
                    </div>
                </div>
            )}
        </div>
    )
}