'use client';

interface data {
    title: string,
    description: string,
    category: string,
    createdBy: string
}


const CourseCard = ({
    title,
    description,
    category,
    createdBy
}: data) => {
    return (
        <div className="flex rounded border-black border py-12 px-14 mb-8">
            <div className="flex flex-col gap-y-3 w-full">
                <div className="text-3xl text-center font-serif font-bold ">
                    {title}
                </div>
                <div className="text-lg font-serif">
                    <span className="text-lg font-semibold">Description:</span>  {description}
                </div>
                <p><span className="text-lg font-semibold">Category:</span>
                    {category}</p>
                <p>
                    <span className="text-lg font-semibold">Created By:</span>
                    {createdBy}</p>
            </div>
        </div>
    );
}

export default CourseCard;