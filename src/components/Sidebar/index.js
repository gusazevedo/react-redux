import React from 'react';

import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

// não esquecer das {} ao passar os "modules" pois é um objeto
const Sidebar = ({ modules, toggleLesson }) => (

  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Tornar ativo
              </button>  
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
});

// a funcção connect passa uma outa função com estado que eu quero 
// e eu preciso retornar dessa função quais props eu quero daquele estado (nesse caso todas as props)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
