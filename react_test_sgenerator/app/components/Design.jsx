'use strict';

import React from 'react';
import Header from './Header.jsx';

const Design = () => {
    return(
        <div>
            <Header page="design"/>
            <div className="container">
                <article className="blog-article">
                    <figure className="image-block">
                        <img className="image-block__picture" alt="Design logo" title="Design logo" src="images/design.png"/>
                    </figure>
                    <h2 className="blog-article__description">Design</h2>
                    <p className="blog-article__note">Design is the creation of a plan or convention for the construction of an object, system or measurable human interaction (as in architectural blueprints, engineering drawings, business processes, circuit diagrams, and sewing patterns).[1] Design has different connotations in different fields (see design disciplines below). In some cases, the direct construction of an object (as in pottery, engineering, management, coding, and graphic design) is also considered to be design.

                        Designing often necessitates considering the aesthetic, functional, economic, and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. Meanwhile, diverse kinds of objects may be designed, including clothing, graphical user interfaces, skyscrapers, corporate identities, business processes, and even methods of designing.[2]

                        Thus "design" may be a substantive referring to a categorical abstraction of a created thing or things (the design of something), or a verb for the process of creation, as is made clear by grammatical context.</p>
                </article>
            </div>
        </div>
    );
};

export default Design;