const btns = document.querySelectorAll('.question-block__btn');
btns.forEach( btn => {
  btn.addEventListener('click', (e) => {
    e.target.classList.toggle('open')
    const element  = e.target.parentNode;
    recursion(element);
    // Array.from(e.target.parentNode.children).forEach( el => {console.log(el)})
  });
});

function recursion (element) {
  element.childNodes.forEach( node => {
      if( node.className === 'question-block__description') {
  
          const handler = () => {
            node.classList.remove('enter-active');
            node.removeEventListener('transitionend', handler);
          }

          node.style.display = 'block';
          node.classList.add('enter');
          node.classList.add('enter-active');
          node.classList.remove('enter');
          node.addEventListener('transitionend', handler);
      }
      
      else if( node.className === 'question-block__description enter-active') {
        const handler = () => {
          node.style.display = 'none';
          node.classList.remove('leave-active');
          node.removeEventListener('transitionend', handler);
        }
    
          node.classList.add('leave-active');
          node.addEventListener('transitionend', handler);
    }
      else {
          recursion(node)
      }
  });
}


