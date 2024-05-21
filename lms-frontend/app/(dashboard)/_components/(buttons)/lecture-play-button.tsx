interface lectureData {
    videoUrl: string,
    lectureId: string,
    lectureTitle: string,
    lectureDescription: string
}

export const PlayLecture = ({
    videoUrl,
    lectureId,
    lectureTitle,
    lectureDescription,
}: lectureData) => {
    return (
        <div>
            <iframe src={videoUrl}></iframe>
        </div>
    )
}