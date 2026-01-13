import React from 'react';
import Image from '../../../components/AppImage';

const ArticleImage = ({ src, alt, caption }) => {
    return (
        <figure className="mb-8 lg:mb-12">
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
            {caption && (
                <figcaption className="text-sm md:text-base text-muted-foreground text-center mt-3 md:mt-4 italic">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default ArticleImage;