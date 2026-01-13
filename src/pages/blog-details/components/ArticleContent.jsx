import React from 'react';

const ArticleContent = ({ content }) => {
    return (
        <article className="prose prose-lg max-w-none">
            {content?.map((section, index) => (
                <section key={index} id={section?.id} className="mb-8 lg:mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                        {section?.title}
                    </h2>

                    {section?.paragraphs?.map((paragraph, pIndex) => (
                        <p
                            key={pIndex}
                            className="text-base md:text-lg text-foreground leading-relaxed mb-4 md:mb-6"
                        >
                            {paragraph}
                        </p>
                    ))}

                    {section?.quote && (
                        <blockquote className="pull-quote">
                            {section?.quote}
                        </blockquote>
                    )}

                    {section?.list && (
                        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 ml-4 md:ml-6">
                            {section?.list?.map((item, lIndex) => (
                                <li
                                    key={lIndex}
                                    className="text-base md:text-lg text-foreground leading-relaxed flex items-start"
                                >
                                    <span className="text-primary mr-2 md:mr-3 font-bold">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </article>
    );
};

export default ArticleContent;