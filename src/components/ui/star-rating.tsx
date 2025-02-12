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
        <div style={{ display: 'flex' }}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={starValue}
                        style={{
                            fontSize: '10px',
                            color: starValue <= rating ? 'gold' : 'gray',
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
