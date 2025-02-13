import React from 'react';

interface StarRatingProps {
    rating: number; // Rating should be a number between 0 and totalStars
    totalStars?: number; // Total number of stars to display
}

const StarRating: React.FC<StarRatingProps> = ({
    rating,
    totalStars = 5,
}) => {
    return (
        <div style={{ display: 'flex', gap: 2 }}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={starValue}
                        style={{
                            fontSize: '10px',
                            color: starValue <= rating ? '#F00AF0' : 'gray',
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
