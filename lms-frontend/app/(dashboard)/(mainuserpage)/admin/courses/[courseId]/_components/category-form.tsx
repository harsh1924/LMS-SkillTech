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

interface CategoryFormProps {
    initialData: {
        category: string
    };
    courseId: string
}

export const CategoryForm = ({
    initialData,
    courseId
}: CategoryFormProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [courseCategory, setCourseCategory] = useState({
        category: initialData.category
    });

    const toggleEdit = () => setIsEditing((current) => !current);
    const router = useRouter();

    const onSubmit = async () => {
        try {
            await axios.put(`/api/course/${courseId}/changeCategory`, courseCategory);
            toast.success('Course Updated');
            toggleEdit();
            router.refresh();
        } catch (error: any) {
            toast.error('Something went wrong')
            console.log(error.message);
        }

    }

    const handleUserInput = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setCourseCategory({
            ...courseCategory,
            [name]: value,
        });
    };

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course Category
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Category
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className="text-sm mt-2">
                    {initialData.category}
                </p>
            )}
            {isEditing && (
                <form onSubmit={onSubmit} className='flex flex-col gap-y-4 justify-between items-start'>
                    <select id="options" value={courseCategory.category} onChange={handleUserInput} name="category" className="p-2 border rounded-md text-[13px] outline-none">
                        <option value="">Select Course</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Data Science and Business Analytics">Data Science and Business Analytics</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="AI and ML">AI and ML</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="IT Service">IT Service</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Workshop">Workshop</option>
                        <option value="On Job Training">On Job Training</option>
                        <option value="Language Course">Language Course</option>
                    </select>
                    <Button type='submit'>
                        Save
                    </Button>
                </form>
            )}
        </div>
    )
}