import { useState, useEffect } from "react";
import parse from 'html-react-parser';

const Review = ({review, index}) => {
    /* const [postDate, setPostDate] = useState("");
    
    useEffect(() => {
        let dt = DateTime.fromISO(comment.createdAt)
        setPostDate(() => dt.toLocaleString(DateTime.DATETIME_MED))
    }, []); */ 

    return (
        <div key={index} className="border-b border-gray-100 mb-4 pb-4">
            <p className="mb-4">
            <span className="font-semibold">{review.name}</span>
            {/* <span className="ml-2 text-gray-500">el {postDate}</span> */}
            </p>
            <p className="whitespace-pre-line text-gray-600 w-full">{parse(review.content)}</p>
        </div>
    );
}
 
export default Review;