import deleteIcon from '../../assets/images/icon-cross.svg';

const taskTemplate = ({ id, name, isCompleted }) => {
  const $template = document.createElement('div');

  $template.innerHTML = `
  <div class="todo__item ${isCompleted ? 'completed' : ''} " id="${id}">

    <div class="check"></div>

    <p class="todo__text">${name}</p>

    <img src="${deleteIcon}" class="todo__delete" />
    
  </div>`;

  return $template.firstElementChild;
};

export default taskTemplate;
