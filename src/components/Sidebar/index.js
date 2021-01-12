import React from 'react';

import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

// não esquecer das {} ao passar os "modules" pois é um objeto
const Sidebar = ({ modules, dispatch }) => (

  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>
                Tornar ativo
              </button>  
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

// a funcção connect passa uma outa função com estado que eu quero 
// e eu preciso retornar dessa função quais props eu quero daquele estado (nesse caso todas as props)
export default connect(state => ({ modules: state.course.modules }))(Sidebar);
