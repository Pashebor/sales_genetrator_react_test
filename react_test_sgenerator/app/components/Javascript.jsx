'use strict';

import React from 'react';
import Header from './Header.jsx';

const Javascript = () => {
   return(
       <div>
           <Header page="javascript"/>
       <div className="container">
          <article className="blog-article">
              <figure className="image-block">
                  <img className="image-block__picture" alt="Javascript logo" title="Javascript logo" src="images/javascript.png"/>
              </figure>
              <h2 className="blog-article__description">Javascript</h2>
              <p className="blog-article__note">JavaScript изначально создавался для того, чтобы сделать web-странички «живыми». Программы на этом языке называются скриптами. В браузере они подключаются напрямую к HTML и, как только загружается страничка – тут же выполняются.

                  Программы на JavaScript – обычный текст. Они не требуют какой-то специальной подготовки.

                  В этом плане JavaScript сильно отличается от другого языка, который называется Java.

                  Почему JavaScript?
                  Когда создавался язык JavaScript, у него изначально было другое название: «LiveScript». Но тогда был очень популярен язык Java, и маркетологи решили, что схожее название сделает новый язык более популярным.

                  Планировалось, что JavaScript будет эдаким «младшим братом» Java. Однако, история распорядилась по-своему, JavaScript сильно вырос, и сейчас это совершенно независимый язык, со своей спецификацией, которая называется ECMAScript, и к Java не имеет никакого отношения.

                  У него много особенностей, которые усложняют освоение, но по ходу учебника мы с ними разберёмся.

                  JavaScript может выполняться не только в браузере, а где угодно, нужна лишь специальная программа – интерпретатор. Процесс выполнения скрипта называют «интерпретацией».</p>
          </article>
       </div>
       </div>
   )  
};

export default Javascript;