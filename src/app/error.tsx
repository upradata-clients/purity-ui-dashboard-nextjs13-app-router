'use client';

export const Error: React.FC<{ error: string; reset: () => {}; }> = ({ error, reset, }) => {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
};

export default Error;
